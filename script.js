document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("wildlifeVideo");
    const videoWrapper = document.getElementById("videoWrapper");
    const toggleBtn = document.getElementById("videoBtn");

    toggleBtn.addEventListener("click", () => {
        
        if (video.paused || video.ended) {
            
            videoWrapper.classList.remove("hidden");
          
            video.play();
           
            toggleBtn.textContent = "Hide Video";
        } 
        
        else {
            
            video.pause();
            
            videoWrapper.classList.add("hidden");
            toggleBtn.textContent = "Play Video";
        }
    });
});