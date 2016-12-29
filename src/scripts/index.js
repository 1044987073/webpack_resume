//引入zepto
var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');
var touch = require('./common/libs/zepto-modules/touch.js');
var Swiper = require('./common/libs/swiper/swiper.min.js');
var SwiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscoll/iscroll.js');

var swiper = new Swiper('.swiper-container', {
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		SwiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
		SwiperAni.swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		SwiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	}
});


$('.swiper-container').show();
$('#main_content').hide();
$('#enter').tap(function() {
	$('.swiper-container').hide();
	$('#main_content').show();
	//localStorage.hasIntro=true;

})



	
	$.get('http://localhost:8080/skill', {async:'false'},function(data) {
	var html1 = '';		
		html1 += '<div class="jineng content"><p class="headContent"><span>' +
			"技能掌握 " + '</span></p><ul>'
		for(var i = 0; i < data.length; i++) {
			html1 += '<li><p class="jn_category"><span>' + "类型：" + '</span><span>' + data[i].category + '</span></p><p class="jn_name"><span>' + "获取知识：" + '</span><span>' + data[i].name + '</span></p><p class="jn_time"><span>' + "学习时间：" + '</span><span>' + data[i].time + '</span></p><p class="jn_level"><span>' + "接触程度：" + '</span><span>' + data[i].level + '</span></p></li>';
		}
		html1 += '</ul></div>';
		$('#scroller .cs_jn').append(html1);
	});

	$.get('http://localhost:8080/projects', {async:'false'},function(data) {
		var html2 = '';
		html2 += '<div class="xiangmu content"><p class="headContent"><span>' + "项目开发" + '</span></p><ul>'
		for(var i = 0; i < data.length; i++) {
			html2+= '<li><p class="category"><span>' + "项目类型：" + '</span><span>' + data[i].category + '</span></p><p class="xm_name"><span>' + "项目名称：" + '</span><span>' + data[i].name + '</span></p><p class="url"><span>' + "项目IP：" + '</span><span>' + data[i].url + '</span></p><p class="xm_image"><span>' + "项目图片：" + '</span><span><img src="'+data[i].images+'"></span></p><p class="description"><span>' + "项目描述：" + '</span><span>' + data[i].description + '</span></p><p class="detail"><span>' + "项目详情：" + '</span><span>' + data[i].detail + '</span></p><p class="tech"><span>' + "技术涉及：" + '</span><span>' + data[i].tech + '</span></p></li>';
		}
		html2 += '</ul></div>';
		$('#scroller .cs_xm').append(html2);
	});

	$.get('http://localhost:8080/work', {async:'false'}, function(data) {
		var html3 = '';
		html3 += '<div class="jingli content"><p class="headContent"><span>'+"工作经历"+'</span></p>'
		for(var i = 0; i < data.length; i++) {
			html3+= '<p class="title_out"><span class="title">'+ data[i].category + '</span></p><div class="xuexiao"><div class="jingli_pic"><i class="iconfont icon-location" style="color:gray;"></i><img src="'+data[i].images1+'"><img src="'+data[i].images3+'"><img src="'+data[i].images2+'"></div><div class="jingli_text"><p><span>' + "工作类型：" + '</span><span>' + data[i].category + '</span></p><p><span>' + "工作地点：" + '</span><span>' + data[i].name + '</span></p><p><span>' + "工作人数：" + '</span><span>' + data[i].peoples + '</span></p><p><span>' + "工作网址：" + '</span><span>' + data[i].url + '</span></p><p><span>' + "工作时间：" + '</span><span>' + data[i].time + '</span></p><p><span>' + "工作内容" + '</span><span>' + data[i].reportto + '</span></p><p><span>' + "技术涉及：" + '</span><span>' + data[i].projects + '</span></p></div></div>';
		}
		html3+= '</ul></div>';
		$('#scroller .cs_jl').append(html3);
	});

	$.get('http://localhost:8080/me', {async:'false'}, function(data) {
		var html4 = '';
		html4 += '<div class="me content"><div class="self_msg"><p class="touxiang"><img src="'+ data[0].images+' "></p><p><span class="name">' + data[0].name + '</span></p><span class="name_miaoshu">' + data[0].name_miaoshu+ '</span></div><div class="school"><p><i class="iconfont icon-xuexiao" style="color:gray;"></i><span class="msg_left">' + "毕业院校" + '</span><span>' + data[0].school + '</span></p><p><span class="msg_left">' + "毕业专业" + '</span><span>' + data[0].profession + '</span></p></div><div class="pingjia"><p><i class="iconfont icon-pingjia" style="color:gray;"></i><span class="msg_left">' + "自我评价" + '</span><span>' + data[0].evaluate + '</span></p></div><div class="lianxifangshi"><p><i class="iconfont icon-tel" style="color:gray;"></i><span class="msg_left">' + "手机号码" + '</span><span>' + data[0].tel + '</span></p><p><i class="iconfont icon-qq" style="color:gray;"></i><span class="msg_left">' + "QQ号码"+ '</span><span>' + data[0].qq + '</span></p><p><img src="' + data[0].erweima + '"></p><P>'+"加入微信，了解更多"+'</P></div>';
		$('#scroller .cs_me').append(html4);
	});	
$('.content_mulu').tap(function() {
		var myScroll;
		myScroll = new IScroll('#wrapper', {
			mouseWheel: true
		});	
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
		myScroll.scrollTo(0,0);
		myScroll.refresh();
	$('.content_scroller').eq($(this).index()).show().siblings('.content_scroller').hide();	
})

window.onload = function(){  
    var flag = true; 
    var media = document.getElementsByClassName('music')[0];
    var music = document.getElementsByClassName('musicPart')[0];
    music.onclick = function(){
        if( flag==true ){
            media.pause();
            flag = false;
            music.style.webkitAnimationPlayState = "paused";
            music.style.background='url(../images/music_off.png)';
        }else{
            media.play();
            flag = true;
            music.style.webkitAnimationPlayState = "running";
            music.style.background='url(../images/music_on.png)';
        }
    }
}