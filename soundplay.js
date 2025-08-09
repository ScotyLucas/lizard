    //buttons to play
    
    const playLizard = document.getElementById('playLizard');
    const playWiwiwi = document.getElementById('playWiwiwi');
    const playBudosc = document.getElementById('playBudosc');
    const playCsipicsipi = document.getElementById('playCsipicsipi');
    const playNoopolizia = document.getElementById('playNoopolizia');
    const playThungSahur = document.getElementById('playThungSahur');
    const playHappyhappy = document.getElementById('playHappyhappy');

    //sound

    const Lizard = document.getElementById('Lizard');
    const Wiwiwi = document.getElementById('Wiwiwi');
    const Budosc = document.getElementById('Budosc');
    const Csipicsipi = document.getElementById('Csipicsipi');
    const Noopolizia = document.getElementById('Noopolizia');
    const ThungSahur = document.getElementById('ThungSahur');
    const Happyhappy = document.getElementById('Happyhappy');

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

    playNoopolizia.addEventListener('click', () => {
        Noopolizia.play();
    });

    playThungSahur.addEventListener('click', () => {
        ThungSahur.play();
    });

    playHappyhappy.addEventListener('click', () => {
        Happyhappy.play();
    });
