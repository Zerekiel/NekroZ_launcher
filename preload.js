const customTitlebar = require('custom-electron-titlebar');


window.addEventListener('load', () => {
  document.getElementById('body').className += 'loaded';
})

window.addEventListener('load', () => {
  new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#25294A')
  });

  /*const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }*/
});

