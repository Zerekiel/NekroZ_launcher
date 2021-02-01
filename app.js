const { app, BrowserWindow , Menu } = require('electron');
//const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        //titleBarStyle: 'hidden',
        frame: false,
        webPreferences: {
          //  preload: path.join(__dirname, 'preload.js'),
            enableRemoteModule: true,
            nodeIntegration: true
        }
    });

    Menu.setApplicationMenu(null);
    win.loadFile('view/home.html');
    win.webContents.openDevTools();
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});