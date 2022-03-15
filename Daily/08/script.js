const Taxi = document.querySelector('#TA');
const audio = document.querySelector("#audio_play");

function play() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0
    }
}

Taxi.addEventListener('click', (e) => {
    play();
})
