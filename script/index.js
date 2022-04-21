$(function () {

    function contentBest() {
        $best = $(".best"),
            $ovrgrid = $best.find(".ovrgrid"),
            $list = $ovrgrid.children(),
            $item = $list.children(),
            $size = $list.children(':eq(1)').innerWidth(),
            $bigSize = $list.children(".on").innerWidth(),
            $listNum = $item.length, //아이템 개수
            $list.children(":last").prependTo($list); //init
        //페이지네이션 start
        pageNow = 0;
        $pNation = $best.find(".pageNation"),
            $page = $pNation.find("li");

        $page.css({
            width: $pNation.innerWidth() / $listNum
        })


        function slide() {

            $list.children(':eq(2)').addClass('on').siblings().removeClass('on');
            $list.animate({
                left: -$bigSize
            }, function () {
                $list.children(':first').appendTo($list);
                $list.css({
                    left: -230
                });

            });
            //슬라이드 fin

            function moving() {
                move = 100 / $listNum;


                if (pageNow < $listNum - 1) {
                    $page.animate({
                        left: ((pageNow + 1) * move) + "%"
                    });
                    pageNow++
                } else {
                    $page.css({
                        left: 0 + "%"
                    });
                    pageNow = 0
                }

            }
            moving()




        }
        var mainslide = setInterval(slide, 2500);

    }
    contentBest();
})