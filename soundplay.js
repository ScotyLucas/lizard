    const playLizard = document.getElementById('playLizard');
    const playWiwiwi = document.getElementById('playWiwiwi');
    const playBudosc = document.getElementById('playBudosc');
    const playCsipicsipi = document.getElementById('playCsipicsipi');
    const Lizard = document.getElementById('Lizard');
    const Wiwiwi = document.getElementById('Wiwiwi');
    const Budosc = document.getElementById('Budosc');
    const Csipicsipi = document.getElementById('Csipicsipi');

    playLizard.addEventListener('click', () => {
        Lizard.play();
    });

    playWiwiwi.addEventListener('click', () => {
        Wiwiwi.play();
    });

    playBudosc.addEventListener('click', () => {
        Budosc.play();
    });

    playCsipicsipi.addEventListener('click', () => {
        Csipicsipi.play();
    });