
//获取元素
// function $(str) {
//     var temp=str.charAt(0);
//     var newStr=str.substring(1);
//     if(temp=="#"){
//         return document.getElementById(newStr);
//     }
//     else if(temp=="."){
//         return document.getElementsByClassName(newStr);
//     }
//     else{
//         return document.getElementsByTagName(str);
//     }
// }

//addEventListener兼容
function addEvent(ele,fn,str) {
    if(ele.addEventListener){
        ele.addEventListener(str,fn);//click
    }
    else if(ele.attachEvent){
        ele.attachEvent("on"+str,fn);//onclick
    }
    else{
        ele["on"+str]=fn;
    }
}
//移除事件 兼容
function removeEvent(ele,fn,str) {
    if(ele.removeEventListener){
        ele.removeEventListener(str,fn);//click
    }
    else if(ele.attachEvent){
        ele.detachEvent("on"+str,fn);//onclick
    }
    else{
        ele["on"+str]=null;
    }
}

//滑动
// function slide(target,size,time,derection,speed) {
//     var before=target.offsetLeft;
//     if(derection=="toleft"){
//         var tim=setInterval(function () {
//             if(Math.abs(target.offsetLeft)>size*(count-1)){
//                 target.style.left=0+"px";
//                 console.log(target.offsetLeft);
//                 before=target.offsetLeft;
//             }
//             else {
//                 target.style.left=target.offsetLeft-speed+"px";
//                 if(Math.abs(before-target.offsetLeft)>=size){
//                     clearInterval(tim);
//                 }
//             }
//         },time);
//     }
//     else if(derection=="toright") {
//         var tim=setInterval(function () {
//             if(target.offsetLeft>=0){
//                 target.style.left=-size*(count-1)+"px";
//                 before=target.offsetLeft;
//             }
//             else{
//                 target.style.left=target.offsetLeft+speed+"px";
//                 if(Math.abs(target.offsetLeft-before)>=size){
//                     console.log(target.offsetLeft-before);
//                     clearInterval(tim);
//                 }
//             }
//         },time);
//     }
// }
// var slideTimer;
// function slide(target,ele,time,speed) {
//     speed=(target-ele.offsetLeft)>0?speed:-speed;
//     clearInterval(slideTimer);
//     slideTimer= setInterval(function () {
//         var before=ele.offsetLeft;
//         ele.style.left=before+speed+"px";
//         if (Math.abs(target - ele.offsetLeft) < Math.abs(speed)) {
//             ele.style.left=target+"px";
//             clearInterval(slideTimer);
//         }
//     }, time);
// }
//
// //缓动
// var slowSlideTimer;
// function slowSlide(ele,target,time) {
//     clearInterval(slowSlideTimer);
//     slowSlideTimer=setInterval(function () {
//         var step=(target-ele.offsetLeft)/10;
//         step>0?step=Math.ceil(step):step=Math.floor(step);
//         ele.style.left=ele.offsetLeft+step+"px";
//         if(Math.abs(target-ele.offsetLeft)<Math.abs(step)){
//             clearInterval(slowSlideTimer);
//         }
//     },time)
// }
// var topUpTimer;
// function slowSlideUp(ele,target,time) {
//     clearInterval(topUpTimer);
//     topUpTimer=setInterval(function () {
//         var step=(target-ele.offsetTop)/10;
//         step>0?step=Math.ceil(step):step=Math.floor(step);
//         ele.style.top=ele.offsetTop+step+"px";
//         if(Math.abs(target-ele.offsetTop)<Math.abs(step)){
//             ele.style.top = target + "px";
//             clearInterval(slowSlideTimer);
//         }
//     },time)
// }

function scroll(){
    return {
        "top":window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        "left":window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

//缓慢消失，通过改透明度
function moveByOpacityDe(ele) {
    var deTimer=setInterval(function () {
        ele.style.opacity-=0.1;
        if(ele.style.opacity==0){
            clearInterval(deTimer);
            ele.style.display="none";
        }

    },10)
}

function moveByOpacityIn(ele) {
    var before=0;
    var inTimer=setInterval(function () {
        console.log(before);
        before+=0.1;
        ele.style.opacity=before;
        console.log(ele.style.opacity);
        if(ele.style.opacity==1){

            clearInterval(inTimer);
            ele.style.display="display";
        }
    },10)
}