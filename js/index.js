
window.onload=function () {
//倒计时
    var time=setInterval(function () {
        //当前时间
        var now=new Date();
        //结束时间
        var future=new Date("2017/10/11 24:00:00");
        var cha=future.getTime()-now.getTime();
        var hour=Math.floor(cha/1000/60/60%60);
        var minute=Math.floor(cha/1000/60%60);
        var second=Math.floor(cha/1000%60);
        var h=document.getElementById("hour");
        var m=document.getElementById("minute");
        var s=document.getElementById("second");
        if(cha<0){
            h.innerText="00";
            m.innerText="00";
            s.innerText="00";
            clearInterval(time);
            return;
        }
        if(hour<10){
            hour="0"+hour;
        }
        if(minute<10){
            minute="0"+minute;
        }
        if(second<10){
            second="0"+second;
        }
        h.innerText=hour;
        m.innerText=minute;
        s.innerText=second;
    },1000)
    var btns=$("#one-m-pic-btns");//获取所有大轮播图小圆点
    var btnsArr=btns.children();
    var picDiv=$("#one-m-pic");

    var ultimer=setInterval(timerM,3000);  //开始

    var btnL=$("#pic-btn-l");//大轮播图左箭头
    var btnR=$("#pic-btn-r");//大轮播图右箭头

    //大轮播图鼠标放上左右箭头样式改变
    picDiv.mouseover(function () {
        btnL.show();
        btnR.show();
        clearInterval(ultimer);
    });
    picDiv.mouseout(function () {
        btnL.hide();
        btnR.hide();
        ultimer=setInterval(timerM,3000);
    });

    //大轮播图左右按钮获得焦点时样式改变
    $(".pic-btn-lr").mouseenter(function () {
        clearInterval(ultimer);
        $(".pic-btn-lr").css("background-color","rgba(0,0,0,0.8)");
    });
    $(".pic-btn-lr").mouseleave(function () {
        $(".pic-btn-lr").css("background-color","rgba(0,0,0,0.1)");
    });

    //大轮播图左右按钮点击事件
    $("#pic-btn-l").click(function () {    //左
        clearInterval(ultimer);
        $("#oneul").children().eq(ulLiIndex).fadeOut();
        ulLiIndex--;
        if(ulLiIndex<0){
            ulLiIndex=7;
        }
        $("#oneul").children().eq(ulLiIndex).fadeIn();
        $("#one-m-pic-btns").children().css("background-color","white");
        $("#one-m-pic-btns").children().eq(ulLiIndex).css("background-color","#db192a");
    });
    $("#pic-btn-r").click(function () {   //右
        clearInterval(ultimer);
        $("#oneul").children().eq(ulLiIndex).fadeOut();
        ulLiIndex++;
        if(ulLiIndex>7){
            ulLiIndex=0;
        }
        $("#oneul").children().eq(ulLiIndex).fadeIn();
        $("#one-m-pic-btns").children().css("background-color","white");
        $("#one-m-pic-btns").children().eq(ulLiIndex).css("background-color","#db192a");
    });

    //大轮播图小原点获得焦点
    btnsArr.mouseenter(function () {
        clearInterval(ultimer);
        if(ulLiIndex==$(this).index()){
            return;
        }
        $("#oneul").children().eq(ulLiIndex).fadeOut();
        ulLiIndex=$(this).index();
        $("#oneul").children().eq(ulLiIndex).fadeIn();
        $("#one-m-pic-btns").children().css("background-color","white");
        $("#one-m-pic-btns").children().eq(ulLiIndex).css("background-color","#db192a");
    });


    //红线
    var redline=$("#redline");
    $(".one-r-2-title-a1").mouseover(function () {
        redline.animate({left:"-2px"},300);
        $(".one-r-2").children("ul").hide();
        $(".one-r-2").children("ul").eq(0).show();
    });
    $(".one-r-2-title-a2").mouseover(function () {
        redline.animate({left:"46px"},300);
        $(".one-r-2").children("ul").hide();
        $(".one-r-2").children("ul").eq(1).show();
    });


    //sk左右点击滚动
    var skl=$("#skl");
    var skL=$("#sk-bol");
    var skIndex=0;
    skl.click(function () {
        if(skIndex==0){
            skIndex=2;
            skL.css("left",-skIndex*$(".sk-bo-l-ul").width()+"px");
        }
        skIndex--;
        skL.animate({left:-skIndex*$(".sk-bo-l-ul").width()},500);
    });
    var skr=$("#skr");
    skr.click(function () {
        if(skIndex==2){
            skIndex=0;
            skL.css("left",0);
        }
        skIndex++;
        skL.animate({left:-skIndex*$(".sk-bo-l-ul").width()},500);
    });
    skL.children("li").children("a").children("img").mouseenter(function () {
        $(this).animate({top:"12px"},"fast","easeOutQuad");
    });
    skL.children("li").children("a").children("img").mouseleave(function () {
        $(this).animate({top:"17px"},"fast","easeOutQuad");
    });
    skL.children("li").children("a").children("p").mouseenter(function () {
        $(this).parent().children().eq(0).animate({top:"12px"},"fast","easeOutQuad");
    });
    skL.children("li").children("a").children("p").mouseleave(function () {
        $(this).parent().children().eq(0).animate({top:"17px"},"fast","easeOutQuad");
    });


    //小轮播图
    var sktimer=setInterval(timerSk,5000);

    //小轮播图获得焦点时
    $(".sk-bo-r-ul").mouseenter(function () {
        clearInterval(sktimer);
    });
    $(".sk-bo-r-ul").mouseleave(function () {
        sktimer=setInterval(timerSk,5000);
    });
    $(".sk-bo-r-ul").children("span").mouseenter(function () {
        clearInterval(sktimer);
        if($(this).index()-1==skindex){
            return;
        }
        $("#sk-bor").children().eq(skindex).fadeOut();
        skindex=$(this).index()-1;
        $("#sk-bor").children().eq(skindex).fadeIn();
        $(".sk-bo-r-ul").children("span").css("background-color","#342a2d");
        $(".sk-bo-r-ul").children("span").eq(skindex).css("background-color","#e01222");
    });

    //页面加载后没有滚动时如果据顶距离超过740搜索显示
    if($(window).scrollTop()>=740){
        $("#searchhide").removeClass("hide");
        $(".search-m").eq(0).show();
        $("#searchhide").animate({top:"0px"},"normal","easeOutQuad");
    }
    else if(($(window).scrollTop()<740)) {
        $("#searchhide").css("top","-50px");
        console.log($(window).scrollTop());
        $("#searchhide").addClass("hide");
        $(".search-m").eq(0).hide();
    }
//滚动事件监听
    $(window).scroll(function () {
        //当滚动到740时搜索栏显示
        if($(window).scrollTop()>=740){
            $("#searchhide").removeClass("hide");
            $(".search-m").eq(0).show();
            $("#searchhide").animate({top:"0px"},"normal","easeOutQuad");
        }
        else if(($(window).scrollTop()<740)) {
            $("#searchhide").css("top","-50px");
            $("#searchhide").addClass("hide");
            $(".search-m").eq(0).hide();
        }
        if($(window).scrollTop()>=990){
            $(".list-left").eq(0).show();
            if($(window).scrollTop()>=1900){
                $(".list-left").children("ul").children().removeClass("list-left-on");
                // console.log($(".list-left").children().eq(Math.floor(($(window).scrollTop()-1765)/553)));
                $(".list-left").children("ul").children().eq(Math.floor(($(window).scrollTop()-1820)/553)).addClass("list-left-on");
            }
            else {
                $(".list-left").children("ul").children().removeClass("list-left-on");
            }
        }
        leader=$(window).scrollTop();
    });




    //fbt-box1的边框样式设置
    $(".fbt-box1-bo").children("ul").children("li:lt(4)").css("border-bottom","1px solid #e7e7e7");
    $(".fbt-box1-bo").children("ul").children("li:even").css("border-right","1px solid #e7e7e7");

    //fbt-box1动画
    $(".fbt-box1-bo").children("ul").children("li").mouseenter(function () {
        $(this).children().children("img").animate({right:"15px"},300);
    });
    $(".fbt-box1-bo").children("ul").children("li").mouseleave(function () {
        $(this).children().children("img").animate({right:"10px"},300);
    });

    //fbt-box2
    var fbtTimer=setInterval(timerFbt,2000);

    $(".fbt-box2-bo").mouseover(function () {
        clearInterval(fbtTimer);
        $(".fbt-box2-btn").show();
    });
    $(".fbt-box2-bo").mouseout(function () {
        $(".fbt-box2-btn").hide();
        fbtTimer=setInterval(timerFbt,2000);
    });
    $("#fbt-box2-btn1").click(function () {
        clearInterval(fbtTimer);
        $(".fbt-box2-bo").eq(0).children().eq(fbtIndex).fadeOut();
        fbtIndex--;
        if(fbtIndex<0){
            fbtIndex=2;
        }
        $(".fbt-box2-bo").eq(0).children().eq(fbtIndex).fadeIn();
        $(".fbt-box2-bo").eq(0).children("ul").children().css("background-color","#c8c8c8");
        $(".fbt-box2-bo").eq(0).children("ul").children().eq(fbtIndex).css("background-color","#e01222");
    });
    $("#fbt-box2-btn2").click(function () {
        clearInterval(fbtTimer);
        $(".fbt-box2-bo").eq(0).children().eq(fbtIndex).fadeOut();
        fbtIndex++;
        if(fbtIndex>2){
            fbtIndex=0;
        }
        $(".fbt-box2-bo").eq(0).children().eq(fbtIndex).fadeIn();
        $(".fbt-box2-bo").eq(0).children("ul").children().css("background-color","#c8c8c8");
        $(".fbt-box2-bo").eq(0).children("ul").children().eq(fbtIndex).css("background-color","#e01222");
    });
    $(".fbt-box2-bo").eq(0).children("ul").children().mouseover(function () {
        clearInterval(fbtTimer);
        if(fbtIndex==$(this).index()){
            return;
        }
        $(".fbt-box2-bo").eq(0).children("ul").children().css("background-color","#c8c8c8");
        $(".fbt-box2-bo").eq(0).children("ul").children().eq($(this).index()).css("background-color","#e01222");
        $(".fbt-box2-bo").eq(0).children().eq(fbtIndex).fadeOut();
        $(".fbt-box2-bo").eq(0).children().eq($(this).index()).fadeIn();
        fbtIndex=$(this).index();
    });


    //fbt-box3大红线
    $(".fbt-box3-nav").children("a").mouseenter(function () {
        $(".fbt-redline").animate({left:9+$(this).index()*78+"px"},"fast");
        $(".fbt-box3-bo").children().hide();
        $(".fbt-box3-bo").children().eq($(this).index()).show();
    });

    //juan
    //左右移动
    $(".juan-le").children("ul").children().mouseenter(function () {
        $(this).children("a").children("img").animate({right:"0px"},"fast");
    });
    $(".juan-le").children("ul").children().mouseleave(function () {
        $(this).children("a").children("img").animate({right:"15px"},"fast");
    });
    //轮播
    var juanTimer=setInterval(timerJuan,2000);
    $(".juan-ri-bo").mouseover(function () {
        clearInterval(juanTimer);
        $(".juan-btn").show();
    });
    $(".juan-ri-bo").mouseout(function () {
        $(".juan-btn").hide();
        juanTimer=setInterval(timerJuan,2000);
    });
    //左右按钮
    $(".juan-ri-bo").children("div").eq(0).click(function () {
        clearInterval(juanTimer);
        $(".juan-ri-bo-t").children().eq(juanIndex).fadeOut();
        juanIndex--;
        if(juanIndex<0){
            juanIndex=4;
        }
        $(".juan-ri-bo-t").children().eq(juanIndex).fadeIn();
        $(".cir").children().css("background-color","#c8c8c8");
        $(".cir").children().eq(juanIndex).css("background-color","#e01222");
    });
    $(".juan-ri-bo").children("div").eq(1).click(function () {
        clearInterval(juanTimer);
        $(".juan-ri-bo-t").children().eq(juanIndex).fadeOut();
        juanIndex++;
        if(juanIndex>4){
            juanIndex=0;
        }
        $(".juan-ri-bo-t").children().eq(juanIndex).fadeIn();
        $(".cir").children().css("background-color","#c8c8c8");
        $(".cir").children().eq(juanIndex).css("background-color","#e01222");
    });
    //小圆点
    $(".cir").children().mouseover(function () {
        clearInterval(juanTimer);
        if(juanIndex==$(this).index()){
            return;
        }
        $(".cir").children().css("background-color","#c8c8c8");
        $(".cir").children().eq($(this).index()).css("background-color","#e01222");
        $(".juan-ri-bo-t").children().eq(juanIndex).fadeOut();
        $(".juan-ri-bo-t").children().eq($(this).index()).fadeIn();
        juanIndex=$(this).index();
    });

    $(".banner-sec").children().children().children().mouseenter(function () {
        $(this).fadeTo("normal",0.8);
    });
    $(".banner-sec").children().children().children().mouseleave(function () {
        $(this).fadeTo("normal",1);
    });


    //回到顶部
    $(".tot").mouseenter(function () {
        $(".totophide").animate({left:"-35px"},"fast","easeOutQuad");
        $(".totop").css("background-color","#c81623");
        $(".totophide").css("background-color","#c81623");
    });
    $(".tot").mouseleave(function () {
        $(".totophide").animate({left:"0px"},"fast","easeOutQuad");
        $(".totop").css("background-color","#7a6e6e");
        $(".totophide").css("background-color","#7a6e6e");
    });
    var leader=0;
    $(".tot").click(function () {
        $("body,html").animate({scrollTop:0},"slow","easeOutCubic");
    });

    //左楼层滚动
    var target=0;
    $(".list-left").children("ul").children().click(function () {
        $(".list-left").children("ul").children().removeClass("list-left-on");
        $(this).addClass("list-left-on");
        target=$(this).index()*553+1850;
        $("body,html").animate({scrollTop:target},"slow","easeOutCubic");
    });
    $(".list-left-tot").click(function () {
        $("body,html").animate({scrollTop:0},"slow","easeOutCubic");
    });
}
function gb () {
    var ba=$("#banner");
    ba.fadeOut();
}


