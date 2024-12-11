import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  getVersions: () => ipcRenderer.invoke("get-versions"),
});
