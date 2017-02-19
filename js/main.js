//预加载
(function () {
	var current = 11;
	var loadClock=true;
	
	if(loadClock){
		setInterval(function(){
			current++;
			if(current<=97){
			$('#loading').html(current+'%'); 	
			}
		},100);	
	}

	$(window).load(function(){
		$('#loading').html(99+'%'); 
		loadClock=false;
		setTimeout(function(){
			$("#loading").fadeOut();
			$("#wrap").fadeIn(function(){
				var music = document.getElementById("music");
				music.volume=0.5;
				music.play();
			});
		},300)
	});	
})();
	


//作品下拉菜单
$(function() {
	$(".menu").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(".works").find("ul").slideToggle();
	});
	$(".menu").parents().click(function(){
		$(".works").find("ul").hide();
	});
});
//音乐开关
$(function() {
	$(".switch").click(function(event) {
		event.preventDefault();
		$(".sound").toggleClass("active");

		var music = document.getElementById("music");
		if (music.paused) {
			music.play();
		} else {
			music.pause();
		}
	})

});
//微信分享
$(function() {
	$(".weixin").click(function(event) {
		event.preventDefault();
		$(".weixinIcon").toggle();

	})
});