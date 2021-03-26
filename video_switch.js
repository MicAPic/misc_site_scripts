function convertTime(sec) {
    var seconds = Math.floor(sec % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var minutes = Math.floor(sec / 60);
    return minutes + ":" + seconds;

}

window.onload = function set_dur() {
    let video = document.getElementById('video'),
        canvas1 = document.querySelector('[id^="PB"]').getContext('2d'),
        canvas2 = document.getElementById('video-pb').getContext('2d'),
        vdEllipse = document.querySelector('[id^="VD"]'),
        length = document.getElementById('video-length');

    canvas1.clearRect(0, 0, 994 + 33, 33);
    canvas1.fillStyle = "#797979";
    canvas1.fillRect(16.5, 15, 994, 3);
    canvas2.clearRect(0, 0, 655 + 33, 33);
    canvas2.fillStyle = "#797979";
    canvas2.fillRect(16.5, 15, 655, 3);
    vdEllipse.setAttribute("style", "border-radius: 29px; width: 185px;");
    video.onloadedmetadata = function() {
        length.innerHTML = convertTime(video.duration);
    }
}

function video_switch(clicked_id) {
    let video = document.getElementById('video'),
        title = document.getElementById('video-title'),
        description = document.getElementById('video-description'),
        length = document.getElementById('video-length'),
        play = document.getElementById('video-play-button'),
        vdEllipse = document.querySelectorAll('[id^="VD"]');

    title.innerHTML = clicked_id.split('λ')[2];
    description.innerHTML = clicked_id.split('λ')[3];
    video.src = clicked_id.split('λ')[4];
    video.poster = clicked_id.split('λ')[5];
    for (var i = 0; i < vdEllipse.length;  ++i) {
        vdEllipse[i].setAttribute("style", "width: 7px; border-radius: 50%;");
    }
    document.getElementById(clicked_id).setAttribute("style", "border-radius: 29px; width: 185px;");
    video.onloadedmetadata = function() {
        length.innerHTML = convertTime(video.duration);
    }
    if (play.classList.contains('video-play-playing')) {
        play.classList.remove('video-play-playing');
    }
}
