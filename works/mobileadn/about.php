<?php include "header.php" ?>
<?php include "modal.php"?>
<!-- 主页点击动态跳转到关于界面的动态 -->
<script type="text/javascript">
	$(function(){
		var url = location.search;
		if(url=="?news-company=active"){
			$("#about li:eq(4) a").tab('show');
		}		
	})
</script>
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
				<a href="about.php">炅游动态</a> >
			</span>
			<span>
				<a href="#" class="bread-active">关于我们</a>
			</span>
		</p>
	</div>
	<!-- 帮助中心的搜索 -->
	<!-- <form action="" method="get" name="help_search">
		<input type="text" name="search_text" class="form-control" placeholder="搜索关键字..." required="required"></input>
		<input type="submit" class="btn btn-primary" value="搜索"></input>
	</form> -->
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
			  <li role="presentation" class="active"><a href="#about-about" aria-controls="#about-about" role="tab" data-toggle="tab">关于我们</a></li>
			  <li role="presentation"><a href="#about-contact" aria-controls="about-contact" role="tab" data-toggle="tab">联系我们</a></li>
			  <li role="presentation"><a href="#about-process" aria-controls="about-process" role="tab" data-toggle="tab">公司历程</a></li>
			  <li role="presentation"><a href="#about-join" aria-controls="about-join" role="tab" data-toggle="tab">加入我们</a></li>
			  <li role="presentation"><a href="#news-company" aria-controls="news-company" role="tab" data-toggle="tab">公司动态</a></li>
			  <li role="presentation"><a href="#news-industry" aria-controls="news-industry" role="tab" data-toggle="tab">行业新闻</a></li>
			  <li role="presentation"><a href="#devblog-devblog" aria-controls="#devblog-devblog" role="tab" data-toggle="tab">开发者博客</a></li>
			  <li role="presentation"><a href="#devblog-weekly" aria-controls="devblog-weekly" role="tab" data-toggle="tab">开发者周刊</a></li>
				
			</ul>
		</div>
		
		<div class="col-md-9">
			<div class="tab-content">
			  <div role="tabpanel" class="tab-pane active" id="about-about">
					<h3>关于我们</h3>
					<p>关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们</p>
			  </div>
			  <div role="tabpanel" class="tab-pane" id="about-contact">联系我们联系我们联系我们联系我们联系我们联系我们</div>
			  <div role="tabpanel" class="tab-pane" id="about-process">公司历程公司历程公司历程公司历程公司历程公司历程</div>
			  <div role="tabpanel" class="tab-pane" id="about-join">加入我们加入我们加入我们加入我们加入我们</div>
			  <div role="tabpanel" class="tab-pane" id="news-company">公司动态公司动态公司动态公司动态公司动态</div>
			  <div role="tabpanel" class="tab-pane" id="news-industry">行业新闻行业新闻行业新闻行业新闻</div>
			  <div role="tabpanel" class="tab-pane" id="devblog-devblog">开发者博客开发者博客开发者博客开发者博客开发者博客</div>
			  <div role="tabpanel" class="tab-pane" id="devblog-weekly">开发者周刊开发者周刊开发者周刊开发者周刊开发者周刊</div>
			</div>
		</div>
	</div>
</div>

<?php include "gotop.php"?>
<?php include "footer.php" ?>

	
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




