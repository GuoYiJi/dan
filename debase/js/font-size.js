    function auto(){
        var width=$('body').width();
        var font_size = 10*(width/320);
        var font_size2 = (width/320)*625+'%';
        $('body').css('font-size',font_size);
        $('html').css('font-size',font_size2);
    }
     auto();

    window.onorientationchange = function() {
        auto();
    };
    
    /* 浏览器窗口发生改变也运行函数*/
    $(window).resize(function(){
       auto();
    });