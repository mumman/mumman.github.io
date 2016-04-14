<?php include "header.php"; ?>
<?php include "modal.php" ?>
<!-- 面包屑功能 -->
<script type="text/javascript">
	$(function(){
		$(".nav-style>li").click(function(){
			var t=$(this).find("a").text();
			$(".bread-active").text(t);	
		});
	});
</script>
<!-- 实现滚动 -->
<script type="text/javascript">
	$(function(){
		$("#fullpage").fullpage({
			autoScrolling: false,
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
				<a href="advertiser.php">广告主</a> >
			</span>
			<span>
				<a href="#" class="bread-active">百灵工具</a>
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

<div role="tabpanel" class="developer-page advertiser-page">
  <!-- Nav tabs -->
  <ul class="nav nav-tabs nav-style text-center" role="tablist">

    <li role="presentation" class="active"><a href="#dtable1" aria-controls="dtable1" role="tab" data-toggle="tab">营销优势</a></li><!--
	--><li role="presentation"><a href="#dtable2" aria-controls="dtable2" role="tab" data-toggle="tab">广告形式</a></li><!--
	--><li role="presentation" class="borderfff"><a href="#dtable3" aria-controls="dtable3" role="tab" data-toggle="tab">创意形式</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
  <!-- 营销优势 -->
    <div role="tabpanel" class="tab-pane active" id="dtable1">
			<div class="container-fluid marketing">
			  <div class="row featurette bg">
				<div class="mwidth1200 clearfix">
					<div class="col-md-7">
					  <h2 class="featurette-heading">海量媒体广告资源 <span class="text-muted"></span></h2>
					  <p class="lead">覆盖超过9.8万款优质媒体。基于DSP对接大量行业顶尖优质视频媒体资源。基于二维码、sifi技术、swingo技术的媒体整合。</p>
					</div>
					<div class="col-md-5">
					  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/dsp_1.png" alt="Generic placeholder image">
					</div>
				</div>
			  </div>

			  <div class="row featurette">
				<div class="mwidth1200 clearfix">
					<div class="col-md-7 col-md-push-5">
					  <h2 class="featurette-heading">海量媒体广告资源 <span class="text-muted"></span></h2>
					  <p class="lead">覆盖超过9.8万款优质媒体。基于DSP对接大量行业顶尖优质视频媒体资源。基于二维码、sifi技术、swingo技术的媒体整合。</p>
					</div>
					<div class="col-md-5 col-md-pull-7">
					  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/dsp_1.png" alt="Generic placeholder image">
					</div>
				</div>
			  </div>

			  <div class="row featurette bg">
				<div class="mwidth1200 clearfix">
					<div class="col-md-7">
					  <h2 class="featurette-heading">海量媒体广告资源 <span class="text-muted"></span></h2>
					  <p class="lead">覆盖超过9.8万款优质媒体。基于DSP对接大量行业顶尖优质视频媒体资源。基于二维码、sifi技术、swingo技术的媒体整合。</p>
					</div>
					<div class="col-md-5">
					  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/dsp_1.png" alt="Generic placeholder image">
					</div>
				</div>
			  </div>
			  
			</div>
	</div>
	<!-- 广告形式 -->
	
    <div role="tabpanel" class="tab-pane" id="dtable2">
		<div class="container marketing">
			<!-- 第一行 -->
			<div class="row featurette">
			  <!-- 第一行第一列 -->
				<div class="col-md-5 col-md-offset-1 col-style">
					<div class="row">
						<div class="col-md-4">
							<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-2.png" alt="Generic placeholder image">
						</div>
						<div class="col-md-8">
							<h1>积分墙</h1>
							<p>以APP虚拟币为报酬鼓励用户体验广告的新型广告形式。用户完成任务获得虚拟币的同时，APP的开发者也能获得收入</p>
						</div>
					</div>
				</div>
				
				<!-- 第一行第二列 -->
				<div class="col-md-5 col-md-offset-1 col-style">
					<div class="row">
						<div class="col-md-4">
							<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-2.png" alt="Generic placeholder image">
						</div>
						<div class="col-md-8">
							<h1>积分墙</h1>
							<p>以APP虚拟币为报酬鼓励用户体验广告的新型广告形式。用户完成任务获得虚拟币的同时，APP的开发者也能获得收入</p>
						</div>
					</div>
				</div>
			</div>
			  
			  
			<!-- 第二行 -->
			<div class="row featurette">
			  <!-- 第二行第一列 -->
				<div class="col-md-5 col-md-offset-1 col-style">
					<div class="row">
						<div class="col-md-4">
							<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-2.png" alt="Generic placeholder image">
						</div>
						<div class="col-md-8">
							<h1>积分墙</h1>
							<p>以APP虚拟币为报酬鼓励用户体验广告的新型广告形式。用户完成任务获得虚拟币的同时，APP的开发者也能获得收入</p>
						</div>
					</div>
				</div>
			
			<!-- 第二行第二列 -->
				<div class="col-md-5 col-md-offset-1 col-style">
					<div class="row">
						<div class="col-md-4">
							<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-2.png" alt="Generic placeholder image">
						</div>
						<div class="col-md-8">
							<h1>积分墙</h1>
							<p>以APP虚拟币为报酬鼓励用户体验广告的新型广告形式。用户完成任务获得虚拟币的同时，APP的开发者也能获得收入</p>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 第三行 -->
			<div class="row featurette">
			  <!-- 第三行第一列 -->
				<div class="col-md-5 col-md-offset-1 col-style">
					<div class="row">
						<div class="col-md-4">
							<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-2.png" alt="Generic placeholder image">
						</div>
						<div class="col-md-8">
							<h1>积分墙</h1>
							<p>以APP虚拟币为报酬鼓励用户体验广告的新型广告形式。用户完成任务获得虚拟币的同时，APP的开发者也能获得收入</p>
						</div>
					</div>
				</div>
			
			<!-- 第三行第二列 -->
				<div class="col-md-5 col-md-offset-1 col-style">
					<div class="row">
						<div class="col-md-4">
							<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-2.png" alt="Generic placeholder image">
						</div>
						<div class="col-md-8">
							<h1>积分墙</h1>
							<p>以APP虚拟币为报酬鼓励用户体验广告的新型广告形式。用户完成任务获得虚拟币的同时，APP的开发者也能获得收入</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 创意形式 -->
    <div role="tabpanel" class="tab-pane" id="dtable3">
		<div class="container marketing">
		  <div class="row featurette-no">
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
		  </div>
		  
		  <div class="row featurette-no">
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
		  </div>
		  
		  <div class="row featurette-no">
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
				<div class="col-md-3">
					<img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/gc_pic9.jpg" alt="">
				</div>
		  </div>
		  
		  
		  
		</div>
	</div>
  </div>
</div>


<?php include "gotop.php"?>
<?php include "footer.php"; ?>