function over() {
    var tlLi=$("#tl-li");
    var add=$("#add");
    tlLi.attr("class","dropdown");
    add.attr("class","addre-drop dr");
}
function out() {
    var tlLi=$("#tl-li");
    var add=$("#add");
    tlLi.removeAttr("class");
    add.attr("class","addre-drop dr hide");
}
function overa() {
    var mjd=$("#mjd");
    var mjdDrop=$("#mjd-drop");
    mjd.attr("class","drop dropdown");
    mjdDrop.attr("class","mjd-drop dr");
}
function outa() {
    var mjd=$("#mjd");
    var mjdDrop=$("#mjd-drop");
    mjd.attr("class","drop");
    mjdDrop.attr("class","mjd-drop dr hide");
}
function overb() {
    var khd=$("#khd");
    var kh=$("#kh");
    khd.attr("class","drop dropdown");
    kh.attr("class","kh dr");
}
function outb() {
    var khd=$("#khd");
    var kh=$("#kh");
    khd.attr("class","drop");
    kh.attr("class","kh dr hide");
}
function  overc() {
    var dh=$("#dh");
    var dhd=$("#dh-drop");
    dh.attr("class","drop dropdown");
    dhd.attr("class","dh-drop dr");
}
function outc() {
    var dh=$("#dh");
    var dhd=$("#dh-drop");
    dh.attr("class","drop");
    dhd.attr("class","dh-drop dr hide");
}
function  overd() {
    var sj=$("#sj");
    var sjd=$("#sj-drop");
    sj.attr("class","drop last dropdown");
    sjd.attr("class","sj-drop dr");
}
function outd() {
    var sj=$("#sj");
    var sjd=$("#sj-drop");
    sj.attr("class","drop last");
    sjd.attr("class","sj-drop dr hide");
}
function  overe() {
    var scd=$("#scd");
    scd.attr("class","gwc-drop dr");
}
function oute() {
    var scd=$("#scd");
    scd.attr("class","gwc-drop dr hide");
}

