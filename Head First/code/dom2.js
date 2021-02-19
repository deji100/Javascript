function init() {
    var gp = document.getElementById('greenplanet');
    gp.innerHTML = " Red alert: hit by phaser fire.";
    gp.setAttribute("class", "redtext");
}

window.onload = init;