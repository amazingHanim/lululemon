$(function(){
    function mainMenu() {
        var $body = $('body'),
            $hdrWrap = $body.find(".hdrWrap"),
            $mainMenuList = $hdrWrap.find(".mainMenu"),
            $mainMenu = $mainMenuList.children(),
            $subMenuList = $mainMenu.find(".subMenu"),
            $subMenu = $subMenuList.children(),
            $hamBtn = $hdrWrap.find(".hamBtn");

            $subMenuList.hide();


        
        $hamBtn.on("click",function (){
            $body.toggleClass("on");
        });

        $mainMenu.on("mouseenter", function () {
            num = $(this).index();
            $subMenuList.hide()
            $(this).find($subMenuList).slideDown(300);

        });
        $hdrWrap.on("mouseleave", function () {
            $subMenuList.hide()
        });
        $(window).on("resize",function(){
            $body.removeClass("on");
            $subMenuList.hide();
        })

    }
    mainMenu();
})