$(function(){
    $('#get-receipt').on("click", function(){
        $('span.n1').css('font-size', '14px');
        $('span.n2').css('font-size', '14px');
        $('td.inf').css('background-color', '#e5e5f7');
        $('p.selected').css('background-color', '#e5e5f7');
        $('td.selected').css('background-color', '#e5e5f7');
        if($('#solving table td.edges-info').length>0){
            $('#solving table').each(function(){
                $el = $(this);
                $el.append("<tr></tr>");
                $info = $el.find('tr').last();
                $el.find('td.edges-info').appendTo($info);
                $el.find('td.edges-info').attr('colspan','100');
                $el.find('td.edges-info').find('p').first().remove();
            });
        }
        domtoimage.toPng(document.getElementById('solving'), {'bgcolor':'white'})
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'receipt.png';
            link.href = dataUrl;
            link.click();
        });
    });
});