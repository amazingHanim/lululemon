$(function () {
    $best = $(".best"),
        $ovrgrid = $best.find(".ovrgrid"),
        $list = $ovrgrid.children(),
        $item = $list.children(),
        $size = $list.children(':eq(1)').innerWidth();
        $bigSize = $list.children(".on").innerWidth()


        $list.children(":last").prependTo($list);


        $best.on({
            'click':function(){
    
                $list.children(':eq(2)').addClass('on').siblings().removeClass('on');
    
                $list.animate({left:-$bigSize},function(){
                    $list.children(':first').appendTo($list);
                    $list.css({left:-220})
                })
            }
        });






})