var ulLiIndex=0;
function timerM() {
    var ul=$("#oneul");//大轮播图
    var ulLiArr=ul.children();
    ulLiArr.eq(ulLiIndex).fadeOut();
    if(ulLiIndex==7){
        ulLiIndex=-1;
    }
    ulLiArr.eq(ulLiIndex+1).fadeIn();
    ulLiIndex++;
    //小圆点
    $("#one-m-pic-btns").children().css("background-color","white");
    $("#one-m-pic-btns").children().eq(ulLiIndex).css("background-color","#db192a");
}

var skindex=0;
function timerSk() {
    $("#sk-bor").children().eq(skindex).fadeOut();
    if(skindex==1){
        skindex=-1;
    }
    $("#sk-bor").children().eq(skindex+1).fadeIn();
    $(".sk-bo-r-ul").children("span").css("background-color","#342a2d");
    $(".sk-bo-r-ul").children("span").eq(skindex+1).css("background-color","#e01222");
    skindex++;
}

var fbtIndex=0;
function timerFbt() {
    $(".fbt-box2-bo").eq(0).children().eq(fbtIndex).fadeOut();
    if(fbtIndex==2){
        fbtIndex=-1;
    }
    $(".fbt-box2-bo").eq(0).children().eq(fbtIndex+1).fadeIn();
    $(".fbt-box2-bo").eq(0).children("ul").children().css("background-color","#c8c8c8");
    $(".fbt-box2-bo").eq(0).children("ul").children().eq(fbtIndex+1).css("background-color","#e01222");
    fbtIndex++;
}

var juanIndex=0;
function timerJuan() {
    $(".juan-ri-bo-t").children().eq(juanIndex).fadeOut();
    if(juanIndex==4){
        juanIndex=-1;
    }
    $(".juan-ri-bo-t").children().eq(juanIndex+1).fadeIn();
    $(".cir").children().css("background-color","#c8c8c8");
    $(".cir").children().eq(juanIndex+1).css("background-color","#e01222");
    juanIndex++;
}