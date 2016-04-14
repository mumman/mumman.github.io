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
				<a href="developer.php">开发者</a> >
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

<div role="tabpanel" class="developer-page">
  <!-- Nav tabs -->
  <ul class="nav nav-tabs nav-style text-center" role="tablist">

    <li role="presentation" class="active"><a href="#dtable1" aria-controls="dtable1" role="tab" data-toggle="tab">百灵优势</a></li><!--
	--><li role="presentation"><a href="#dtable2" aria-controls="dtable2" role="tab" data-toggle="tab">开发者工具</a></li><!--
	--><li role="presentation" class="borderfff"><a href="#dtable3" aria-controls="dtable3" role="tab" data-toggle="tab">开发者评价</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
  <!-- 百灵优势 -->
    <div role="tabpanel" class="tab-pane active" id="dtable1">
			<div class="container marketing">
			  <div class="row featurette">
				<div class="col-md-7">
				  <h2 class="featurette-heading">创新的广告形式 <span class="text-muted"></span></h2>
				  <p class="lead">支持banner、插屏广告、开屏广告、互动式插屏广告、文字链、富媒体等多种广告展现样式，不断创新新型广告，提高广告与应用的契合，优化用户体验，提高开发者的广告收入</p>
				</div>
				<div class="col-md-5">
				  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/index_feature_8.png" alt="Generic placeholder image">
				</div>
			  </div>

			  <hr class="featurette-divider">

			  <div class="row featurette">
				<div class="col-md-7 col-md-push-5">
				  <h2 class="featurette-heading">创新的广告形式 <span class="text-muted"></span></h2>
				  <p class="lead">支持banner、插屏广告、开屏广告、互动式插屏广告、文字链、富媒体等多种广告展现样式，不断创新新型广告，提高广告与应用的契合，优化用户体验，提高开发者的广告收入</p>
				</div>
				<div class="col-md-5 col-md-pull-7">
				   <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/index_feature_8.png" alt="Generic placeholder image">
				</div>
			  </div>

			  <hr class="featurette-divider">

			  <div class="row featurette">
				<div class="col-md-7">
				  <h2 class="featurette-heading">创新的广告形式 <span class="text-muted"></span></h2>
				  <p class="lead">支持banner、插屏广告、开屏广告、互动式插屏广告、文字链、富媒体等多种广告展现样式，不断创新新型广告，提高广告与应用的契合，优化用户体验，提高开发者的广告收入</p>
				</div>
				<div class="col-md-5">
				   <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/index_feature_8.png" alt="Generic placeholder image">
				</div>
			  </div>

			  <hr class="featurette-divider">
	
			</div>
	</div>
	<!-- 开发者工具 -->
    <div role="tabpanel" class="tab-pane" id="dtable2">
		<div class="container marketing">
			  <div class="row featurette">
				<div class="col-md-7">
				  <h2 class="featurette-heading">开屏广告 <span class="text-muted"></span></h2>
				  <p class="lead">开屏一般加载于APP启动画面，不可交互，展示后自动关闭进入应用主页面。篇幅大，展现体验好。对于品牌广告主而言，开展形式是目前最好的品牌曝光形式。</p>
				  <ul>
					<li class="dtable2-ico1"><span>广告展现篇幅大，单次展现收益远大于其他广告形式，目前最受品牌广告青睐。</span></li>
					<li class="dtable2-ico2"><span>广告在应用开机画面后加载，展示完毕后自动关闭，受众接收自然。</span></li>
				  </ul>
				  <div class="dtable2-btn text-center">
					<a class="dtable2-ico3">Aandroid 版</a>
					<a class="dtable2-ico4">IOS 版</a>
				  </div>
				</div>
				<div class="col-md-5">
				  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-1.png" alt="Generic placeholder image">
				</div>
			  </div>
			  
			  <div class="row featurette">
				<div class="col-md-7 col-md-push-5">
				  <h2 class="featurette-heading">开屏广告 <span class="text-muted"></span></h2>
				  <p class="lead">开屏一般加载于APP启动画面，不可交互，展示后自动关闭进入应用主页面。篇幅大，展现体验好。对于品牌广告主而言，开展形式是目前最好的品牌曝光形式。</p>
				  <ul>
					<li class="dtable2-ico1"><span>广告展现篇幅大，单次展现收益远大于其他广告形式，目前最受品牌广告青睐。</span></li>
					<li class="dtable2-ico2"><span>广告在应用开机画面后加载，展示完毕后自动关闭，受众接收自然。</span></li>
				  </ul>
				  <div class="dtable2-btn text-center">
					<a class="dtable2-ico3">Aandroid 版</a>
					<a class="dtable2-ico4">IOS 版</a>
				  </div>
				</div>
				<div class="col-md-5 col-md-pull-7">
				   <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-1.png" alt="Generic placeholder image">
				</div>
			  </div>
			  
			  <div class="row featurette">
				<div class="col-md-7">
				  <h2 class="featurette-heading">开屏广告 <span class="text-muted"></span></h2>
				  <p class="lead">开屏一般加载于APP启动画面，不可交互，展示后自动关闭进入应用主页面。篇幅大，展现体验好。对于品牌广告主而言，开展形式是目前最好的品牌曝光形式。</p>
				  <ul>
					<li class="dtable2-ico1"><span>广告展现篇幅大，单次展现收益远大于其他广告形式，目前最受品牌广告青睐。</span></li>
					<li class="dtable2-ico2"><span>广告在应用开机画面后加载，展示完毕后自动关闭，受众接收自然。</span></li>
				  </ul>
				  <div class="dtable2-btn text-center">
					<a class="dtable2-ico3">Aandroid 版</a>
					<a class="dtable2-ico4">IOS 版</a>
				  </div>
				</div>
				<div class="col-md-5">
				   <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/phone-1.png" alt="Generic placeholder image">
				</div>
			  </div>
		</div>
	</div>
	<!-- 开发者评论 -->
    <div role="tabpanel" class="tab-pane" id="dtable3">
		<div class="container marketing">
		  <div class="row featurette">
			<div class="col-md-3">
			  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/sound_pic1.png" alt="Generic placeholder image">
			</div>
			<div class="col-md-9">
			  <h2 class="featurette-heading">芒果ＴＶ <span class="text-muted"></span></h2>
			  <p class="lead">芒果TV目前获得了湖南广电重点扶持，也获得《花儿与少年》等湖南卫视热播节目的独播权，艾德思奇是中国移动广告平台的佼佼者，这也是我们选择艾德思奇作为移动广告战略合作伙伴的原因。</p>
			</div>
		  </div>
		  <div class="row featurette">
			<div class="col-md-3">
			  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/sound_pic1.png" alt="Generic placeholder image">
			</div>
			<div class="col-md-9">
			  <h2 class="featurette-heading">芒果ＴＶ <span class="text-muted"></span></h2>
			  <p class="lead">芒果TV目前获得了湖南广电重点扶持，也获得《花儿与少年》等湖南卫视热播节目的独播权，艾德思奇是中国移动广告平台的佼佼者，这也是我们选择艾德思奇作为移动广告战略合作伙伴的原因。</p>
			</div>
		  </div>
		  <div class="row featurette">
			<div class="col-md-3">
			  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/sound_pic1.png" alt="Generic placeholder image">
			</div>
			<div class="col-md-9">
			  <h2 class="featurette-heading">芒果ＴＶ <span class="text-muted"></span></h2>
			  <p class="lead">芒果TV目前获得了湖南广电重点扶持，也获得《花儿与少年》等湖南卫视热播节目的独播权，艾德思奇是中国移动广告平台的佼佼者，这也是我们选择艾德思奇作为移动广告战略合作伙伴的原因。</p>
			</div>
		  </div>
		  <div class="row featurette">
			<div class="col-md-3">
			  <img class="featurette-image img-responsive center-block" src="http://7xj6xf.com1.z0.glb.clouddn.com/sound_pic1.png" alt="Generic placeholder image">
			</div>
			<div class="col-md-9">
			  <h2 class="featurette-heading">芒果ＴＶ <span class="text-muted"></span></h2>
			  <p class="lead">芒果TV目前获得了湖南广电重点扶持，也获得《花儿与少年》等湖南卫视热播节目的独播权，艾德思奇是中国移动广告平台的佼佼者，这也是我们选择艾德思奇作为移动广告战略合作伙伴的原因。</p>
			</div>
		  </div>
		</div>
	</div>
  </div>

</div>


<?php include "gotop.php" ?>
<?php include "footer.php" ?>

