const { ipcRenderer } = require("electron");

document.getElementById("button").addEventListener("click", () => {
  const url = document.getElementById("urlInput").value.trim();
  const format = document.getElementById("formatSelect").value.toLowerCase();

  if (!url) {
    alert("Lütfen geçerli bir URL girin.");
    return;
  }

  ipcRenderer.send("start-download", { url, format }); // 👈 url ve format birlikte gönderiliyor
});

ipcRenderer.on("download-complete", (event, message) => {
  alert(message);
});

ipcRenderer.on("download-error", (event, errorMsg) => {
  alert("Hata: " + errorMsg);
});
