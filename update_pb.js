function update_pb(current_id) {
    let canvasWidth = 994,
        canvas = document.querySelector('[id^="PB"]').getContext('2d'),
        audio = document.getElementById('song_' + current_id.split('_')[1]),
        nextAudio = document.getElementById('song_' + (parseInt(current_id.split('_')[1], 10) + 1)),
        objectArray = document.getElementsByClassName('inner-play'),
        nextObjectArray = document.querySelectorAll('[id^="' + (parseInt(current_id.split('_')[1], 10) + 1) + '_' + '"]'),
        main = document.getElementById('main-inner-play'),
        mainArray = document.querySelector('[id^="MAIN"]'),
        ffButton = document.querySelector('[id^="FF"]'),
        fbButton = document.querySelector('[id^="FB"]'),
        vol = 0,
        interval = 100,
        songTitle = document.getElementById('song-title'),
        albumTitle = document.getElementById('album-title'),
        currentTime = audio.currentTime,
        duration = audio.duration,
        gradient = canvas.createLinearGradient(0, 0, 1027, 0),
        progress = (canvasWidth * (currentTime / duration));

    gradient.addColorStop(0, "#EF2828");
    gradient.addColorStop(1, "#721F87");
    canvas.clearRect(0, 0, canvasWidth + 33, 33);
    canvas.fillStyle = "#797979";
    canvas.fillRect(16.5, 15, canvasWidth, 3);
    canvas.fillStyle = gradient;
    canvas.fillRect(16.5, 12, progress, 9);
    canvas.beginPath();
    canvas.arc(progress + 16.5,16.5,12.5,0,2 * Math.PI,true);
    canvas.fillStyle = "#131313";
    canvas.fill();
    canvas.lineWidth = 4;
    canvas.strokeStyle = "white";
    canvas.stroke();

    if ((currentTime === duration) && (nextAudio != null)) {
        audio.pause();
        audio.currentTime = 0;
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
    } else if ((currentTime === duration) && (nextAudio == null)){
        audio.pause();
    }
}

function update_video_pb() {
    let width = 655,
        canvas = document.getElementById('video-pb').getContext('2d'),
        gradient = canvas.createLinearGradient(0, 0, 688, 0),
        video = document.getElementById('video'),
        length = document.getElementById('video-length'),
        duration = video.duration,
        currentTime = video.currentTime,
        progress = (width * (currentTime / duration)),
        playButton = document.getElementById('video-play-button'),
        playCircle = document.getElementById('beeg');

    gradient.addColorStop(0, "#EF2828");
    gradient.addColorStop(1, "#721F87");
    canvas.clearRect(0, 0, width + 33, 33);
    canvas.fillStyle = "#797979";
    canvas.fillRect(16.5, 15, width, 3);
    canvas.fillStyle = gradient;
    canvas.fillRect(16.5, 12, progress, 9);
    canvas.beginPath();
    canvas.arc(progress + 16.5,16.5,12.5,0,2 * Math.PI,true);
    canvas.fillStyle = "#FFFFFF";
    canvas.fill();
    canvas.lineWidth = 4;
    canvas.strokeStyle = "white";
    canvas.stroke();

    if (currentTime === duration) {
        playCircle.style.visibility = "visible";
        playButton.classList.remove('video-play-playing');
    } else if (currentTime == 0) {
        playCircle.style.visibility = "visible";
    }

    function convertTime(sec) {
        var seconds = Math.floor(sec % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var minutes = Math.floor(sec / 60);
        return minutes + ":" + seconds;
    }
    length.innerHTML = convertTime(currentTime);
}