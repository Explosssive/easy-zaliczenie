$(function(){
    $('#get-receipt').on("click", function(){
        domtoimage.toJpeg(document.getElementById('solving'), {'bgcolor':'white'})
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'receipt.jpg';
            link.href = dataUrl;
            link.click();
        });
    });
});