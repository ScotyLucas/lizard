    const playButton = document.getElementById('playButton');
    const myAudio = document.getElementById('myAudio');

    playButton.addEventListener('click', () => {
        myAudio.play();
    });