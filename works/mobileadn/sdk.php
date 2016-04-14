<?php include "header.php" ?>
<?php include "modal.php" ?>
<!-- 面包屑功能 -->
<script type="text/javascript">
	$(function(){
		$(".sdk-nav>li").click(function(){
			var t=$(this).find("a").text();
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
				<a href="sdk.php">SDK下载</a> >
			</span>
			<span>
				<a href="#" class="bread-active">Android SDK下载</a>
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


<!-- android sdk 下载 -->
<div role="tabpanel" class="container sdk">
  <!-- Nav tabs -->
  <ul class="nav nav-tabs sdk-nav" role="tablist">
    <li role="presentation" class="active"><a href="#android" aria-controls="android" role="tab" data-toggle="tab">Android SDK下载</a></li>
    <li role="presentation"><a href="#iso" aria-controls="iso" role="tab" data-toggle="tab">ISO SDK下载</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active sdk-down" id="android">
		<!-- android 第一列 -->
		<div class="row">
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>Android SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/android.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>Android SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/android.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- android 第二列 -->
		<div class="row">
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>Android SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/android.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>Android SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/android.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
	
    <div role="tabpanel" class="tab-pane sdk-down" id="iso">
	<!-- iso第一列 -->
		<div class="row">
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>ISO SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/apple.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>ISO SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/apple.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
		</div>
		<!--iso 第二列 -->
		<div class="row">
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>ISO SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/apple.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="android-content row">
					<div class="col-md-6">
						<h3>ISO SDK下载</h3>
						<p class="version">版本号: v5.00</p>
					</div>
					<div class="col-md-6">
						<a href="#" class="android-down"><img src="http://7xj6xf.com1.z0.glb.clouddn.com/apple.png" alt="">下载SDK</a>
					</div>
					<div class="col-md-12 row mt20">
						<div class="col-md-6">
							<p class="version">发布时间:2015.5.12</p>
						</div>
						<div class="col-md-6 text-right">
							<a href="#" class="android-document">阅读开发者文档>></a>
						</div>
					</div>
					<div class="col-md-12 mt20">
						<h4>更新日志:</h4>
						<p>1.更好地适配iOS7.0以上系统，现在积分墙导航条和系统状态栏不再友好地叠在一起了</p>
						<p>2.新增API合作方式的正版广告，今后会有更多iOS正版广告接入</p>
						<p>3.修复bug</p>
					</div>
				</div>
			</div>
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




