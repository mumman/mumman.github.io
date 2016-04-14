<!doctype html>
<html class="no-js" lang="zh-CN">
    <head>
	    <title></title>
        <meta charset="utf-8">
		<!--遇到ie就使用ie最高的ie渲染器-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" >
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="keywords" content="" />

        <!-- <link rel="apple-touch-icon" href="apple-touch-icon.png"> -->
        <!-- Place favicon.ico in the root directory -->
		<link href="favicon.ico" rel="icon">

        <!-- <link rel="stylesheet" href="css/normalize.css" type="text/css" media="all"> -->
		<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" media="all">
		<link rel="stylesheet" href="css/javascript.fullPage.css" type="text/css" media="all">
		<link rel="stylesheet" href="css/main.css" type="text/css" media="all">	
			
        <script src="js/modernizr-2.8.3.min.js"></script>
        <script src="js/jquery-1.11.2.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
		<!-- 各个浏览器兼容媒体查询 -->
        <script src="js/respond.js"></script>
        <script src="js/jquery.slimscroll.min.js"></script>
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/jquery.fullPage.min.js"></script>
        <script src="js/responsiveslides.min.js"></script>
		<!-- 自定义js -->
        <script src="js/main.js"></script>
		
		
    </head>
<body>
<!-- 顶部菜单 -->
<div class="site-top">
    <header>
		<nav>
			<div class="logo">
				<a><img src="http://7xj6xf.com1.z0.glb.clouddn.com/logo.png" alt=""></a>
			</div>
			<div class="nav-menu">
				<li><a href="index.php">首页</a></li>
				<li><a href="developer.php">开发者</a></li>
				<li><a href="advertiser.php">广告者</a></li>
				<li><a href="sdk.php">SDK下载</a></li>
				<li><a href="help.php">帮助中心</a></li>
				<li><a href="about.php">关于我们</a></li>
			</div>
			<!-- 导航切换高亮 -->
		<!-- 	<script type="text/javascript">
					$(".nav-menu>li").click(function(){
						$(".nav-menu>li").addClass("active1");
						
					});
			</script> -->
			<script type="text/javascript">
					$('.nav-menu li a').each(function(){
						if($($(this))[0].href==String(window.location)){
							$(this).parent().addClass('active');
						}	
					});
			</script>
			
			<div class="clearfix"></div>
		</nav>		
	</header>
	
	<!-- 左侧在线联系 -->
	<div class="server-contact">
		<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=317954216&amp;site=www.zhpblog.sianapp.com&amp;menu=yes" target="_blank"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/me.png" alt="在线联系" title="在线联系"></a>
	</div>
</div>







