<script type="text/javascript">
	jQuery(document).ready(function($) {
	$(".scroll").click(function(event){		
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1500);
	});
});
</script>
<a id="gotop" class="scroll"></a>
<script type="text/javascript">
	$(window).scroll(function(){
		var wt=$(window).scrollTop();
		if(wt>300){
			$("#gotop").fadeIn("slow");
		}else{
			$("#gotop").fadeOut("slow");
		}
	});
	$("#gotop").click(function(){
		$(window).scrollTop(0);
	});
</script>