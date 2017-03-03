/**
 * Created by Hitigerzzz on 2017/3/1.
 */
window.onload = function () {
    addAnimate();
    animatedReady();
}
window.onscroll = function() {
    animatedReady();
};
window.onresize = function () {
    updateTimeLine();
};
function updateTimeLine() {
    var width = window.innerWidth;
    if(width < 768) {
        $(".time-line-node-info").removeClass('time-line-node-left').addClass('time-line-node-right');
        $(".time-line-node-info>h1").css("display","inline-block");
    } else {
        $(".time-line-node-info").each(function (index, info) {
           if(index % 2 == 0) {
                $(info).removeClass('time-line-node-right').addClass('time-line-node-left');
            }
        });

        $(".time-line-node-info>h1").css("display","none");
    }
}



function addAnimate() {
    $(".time-line-node-left").addClass("animated-ready").attr("href","fadeInLeft");
    $(".time-line-node-right").addClass("animated-ready").attr("href","fadeInRight");
}

function animatedReady() {
    var ready = document.getElementsByClassName("animated-ready");

    for(var i = 0; i < ready.length; i++) {
        var ar = ready[i];
        var top = getTop(ar);
        if(((document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) + $(window).height()) > top) {

            var animateType = $(ar).attr("href");
            $(ar).addClass("animated "+animateType);
            $(ar).css("visibility","visible");
        }

    }
}

function getTop(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
    return offset;
}

