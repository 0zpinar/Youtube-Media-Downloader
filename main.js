const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process");
const path = require("path");

app.whenReady().then(() => {
  const myWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  myWindow.loadFile("index.html");

  ipcMain.on("start-download", (event, { url, format }) => {
    if (!url || !format) {
      event.reply("download-error", "URL veya format eksik.");
      return;
    }

    const now = new Date();
    const dateString = now.toISOString().split("T")[0]; // "2025-06-08"

    const downloadsPath = path.join(process.env.USERPROFILE, "Downloads");
    const outputPath = path.join(
      downloadsPath,
      `${dateString} - %(title)s.%(ext)s`
    );

    const command = `yt-dlp -x --audio-format ${format} -o "${outputPath}" "${url}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("İndirme hatası:", error);
        event.reply("download-error", error.message);
        return;
      }

      console.log("YT-DLP stdout:", stdout);
      console.error("YT-DLP stderr:", stderr);

      console.log("İndirme tamamlandı!");
      event.reply(
        "download-complete",
        "İndirme tamamlandı! Dosya 'Downloads' klasörüne kaydedildi."
      );
    });
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
