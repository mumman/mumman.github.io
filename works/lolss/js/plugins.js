//禁止鼠标滚动的方法。

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
}
function wheel(e) {
	preventDefault(e);
}
function disable_scroll() {
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = wheel;
}
function enable_scroll() {
	if (window.removeEventListener) {
		window.removeEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}	


//皮肤的滚动的动画效果
$(function(){
	(function(){
		$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top-100},1000); //this.hash获取当前链接的标签值
		});		
	})();
	
//幻灯片选项
(function(){
	$("#slider").responsiveSlides({
		auto: true,
		pager: false,
		nav: true,
		speed: 800,
		pause: false,
		pauseControls: false, //鼠标放到控件上不暂停
		namespace: "slide",
		before: function () {},
		//壁纸改名
		after: function () {
		  var sname=$(".slide1_on").children().data("skinname");
			$(".skinName").text(sname);
		}
	});	
})();

	
});
