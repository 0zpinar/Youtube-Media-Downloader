Important:
Before running the application, please make sure to:

Open PowerShell as a normal user and run the following command to enable script execution:

    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

In your Electron project files, make sure to import the necessary libraries at the top of your main script file like this:

    const { app, BrowserWindow, ipcMain, Menu } = require("electron");
    const { exec } = require("child_process");
    const path = require("path");

This will ensure the application has the required permissions and dependencies to run properly.

Notice and Disclaimer:

This code is provided for educational purposes only and may not be used, copied, or distributed for any commercial purposes without prior permission. All copyrights are reserved.

Any use of this code must respect the original author’s rights, including proper attribution, and unauthorized reproduction or distribution is prohibited. Copyright infringement may result in legal consequences.

This project is shared solely for learning and teaching purposes. Any modifications or use of the code must comply with applicable laws and regulations
