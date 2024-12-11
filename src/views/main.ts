import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow | null;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: true,
    },
  });

  mainWindow.webContents.openDevTools();

  mainWindow.loadFile(path.join(__dirname, "../index.html")).catch((err) => {
    console.error("Failed to load index.html:", err);
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
