function play(clicked_id) {
    let object = document.querySelectorAll('[id^="' + clicked_id.split('_')[1] + '_' + '"]'),
        objectArray = document.getElementsByClassName('inner-play'),
        audio = document.getElementById('song_' + clicked_id.split('_')[1]),
        audioArray = document.getElementsByTagName('audio'),
        vol = 0,
        interval = 100,
        songTitle = document.getElementById('song-title'),
        albumTitle = document.getElementById('album-title'),
        main = document.getElementById('main-inner-play'),
        mainArray = document.querySelector('[id^="MAIN"]'),
        ffButton = document.querySelector('[id^="FF"]'),
        progressBar = document.querySelector('[id^="PB"]'),
        fbButton = document.querySelector('[id^="FB"]');


    if (!object[0].classList.contains('playing')) {
        for(var j = 0; j < objectArray.length; ++j) {
            objectArray[j].classList.remove('playing')
        }
        for(var k = 0; k < audioArray.length; ++k) {
           audioArray[k].pause();
        }
        for(var i = 0; i < object.length; ++i) {
           object[i].classList.add('playing');
        }
        main.classList.add('playing');
        ffButton.id = 'FF' + clicked_id;
        fbButton.id = 'FB' + clicked_id;
        progressBar.id = 'PB' + clicked_id;
        mainArray.id = 'MAIN' + clicked_id;
        songTitle.innerHTML = clicked_id.split('_')[2];
        songTitle.setAttribute("style", "color: white; -webkit-text-stroke: 1px white;");
        albumTitle.innerHTML = clicked_id.split('_')[3];
        albumTitle.setAttribute("style", "color: white; -webkit-text-stroke: 1px white;");
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
        audio.pause();
        for(var h = 0; h < object.length; ++h) {
           object[h].classList.remove('playing');
        }
        main.classList.remove('playing');
    }
}

function video_play() {
    let currentVideo = document.getElementById('video'),
        button = document.getElementById('video-play-button'),
        playCircle = document.getElementById('beeg');

    if (!button.classList.contains('video-play-playing')) {
        button.classList.add('video-play-playing');
        playCircle.style.visibility = 'hidden';
        currentVideo.play();
    } else {
        button.classList.remove('video-play-playing');
        currentVideo.pause();
    }
}