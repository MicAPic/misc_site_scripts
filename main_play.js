function main_play(clicked_id) {
    let object = document.getElementById('main-inner-play'),
        objectArray = document.getElementsByClassName('playing'),
        audio = document.getElementById('song_' + clicked_id.split('_')[1]),
        audioArray = document.getElementsByTagName('audio'),
        vol = 0,
        objectDouble = document.querySelectorAll('[id^="' + clicked_id.split('_')[1] + '_' + '"]'),
        interval = 100;

    if (clicked_id === 'MAIN_none_none_none') {
        return 0;
    } else if (!object.classList.contains('playing')) {
        for(var j = 0; j < objectArray.length; ++j) {
            objectArray[j].classList.remove('playing')
        }
        for(var k = 0; k < audioArray.length; ++k) {
           audioArray[k].pause();
        }
        object.classList.add('playing');
        for(var h = 0; h < objectDouble.length; ++h) {
           objectDouble[h].classList.add('playing');
        }
        let fadeout = setInterval(
  function() {
            audio.play();
            if (vol < 1) {
                vol += 0.25;
                audio.volume = vol;
            }
            else {
                clearInterval(fadeout);
            }
        }, interval);
    } else {
        for(var i = 0; i < objectArray.length; ++i) {
            objectArray[i].classList.remove('playing')
        }
        object.classList.remove('playing');
        for(var l = 0; l < objectDouble.length; ++l) {
           objectDouble[l].classList.remove('playing');
        }
        audio.pause();
    }
}