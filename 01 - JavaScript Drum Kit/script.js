window.addEventListener(
    'keydown', function(e){
        const keycode= e.code;
        const audio= document.querySelector(`audio[data-key="${keycode}"]`);
        const key= document.querySelector(`div[data-key="${keycode}"]`);
        playAudio(audio);
        key.classList.add('playing');

    }
)

function playAudio(audio){         
    if (!audio) return;
    audio.currentTime=0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName!=='transform') return;
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});