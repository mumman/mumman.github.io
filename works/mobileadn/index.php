<?php include "header.php"?>

<!-- 顶部附菜单 -->
<div class="nav-sub">
	
	<!-- 语言切换 -->
	<!-- <div class="dropdown pull-left">
	  <button class="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
		<li><img src="http://7xj6xf.com1.z0.glb.clouddn.com/flag.png" alt="">中国<span class="caret"></span></li>
	  </button>
	  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
		<li><img src="http://7xj6xf.com1.z0.glb.clouddn.com/flag.png" alt="">中国</li>
		<li><img src="http://7xj6xf.com1.z0.glb.clouddn.com/flag.png" alt="">中国</li>
	  </ul>
	</div> -->
	
	<!-- 面包屑导航 -->
	<div class="bread-nav">
		<p>
			<a href="index.php">首页</a>
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

	<!-- 全屏滚动 -->
	<script>
		$(function(){
			$("#fullpage").fullpage({
				sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['主页', '服务', '广告主与开发者','产品','案例'],
				scrollOverflow: true,
				afterLoad: function(anchorLink, index){
				
					if(index == 1){
						$("#totop").fadeOut("slow");
					}

					if(index == 2){
						$("#totop").fadeIn("slow");
					}
				}
				
			});
		});
	</script>
	
	<div id="fullpage">
		<!-- 主页 -->
		<div class="section active home-bg" id="section0">
			<div class="section-content text-center">
				<h1>百灵奥拓</h1>
				<h3>全球领先的移动广告平台</h3>
				<a href="sdk.php" class="sdk-btn">下载SDK</a>
			</div>
			<div class="section0-bottom text-center">
			<!-- 传递参数的方式跳到关于界面的公司动态 -->
				<div><img src="http://7xj6xf.com1.z0.glb.clouddn.com/sprite-indexGlobal.png" alt=""><a href="about.php?news-company=active">「百灵公告 」庆百灵五周年，开发者回馈活动</a></div>
				<!-- 跳转到关于界面的公司动态 -->
				<!-- <script type="text/javascript">
					$(".section0-bottom a").click(function(){
						$("#about li:eq(4) a").tab('show');
					});
				</script> -->
			</div>	
		</div>
		
		<div class="section" id="section1">
		<!-- fulpage自带的幻灯片 服务-->
			<div class="slide" id="slide1">		
				<div class="container-fluid">
					<div class="col-md-6 pl20">
						<h2>百灵奥拓</h2>
						<p>总覆盖用户数量逾<span>5.4亿</span>用户</p>
						<p>日均覆盖独立用户数量逾<span>3200万</span>用户</p>
						<p>日均广告曝光PV数约<span>6.5亿</span></p>
						<p>实现覆盖中国网民用户占比例<span>80%</span></p>
						<p>总共实现覆盖APP应用数<span>78000+</span>，开发者分成<span>2亿</span></p>
					</div>
					<div class="col-md-6">
						<img class="center-block img-responsive" src="http://7xj6xf.com1.z0.glb.clouddn.com/tv.png">
					</div>
				</div>		
			</div>
			<div class="slide" id="slide2">
				<div class="container-fluid">
					<div class="col-md-6 pl20">
						<h2>百灵奥拓</h2>
						<p>总覆盖用户数量逾<span>5.4亿</span>用户</p>
						<p>日均覆盖独立用户数量逾<span>3200万</span>用户</p>
						<p>日均广告曝光PV数约<span>6.5亿</span></p>
						<p>实现覆盖中国网民用户占比例<span>80%</span></p>
						<p>总共实现覆盖APP应用数<span>78000+</span>，开发者分成<span>2亿</span></p>
					</div>
					<div class="col-md-6">
						<img class="center-block img-responsive" src="http://7xj6xf.com1.z0.glb.clouddn.com/tv.png">
					</div>
				</div>			
			</div>
			<div class="slide" id="slide3">
				<div class="container-fluid">
					<div class="col-md-6 pl20">
						<h2>百灵奥拓</h2>
						<p>总覆盖用户数量逾<span>5.4亿</span>用户</p>
						<p>日均覆盖独立用户数量逾<span>3200万</span>用户</p>
						<p>日均广告曝光PV数约<span>6.5亿</span></p>
						<p>实现覆盖中国网民用户占比例<span>80%</span></p>
						<p>总共实现覆盖APP应用数<span>78000+</span>，开发者分成<span>2亿</span></p>
					</div>
					<div class="col-md-6">
						<img class="center-block img-responsive" src="http://7xj6xf.com1.z0.glb.clouddn.com/tv.png">
					</div>
				</div>			
			</div>
		</div>
		<!-- 广告主与开发者 -->
		<div class="section" id="section2">			
				<div class="col-md-6 section2-developer text-center">
					<div class="developer-content">
						<h1>我是开发者</h1>
						<p>我希望获得更多的广告收益，实时查看广告收入</p>
						<a href="developer.php">了解更多</a>
					</div>	
				</div>
				<div class="col-md-6 section2-poster text-center">
					<div class="poster-content">
						<h1>我是广告主</h1>
						<p>我希望完善的广告监测系统，实时数据统计,直观广告效果</p>
						<a href="advertiser.php">了解更多</a>
					</div>				
				</div>
		</div>
		
		
		<!-- 产品 -->
		<div class="section" id="section3">
			<div class="container product">
				<!-- <div class="col-md-6">
					<span class="product-ico"></span>
				</div>
				<div class="col-md-6">
					<div class="text-content">
						<p>
						百度、多盟、安沃、亿动、艾德思奇、易传媒、有米、百灵欧拓、AdMob、InMobi、iAd...芒果为您“聚合”了国内外几乎全部的移动广告平台！
						</p>
						<p>
						更多的平台代表您有更多的可能性来投资流量，在众多移动广告平台之间自由组合、随时切换是提升您移动广告收入的基础！芒果严格的平台聚合测试机制、稳定可靠的离线保障系统、强大的流量配置功能、以及每天为7万多个App服务的经验都足以让您放心，芒果将按照您的指令丝毫不差的将流量分配到您指定的平台上！
						</p>
					</div>
				</div>
				<div class="col-md-12 section3-nav text-center">
					<ul>
						<li><a href="#" class="s3-nav-left">积分墙</a></li>
						<li><a href="#" class="s3-nav-middle">插屏广告</a></li>
						<li><a href="#" class="s3-nav-right">广告条</a></li>
					</ul>
				</div> -->
				
				<div role="tabpanel" class="product-tab">

				  <!-- Tab panes -->
				  <div class="tab-content">
				  
					<div role="tabpanel" class="tab-pane active" id="product-item1">
						<div class="col-md-6">
							<span class="product-ico"></span>
						</div>
						<div class="col-md-6">
							<div class="text-content">
								<p>
								百度、多盟、安沃、亿动、艾德思奇、易传媒、有米、百灵欧拓、AdMob、InMobi、iAd...芒果为您“聚合”了国内外几乎全部的移动广告平台！
								</p>
								<p>
								更多的平台代表您有更多的可能性来投资流量，在众多移动广告平台之间自由组合、随时切换是提升您移动广告收入的基础！芒果严格的平台聚合测试机制、稳定可靠的离线保障系统、强大的流量配置功能、以及每天为7万多个App服务的经验都足以让您放心，芒果将按照您的指令丝毫不差的将流量分配到您指定的平台上！
								</p>
							</div>
						</div>	
					</div>
					
					<div role="tabpanel" class="tab-pane" id="product-item2">插屏广告插屏广告插屏广告</div>
					<div role="tabpanel" class="tab-pane" id="product-item3">广告条广告条广告条</div>
				  </div>
				  
				   <!-- Nav tabs -->
				  <ul class="nav nav-tabs" role="tablist">
					<li role="presentation" class="active"><a href="#product-item1" aria-controls="product-item1" role="tab" data-toggle="tab">积分墙</a></li>
					<li role="presentation"><a href="#product-item2" aria-controls="product-item2" role="tab" data-toggle="tab">插屏广告</a></li>
					<li role="presentation"><a href="#product-item3" aria-controls="product-item3" role="tab" data-toggle="tab">广告条</a></li>				
				  </ul>
				</div>
			</div>
		</div>
		
		<!-- 案例 -->
		
		<div class="section" id="section4">
			<div class="container-fluid text-center">
				<div class="row">
			
				<div class="section4-wrap">
					<h1>他们正在使用百灵奥拓</h1>
					<ul class="section4-nav">
						<li><span class="case-icon1"></span></li>
						<li><span class="case-icon2"></span></li>
						<li><span class="case-icon3"></span></li>
						<li><span class="case-icon4"></span></li>
						<li><span class="case-icon5"></span></li>
						<li><span class="case-icon6"></span></li>
						<li><span class="case-icon7"></span></li>
						<li><span class="case-icon8"></span></li>
					</ul>
				</div>
					
				<div class="callbacks_container">
					  <ul class="rslides" id="slider4">
						<li class="center-block" style="position: relative">
						  <div class="author-info">
							<p class="section4-author-icon center-block"></p>
							<p class="s4-author-profile center-block">关键是时常听到有人账号被封，一天也是提心掉胆的，比如这个月海未收到款，有是相当的担心，现在百灵自动优化更好，所以把量主要换到百灵了。</p>
							<h2>XXX</h2>
							<p class="s4-author">AAA的开发者</p>
						  </div>
						</li>
						<li class="center-block" style="position: relative">
						  <div class="author-info">
							<p class="section4-author-icon center-block"></p>
							<p class="s4-author-profile center-block">关键是时常听到有人账号被封，一天也是提心掉胆的，比如这个月海未收到款，有是相当的担心，现在百灵自动优化更好，所以把量主要换到百灵了。</p>
							<h2>YYY</h2>
							<p class="s4-author">AAA的开发者</p>
						  </div>
						</li>
						<li class="center-block" style="position: relative">
						  <div class="author-info">
							<p class="section4-author-icon center-block"></p>
							<p class="s4-author-profile center-block">关键是时常听到有人账号被封，一天也是提心掉胆的，比如这个月海未收到款，有是相当的担心，现在百灵自动优化更好，所以把量主要换到百灵了。</p>
							<h2>ZZZ</h2>
							<p class="s4-author">AAA的开发者</p>
						  </div>
						</li>
					  </ul>
				</div>
				</div>
			</div>
			<!-- 幻灯片 -->
			<script type="text/javascript">
				 $("#slider4").responsiveSlides({
					auto: false,
					pager: false,
					nav: true,
					speed: 500,
					namespace: "callbacks",
					before: function () {
					  $('.events').append("<li>before event fired.</li>");
					},
					after: function () {
					  $('.events').append("<li>after event fired.</li>");
					}
				  });	
			</script>
			<!-- 页脚不能用引用的方式导入 -->
			<div class="footer">
				<div class="container-fluid">
					<div class="col-md-3">
						<div class="contact-top">
							<li class="contact-phone"><span class="tel"></span><span>028-626-96962</span></li>
							<li class="contact-time">周一至周日 9:00-18:00（仅收市话费）</li>
						</div>
						<div class="contact-bottom">
							<p><span>商务合作QQ:     3041507598</span><span class="q1"></span></p>
							<p><span>服务电话QQ:     3041507598</span><span class="q1"></span></p>
						</div>
					</div>
					<div class="col-md-2">
						<h3>关于</h3>
						<p><a href="#">公司介绍</a></p>
						<p><a href="#">媒体频道</a></p>
						<p><a href="#">加入我们</a></p>
						<p><a href="#">联系我们</a></p>
						<p><a href="#">合作伙伴</a></p>
						<p><a href="#">友情链接</a></p>
					</div>
					<div class="col-md-2">
						<h3>开发者者服务</h3>
						<p><a href="#">文档中心</a></p>
						<p><a href="#">资源下载</a></p>
						<p><a href="#">版本更新</a></p>
						<p><a href="#">技术帮助中心</a></p>
					</div>
					<div class="col-md-2">
						<h3>产品</h3>
						<p><a href="#">积分墙</a></p>
						<p><a href="#">插屏广告</a></p>
						<p><a href="#">广告条</a></p>
					</div>
					<div class="col-md-3">
						<div class="weixin-top">
							<p><span class="weixin-ico"></span><span>微信公众账号</span></p>
							<li>扫描二维码即可关注</li>
						</div>
						<div class="weixin-bottom">
							<span></span>
						</div>
					</div>
				</div>
				<div class="container-fluid text-center site-right">
					<p>code &amp; design by <a href="http://zhpblog.sinaapp.com/" target="_blank">zhangping</a><a href="http://weibo.com/u/1295998082" class="weibo" target="_blank"></a></p>
				</div>
			</div>
		</div>
	</div>
	

<?php include "modal.php" ?>
	
<!-- 回到顶部 -->
<a href="#site-home" id="totop" ></a>
<script type="text/javascript">
	$(function(){
		$("#totop").click(function(){
			$.fn.fullpage.moveTo(1);
		})
	});
</script>
</body>
</html>




