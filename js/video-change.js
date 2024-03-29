const video = document.getElementById("video-home");

function actualizarVideo() {
    if (window.innerWidth<576){
        video.setAttribute("src","assets/videos/video-sm.mp4")
    }else{
        video.setAttribute("src","assets/videos/video-md-lg.mp4")
    }
}

actualizarVideo();

window.addEventListener('resize', actualizarVideo)