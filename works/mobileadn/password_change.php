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
        <h4 class="modal-title">修改密码</h4>
      </div>
      <div class="modal-body">
        <form name="change_password" action="" method="get">
			<ul class="common-form">
				<li class="password">
					<span class="password-ico"></span>
					<input type="text" name="password1" required="" placeholder="密码" />
				</li>
				<li class="password">
					<span class="password-ico"></span>
					<input type="text" name="password2" required="" placeholder="重复新密码" />
				</li>
			</ul>
			<div class="register-btn-wrap">
				<input type="submit" id="register-btn" value="确认更改密码" class="btn btn-primary">
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


