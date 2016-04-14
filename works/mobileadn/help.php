<?php include "header.php" ?>
<?php include "modal.php"?>
<!-- 面包屑功能 -->
<script type="text/javascript">
	$(function(){
		$(".mytab>li").click(function(){
			var t=$(this).find("a").text()
			$(".bread-active").text(t);
		});				
	});
</script>
<!-- 实现滚动 -->
<script type="text/javascript">
	$(function(){
		$("#fullpage").fullpage({
			autoScrolling: false
		});
	});
</script>

<!-- 顶部附菜单 -->
<div class="nav-sub">
	<!-- 面包屑导航 -->
	<div class="bread-nav">
		<p>
			<a href="index.php">首页</a> >
			<span>
				<a href="help.php">帮助中心</a> >
			</span>
			<span>
				<a href="#" class="bread-active">常见问题</a>
			</span>
		</p>
	</div>
	
	<div class="log pull-right">
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#login">
			登录
		</button>
		<li></li>
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#register">
			注册
		</button>
	</div>
	<div class="clearfix"></div>
</div>



<div class="container" id="site-blog">
	<div role="tabpanel" class="tab-pane active help" id="about">	
		<div class="col-md-3">
			<ul class="nav nav-tabs mytab text-center" role="tablist" id="about-tab">
			  <li role="presentation" class="active"><a href="#about-about" aria-controls="#about-about" role="tab" data-toggle="tab">常见问题</a></li>
			  <li role="presentation"><a href="#about-contact" aria-controls="about-contact" role="tab" data-toggle="tab">开发者常见问题</a></li>
			  <li role="presentation"><a href="#about-process" aria-controls="about-process" role="tab" data-toggle="tab">广告主常见问题</a></li>
			  <li role="presentation"><a href="#about-join" aria-controls="about-join" role="tab" data-toggle="tab">渠道常见问题</a></li>
			  <li role="presentation"><a href="#news-company" aria-controls="news-company" role="tab" data-toggle="tab">Aandroid文档</a></li>
			  <li role="presentation"><a href="#news-industry" aria-controls="news-industry" role="tab" data-toggle="tab">ISO文档</a></li>
			  <li role="presentation"><a href="#devblog-devblog" aria-controls="#devblog-devblog" role="tab" data-toggle="tab">服务规则</a></li>
			  <li role="presentation"><a href="#devblog-weekly" aria-controls="devblog-weekly" role="tab" data-toggle="tab">隐私规则</a></li>  
			  <li role="presentation"><a href="#help-punish" aria-controls="help-punish" role="tab" data-toggle="tab">开发者违规处理</a></li> 
			</ul>
			<!-- 帮助中心的搜索 -->
			<form action="" method="get" name="help_search">
				<input type="text" name="search_text" class="form-control" placeholder="搜索关键字..." required="required"></input>
				<input type="submit" class="btn btn-primary" value="搜索"></input>
			</form>
			<!-- 兼容ie8为标签页添加active -->
			<script type="text/javascript">
				$(function(){
					$(".mytab>li a").click(function(){
						$(".mytab>li").removeClass("active");
						$(this).parent().addClass("active");	
					});	
				});
			</script>
		</div>
		
		<div class="col-md-9">
			<div class="tab-content">
			  <div role="tabpanel" class="tab-pane active" id="about-about">常见问题常见问题常见问题常见问题常见问题常见问题</div>
			  <div role="tabpanel" class="tab-pane" id="about-contact">开发者常见问题开发者常见问题开发者常见问题开发者常见问题</div>
			  <div role="tabpanel" class="tab-pane" id="about-process">广告主常见问题广告主常见问题广告主常见问题广告主常见问题</div>
			  <div role="tabpanel" class="tab-pane" id="about-join">渠道常见问题渠道常见问题渠道常见问题渠道常见问题</div>
			  <div role="tabpanel" class="tab-pane" id="news-company">AandroidAandroidAandroidAandroidAandroid</div>
			  <div role="tabpanel" class="tab-pane" id="news-industry">ISOISOISOISOISOISOISOISOISOISO</div>
			  <div role="tabpanel" class="tab-pane" id="devblog-devblog">开发者博客开发者博客开发者博客开发者博客开发者博客</div>
			  <div role="tabpanel" class="tab-pane" id="devblog-weekly">开发者周刊开发者周刊开发者周刊开发者周刊开发者周刊</div>
			  <div role="tabpanel" class="tab-pane" id="help-punish">开发者违规处理开发者违规处理开发者违规处理开发者违规处理</div>
			</div>
		</div>
	</div>
</div>

<?php include "gotop.php"?>
<?php include "footer.php"?>
	
	
	
	
	<!-- 回到顶部 -->
<!-- 	<a href="#site-home" id="totop" ></a>
	<script type="text/javascript">
		$(function(){
			$("#totop").click(function(){
				$.fn.fullpage.moveTo(1);
			})
		});
	</script> -->
    </body>
</html>




