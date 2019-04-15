$(function() {
    $('#div1').click(function(){
        $('#div2').slideDown(3000);
    });
    $('#div3').click(function(){
        $('#div4').slideUp(3000);
    });
    $('#btnStop').click(function(){
        $('#div2, #div4').stop();
    });


    //stop()
    //finish()
});
