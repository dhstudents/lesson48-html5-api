(function(){
    var video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        photo = document.getElementById('photo'),
        vendorUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia || 
                         navigator.webkitGetUserMedia || 
                         navigator.mozGetUserMedia || 
                         navigator.msGetUserMedia;

    // capture video
    navigator.getMedia({
        video: true,
        audio:true
    }, function(stream){
        //console.log(stream);
        video.src = vendorUrl.createObjectURL(stream);
        video.play();
    }, function(error) {
        // error handling here 
        // error.code  
    });

    document.getElementById('capture').addEventListener('click' , function(){
        context.drawImage(video , 0,0,400,300);
        photo.setAttribute('src' , canvas.toDataURL('image/png'));

    })


})();