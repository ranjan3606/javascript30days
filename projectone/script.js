function remove(e){
    if(e.propertyName !== 'transform') return; //stop function here 
    e.target.className.remove('playing'); //remove click class 
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//create variable to and add queryselector to call auto keycode function
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);//create variable key name inwhich i call document querySeletor to key class and caall data-key pass e parameter with keycode

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitioned', remove))
window.addEventListener('keydown', playSound);//define the window and addeventlistener to work to keydown and create function in pass parameter (e)