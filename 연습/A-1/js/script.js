$(function(){ // 문서를 로딩 후 실행하라
    // 슬라이드

    function slide(){
        $(".slide ul").animate({top:"-300px"}, 1000, function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({top:0})
        })
    }

    setInterval(slide, 3000)

    // 탭 메뉴
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass('on')
        $(this).addClass('on');

        var i =$(this).index()

        console.log(i);

        $(".tabcon").hide()
        $(".tabcon").eq(i).show()

        return false;
    })

    // 메뉴
    $("nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown();
    })

    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

   

    // 팝업
    $(".pp").click(function(){
        $(".close").show();
        return false; // 링크 차단
    })

    $("button").click(function(){
        $(".close").hide();
    })
})