$(function(){
    function mainMenu() {
        var $hdrWrap = $('.hdrWrap'),
            $mainMenuList = $hdrWrap.find(".mainMenu"),
            $mainMenu = $mainMenuList.children();
        var $navWrap = $('.navWrap'),
            $navList = $navWrap.children(),
            $nav = $navList.children("ul");
            $nav.hide();



        $mainMenu.on("mouseenter", function () {
            num = $(this).index();
            $mainMenu.removeClass("on")
            $(this).addClass("on");
            $nav.hide();
            $nav.eq(num).fadeIn(300);
        });
        $navWrap.on("mouseleave", function () {
            $mainMenu.removeClass("on")
            $nav.hide();
        });

    }
    mainMenu();
})