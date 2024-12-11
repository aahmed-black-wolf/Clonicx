export interface ElectronAPI {
  getVersions: () => Promise<{
    chrome: string;
    node: string;
    electron: string;
  }>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
