$(function(){
    $('#get-receipt').on("click", function(){
        domtoimage.toPng(document.getElementById('solving'), {'bgcolor':'white'})
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'receipt.png';
            link.href = dataUrl;
            link.click();
        });
    });
});