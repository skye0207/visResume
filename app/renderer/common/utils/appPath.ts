import { ipcRenderer } from 'electron';

// get project absolute path
export function getAppPath() {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('project path error!'));
      }
    });
  });
}
