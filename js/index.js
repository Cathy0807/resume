/**
 * Created by Cathy on 2016/10/7.
 */
//set rem
(function(desW){
    var winW=document.documentElement.clientWidth;
    var ratio=winW/desW;
    var oMain=document.getElementById('main');
    if(winW>desW){
        oMain.style.width=desW+'px';
        oMain.style.margin='0 auto';
        return
    }
    document.documentElement.style.fontSize=ratio*100+'px';
    var n=oMain.style.width;
})(640);

//initialize swiper
var mySwiper = new Swiper(".swiper-container",{
    direction : "vertical",
    loop:true,
    onSlideChangeEnd :function(swiper){
        var slideAry = swiper.slides;
        var trueSlideNum = slideAry.length-2;
        var lastNum =  trueSlideNum+1;
        var curIn = swiper.activeIndex;
        [].forEach.call(slideAry,function(item,index){
            item.id = null;
            if(curIn == index){
                switch(curIn){
                    case 0 :
                        item.id = "page"+trueSlideNum;
                        break;
                    case lastNum :
                        item.id  = "page1";
                        break;
                    default :
                        item.id = "page"+curIn;
                }
            }
        })
    }
});

//audio
~(function(){
    var music = document.querySelector(".music");
    var audioMusic = document.querySelector("#audioMusic");
    music.addEventListener("click",function(){
        if(audioMusic.paused){/*判断是否是停止*/
            audioMusic.play();
            music.className = "music musicMove";
            return;
        }
        audioMusic.pause();
        music.className = "music";
        music.style.opacity  = 1;
    });
    window.setTimeout(function(){
        audioMusic.play();/*播放*/
        /*边播放边缓存，触发事件canplay*/
        audioMusic.addEventListener("canplay",function(){
            music.className = "music musicMove";
        })
    },1000)
})();