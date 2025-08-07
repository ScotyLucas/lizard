    const playLizard = document.getElementById('playLizard');
    const playWiwiwi = document.getElementById('playWiwiwi');
    const Lizard = document.getElementById('Lizard');
    const Wiwiwi = document.getElementById('Wiwiwi');

    playLizard.addEventListener('click', () => {
        Lizard.play();
    });

    playWiwiwi.addEventListener('click', () => {
        Wiwiwi.play();
    });