function show_video_controls() {
    let playButton = document.getElementById('video-play-button'),
        progressBar = document.getElementById('video-pb'),
        length = document.getElementById('video-length'),
        playCircle = document.getElementById('beeg'),
        video = document.getElementById('video');

    video.style.opacity = 0.53;
    playButton.style.visibility = "visible";
    progressBar.style.visibility = "visible";
    length.style.visibility = "visible";
    playCircle.style.boxShadow = "0 0 27px #1A2F79";
}

function hide_video_controls() {
    let playButton = document.getElementById('video-play-button'),
        progressBar = document.getElementById('video-pb'),
        length = document.getElementById('video-length'),
        playCircle = document.getElementById('beeg'),
        video = document.getElementById('video');

    video.style.opacity = 1;
    playButton.style.visibility = "hidden";
    progressBar.style.visibility = "hidden";
    length.style.visibility = "hidden";
    playCircle.style.boxShadow = "0 0 0 #1A2F79";
}