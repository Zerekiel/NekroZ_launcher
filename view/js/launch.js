const cp = require ('child_process');

var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);

var play = document.getElementById("play");

play.addEventListener("click", () => {

    const { stdout, stderr } = cp.spawnSync(process.cwd() + '/GameFile/GameDesign.exe');
    myConsole.log(stdout.toString());
    myConsole.log(stderr.toString());
    
});
