const { ipcMain, app, BrowserWindow } = require('electron')
let win;
function createWindow () {
   win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('agrandar',(event) =>{
  win.setSize(900,600)
});

ipcMain.on('disminuir',(event) =>{
  win.setSize(600,600)
});