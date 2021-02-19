function addSong() {
    var song1 = document.getElementById('song1');
    song1.innerHTML = "Kudi, by Kiss Daniel";
    var song2 = document.getElementById('song2');
    song2.innerHTML = "Sunflower, by Post Malone";
    var song3 = document.getElementById("song3");
    song3.innerHTML = "Dead Man walking, by Jeremy Camp";

}

window.onload = addSong;