<!-- 表单弹窗 -->
<!-- 登录 -->
<!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade" id="login" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog width436">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">登录</h4>	
      </div>
      <div class="modal-body">
        <form action="" method="get" name="form">
			<ul class="common-form">
				<li class="username">
					<span class="username-ico"></span>
					<input type="text" name="username" required="" placeholder="邮箱"/>
				</li>
				<li class="password">
					<span class="password-ico"></span>
					<input type="password" name="password" required="" placeholder="密码"/>
				</li>
			</ul>
			<label for="remeber"><input type="checkbox" checked="checked" name="remeber" value="remeber" id="remeber">记住我</label>
			<a href="password.php" class="forget">忘记密码?</a>
		</form>
      </div>
	  
      <div class="modal-footer">
		<input type="submit" id="signin-btn" value="登录" hidefocus="true" class="btn-red btn-full">
		<input type="button" id="signin-register-btn" value="注册" hidefocus="true" class="btn-red btn-full">	
      </div>
    </div>
  </div>
</div>
	
<!-- 注册 -->
<!-- Button trigger modal -->	
<!-- Modal -->
<div class="modal fade" id="register" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog width436">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">注册</h4>
      </div>
      <div class="modal-body">
        <form>
			<ul class="common-form">
				<li class="username">
					<span class="username-ico"></span>
					<input type="text" name="username" required="" placeholder="邮箱" />
				</li>
				<li class="password">
					<span class="password-ico"></span>
					<input type="text" name="password" required="" placeholder="密码" />
				</li>

			</ul>
			<div class="panel-role">
				<li><input type="radio" name="role_radius" value="1"></input>开发者</li>
				<li><input type="radio" name="role_radius" value="2"></input>广告主</li>
				<li><input type="radio" name="role_radius" value="3"></input>渠道商</li>
			</div>
			<div class="panel-captcha">
				<li class="captcha-text">
					<span class="captcha-ico"></span>
					<input type="text" name="captcha" required="" placeholder="请输出右图内容" maxlength="5"></input>
				</li>
				<li class="captcha-image" id="captcha-image">
					<img src="http://7xj6xf.com1.z0.glb.clouddn.com/captcha.gif" width="80" height="40">
				</li>
				<li class="captcha-change">
					<a href="">换一张</a>
				</li>
			</div>
			<div class="register-btn-wrap">
				<input type="submit" id="register-btn" value="注册" class="btn btn-primary">
			</div>
		</form>
      </div>
	  
      <div class="modal-footer">
       <!--  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
		<p class="law text-center">
			<input type="checkbox" checked="checked" onclick="">
			我已阅读并同意遵守
			<a href="#" target="_blank">法律声明</a>
			和
			<a href="#" target="_blank">隐私条款</a>
		</p>		
      </div>
    </div>
  </div>
</div>	

<!-- 登录框中点击注册显示注册框 -->
<script type="text/javascript">
	$(function(){
		$("#signin-register-btn").click(function(){
			$('#login').modal('hide');
			$('#register').modal('show');
		});
	});
</script>

<!-- 模态框垂直居中 -->
<script type="text/javascript">
	$(function(){
		$('.modal').on('show.bs.modal', function (e) {
			$(".modal-dialog").css("margin-top" ,function(){
				return $(".modal").height()/4;			
			});
		});
	});
</script>













