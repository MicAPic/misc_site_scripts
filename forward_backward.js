function forward() {
    let ffButton = document.querySelector('[id^="FF"]'),
        clicked_id = ffButton.id,
        currentAudio = document.getElementById('song_' + clicked_id.split('_')[1]),
        nextAudio = document.getElementById('song_' + (parseInt(clicked_id.split('_')[1], 10) + 1)),
        objectArray = document.getElementsByClassName('inner-play'),
        nextObjectArray = document.querySelectorAll('[id^="' + (parseInt(clicked_id.split('_')[1], 10) + 1) + '_' + '"]'),
        songTitle = document.getElementById('song-title'),
        albumTitle = document.getElementById('album-title'),
        main = document.getElementById('main-inner-play'),
        mainArray = document.querySelector('[id^="MAIN"]'),
        fbButton = document.querySelector('[id^="FB"]'),
        vol = 0,
        interval = 100;

    if (clicked_id === 'FF_none') {
        return 0;
    } else if (nextAudio != null){
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(var j = 0; j < objectArray.length; ++j) {
            objectArray[j].classList.remove('playing');
        }
        for(var h = 0; h < nextObjectArray.length; ++h) {
           nextObjectArray[h].classList.add('playing');
        }
        main.classList.add('playing');
        var temp_array = clicked_id.split('_');
        temp_array[1] = parseInt(temp_array[1], 10) + 1;
        var  newObject = document.querySelector('[id*="_' + temp_array[1] + '_"]');
        mainArray.id = 'MAIN' + newObject.id;
        ffButton.id = 'FF' + newObject.id;
        fbButton.id = 'FB' + newObject.id;
        songTitle.innerHTML = newObject.id.split('_')[2];
        albumTitle.innerHTML = newObject.id.split('_')[3];
        let fadeout = setInterval(
  function() {
            nextAudio.play();
            if (vol < 1) {
                vol += 0.25;
                nextAudio.volume = vol;
            }
            else {
                clearInterval(fadeout);
            }
        }, interval);
    } else {
        currentAudio.pause();
    }
}

function backward() {
    let fbButton = document.querySelector('[id^="FB"]'),
        clicked_id = fbButton.id,
        currentAudio = document.getElementById('song_' + clicked_id.split('_')[1]),
        previousAudio = document.getElementById('song_' + (parseInt(clicked_id.split('_')[1], 10) - 1)),
        objectArray = document.getElementsByClassName('inner-play'),
        previousObjectArray = document.querySelectorAll('[id^="' + (parseInt(clicked_id.split('_')[1], 10) - 1) + '_' + '"]'),
        songTitle = document.getElementById('song-title'),
        albumTitle = document.getElementById('album-title'),
        main = document.getElementById('main-inner-play'),
        mainArray = document.querySelector('[id^="MAIN"]'),
        ffButton = document.querySelector('[id^="FF"]'),
        vol = 0,
        interval = 100;

    if (clicked_id === 'FB_none') {
        return 0;
    } else if (previousAudio != null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        for(var j = 0; j < objectArray.length; ++j) {
            objectArray[j].classList.remove('playing');
        }
        for(var h = 0; h < previousObjectArray.length; ++h) {
           previousObjectArray[h].classList.add('playing');
        }
        main.classList.add('playing');
        var temp_array = clicked_id.split('_');
        temp_array[1] = parseInt(temp_array[1], 10) - 1;
        var  newObject = document.querySelector('[id*="_' + temp_array[1] + '_"]');
        mainArray.id = 'MAIN' + newObject.id;
        ffButton.id = 'FF' + newObject.id;
        fbButton.id = 'FB' + newObject.id;;
        songTitle.innerHTML = newObject.id.split('_')[2];
        albumTitle.innerHTML = newObject.id.split('_')[3];
        let fadeout = setInterval(
  function() {
            previousAudio.play();
            if (vol < 1) {
                vol += 0.25;
                previousAudio.volume = vol;
            }
            else {
                clearInterval(fadeout);
            }
        }, interval);
    } else {
        currentAudio.currentTime = 0;
    }
}