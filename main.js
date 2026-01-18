const {app, BrowserWindow} = require ('electron')

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 400,
        resizable: false, // não deixará redimensionar a janela
        webPreferences: {
            nodeIntegration: true
        },
        autoHideMenuBar: true, // tira o menu
        frame: false // tira barra superior
    });

    mainWindow.loadFile('index.html');
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin') {
        app.quit();
    }
});