// دالة لعرض الفيديو عند النقر على زر "شاهد الفيديو"
function showVideo(videoId) {
    // إخفاء جميع مقاطع الفيديو الأخرى
    let allVideos = document.querySelectorAll('.video-container');
    allVideos.forEach(function(video) {
        video.style.display = 'none';
    });

    // إظهار الفيديو الذي تم النقر عليه
    let video = document.getElementById(videoId);
    video.style.display = 'block';
}
