<?php include 'header.php';?>


<!-- 注册成功激活邮箱成功 -->
<div class="register-success container-fluid">
		<!-- <h4 class="modal-header">恭喜注册成功</h4>
		<h4>我们已经向您的邮箱发送了一封验证邮件</h4>
		<p>您需要点击邮件内的激活链接对账户进行激活</p>
		<div class="check-btn"><a href="#">查看我的邮箱</a></div>
		<p class="rs-notes">如果没有收到邮件,请检查垃圾邮件,或者点击下方按钮重新发送</p>
		<div class="again-btn"><a href="#">重新发送邮件</a></div> -->

	<div class="modal change-password z-index0" >
	  <div class="modal-dialog width436 mt10">
		<div class="modal-content">
		  <div class="modal-header">
			<h4 class="modal-title">忘记密码</h4>
		  </div>
		  <h4 class="text-center">请输入你邮箱</h4>
		  <div class="modal-body">
			<form name="change_password" action="" method="get">
				<ul class="common-form">
					<li class="username">
						<span class="username-ico"></span>
						<input type="text" name="username" required="" placeholder="邮箱" />
					</li>
				</ul>
				<div class="panel-captcha">
					<li class="captcha-text">
						<span class="captcha-ico"></span>
						<input type="text" name="captcha" required="" placeholder="请输出右图内容" maxlength="5"></input>
					</li>
					<li class="captcha-image" id="captcha-image">
						<img src="http://7xj6xf.com1.z0.glb.clouddn.com/captcha.gif" width="80" height="40">
					</li>
					<li class="captcha-change">
						<a href="3">换一张</a>
					</li>
				</div>
				<div class="register-btn-wrap">
					<input type="submit" id="register-btn" value="下一步" class="btn btn-primary" onclick="location.href='password_email.php'">
				</div>
			</form>
		  </div>
		  
		</div>
	  </div>
	</div>	
</div>


<div style="position: fixed; bottom:0; left:0; width:100%">
<?php include 'footer.php';?>
</div>


