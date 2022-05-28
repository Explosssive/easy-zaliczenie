$(function(){
    $('#get-receipt').on("click", function(){
        domtoimage.toPng(document.getElementById('solving'))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'receipt.jpg';
            link.href = dataUrl;
            link.click();
        });
    });
});