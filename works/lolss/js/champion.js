$(function(){
	
	//获得url的参数，写个jquery插件。
	(function ($) {
		$.getUrlParam = function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");	//构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg);	//匹配目标参数
			if (r != null) return unescape(r[2]); return null;	 //返回参数值
		}
	})(jQuery);
	
	var urlName=$.getUrlParam("name");
	
	
	//拼接DOM
	(function(){
		var championJson;
		$.ajax({
			type:"GET",
			typeDate:"json",
			async: false,
			url:"json/champion/"+$.getUrlParam("name")+".json",
			beforeSend:function(){},
			success:function(result){
				
				var contentLeft="";
				var contentRight="";
				championJson=result;
				getChampionJson=function(){
					return championJson;
				};
				// tags翻译
				var tagsArray={"Mage":"法师","Assassin":"刺客","Fighter":"战士","Tank":"坦克","Support":"辅助","Marksman":"射手"}
				// 循环取得result.data中的第一个key
				$.each(result.data,function(i,item){
				// 判断tags是否有第二值。没有的话就把第一个值赋给tags1
				tagsArray[item.tags[1]]?tags1=tagsArray[item.tags[1]]:tags1=tagsArray[item.tags[0]]
//拼接hero-left部分				
contentLeft +="<div class='profile'>"+
		    "<div class='media'>"+
		      "<div class='media-left'>"+
		        "<img class='media-object full' src='http://7xqrx1.com1.z0.glb.clouddn.com/"+item.id+".png' alt=''>"+
		      "</div>"+
		    "<div class='media-body'>"+
		      "<h4 class='version'>版本:&nbsp;&nbsp;<span class='hcolor1'>"+result.version+"</span></h4>"+
		      "<h4 class='id'>id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='hcolor1'>"+item.id+"</span></h4>"+
		      "<h4 class='key'>key:&nbsp;&nbsp;&nbsp;<span class='hcolor1'>"+item.key+"</span></h4>"+
		    "</div>"+
		    "<h3 class='name hcolor5'>"+item.name+"</h3>"+
		    "<strong class='title'>简称：<span class='hcolor3'>"+item.title+"</span></strong>"+
		    "<p class='tags'>"+
		      "<span class='label label-warning'>"+tagsArray[item.tags[0]]+"</span>"+
		      "<span class='label label-danger'>"+tags1+"</span>"+
		    "</p>"+
		  "</div>"+
		  "<hr>"+
		  "<div class='info m30'>"+
		    "<p class='attack'>"+
			  "<span class='pull-left'>物理攻击：</span>"+
		      "<div class='progress'>"+
		        "<div class='progress-bar progress-bar-danger progress-bar-striped' style='width:"+item.info.attack*10+"%'></div>"+
			  "</div>"+
		    "</p>"+
			"<p class='defense'>"+
			  "<span class='pull-left'>防御能力：</span>"+
		      "<div class='progress'>"+
		        "<div class='progress-bar progress-bar-success progress-bar-striped' style='width:"+item.info.defense*10+"%'></div>"+
			  "</div>"+
		    "</p>"+
			"<p class='magic'>"+
			  "<span class='pull-left'>魔法攻击：</span>"+
		      "<div class='progress'>"+
		        "<div class='progress-bar progress-bar-warning progress-bar-striped' style='width:"+item.info.magic*10+"%'></div>"+
			  "</div>"+
		    "</p>"+
			"<p class='difficulty'>"+
			  "<span class='pull-left'>操作难度：</span>"+
		      "<div class='progress'>"+
		        "<div class='progress-bar progress-bar-info progress-bar-striped' style='width:"+item.info.difficulty*10+"%'></div>"+
			  "</div>"+
		    "</p>"+
		  "</div>"+
		  "<hr>"+
		  "<div class='stats m30'>"+
		    "<p class='hp'>基础血量 : <span class='hcolor5'>"+item.stats.hp+"</span></p>"+
		    "<p class='hpperlevel'>每级增加血量 : <span class='hcolor5'>"+item.stats.hpperlevel+"</span></p>"+
		    "<p class='mp'>基础魔法 : <span class='hcolor5'>"+item.stats.mp+"</span></p>"+
		    "<p class='mpperlevel'>每级增加血量 : <span class='hcolor5'>"+item.stats.mpperlevel+"</span></p>"+
		    "<p class='movespeed'>移动速度 : <span class='hcolor5'>"+item.stats.movespeed+"</span></p>"+
		    "<p class='armor'>基础护甲 : <span class='hcolor5'>"+item.stats.armor+"</span></p>"+
			"<p class='armorperlevel'>每级增加护甲 : <span class='hcolor5'>"+item.stats.armorperlevel+"</span></p>"+
			"<p class='spellblock'>魔法抗性 : <span class='hcolor5'>"+item.stats.spellblock+"</span></p>"+
			"<p class='spellblockperlevel'>每级增加抗性: <span class='hcolor5'>"+item.stats.spellblockperlevel+"</span></p>"+
			"<p class='attackrange'>攻击范围 : <span class='hcolor5'>"+item.stats.attackrange+"</span></p>"+
			"<p class='hpregen'>生命值恢复 : <span class='hcolor5'>"+item.stats.hpregen+"</span></p>"+
			"<p class='hpregenperlevel'>每级增加生命恢复 : <span class='hcolor5'>"+item.stats.hpregenperlevel+"</span></p>"+
			"<p class='mpregen'>魔法值恢复 : <span class='hcolor5'>"+item.stats.mpregen+"</span></p>"+
			"<p class='mpregenperlevel'>每级增加魔法恢复 : <span class='hcolor5'>"+item.stats.mpregenperlevel+"<span></p>"+
			"<p class='crit'>暴击 : <span class='hcolor5'>"+item.stats.crit+"</span></p>"+
			"<p class='critperlevel'>每级增加暴击 : <span class='hcolor5'>"+item.stats.critperlevel+"</span></p>"+
			"<p class='attackdamage'>攻击力 : <span class='hcolor5'>"+item.stats.attackdamage+"</span></p>"+
			"<p class='attackdamageperlevel'>每级增加攻击力 : <span class='hcolor5'>"+item.stats.attackdamageperlevel+"</span></p>"+
			"<p class='attackspeedoffset'>攻击速度 : <span class='hcolor5'>"+item.stats.attackspeedoffset+"</span></p>"+
			"<p class='attackspeedperlevel'>每级增加攻击速度 : <span class='hcolor5'>"+item.stats.attackspeedperlevel+"</span></p>"+
		  "</div>";
				});
				$("#hero-left").empty();
				$("#hero-left").append(contentLeft);
//拼接hero-right部分			
				$.each(result.data,function(i,item){
contentRight+=  "<div class='panel panel-warning spells'>"+
				  "<div class='panel-heading'>"+
					"<h3 class='panel-title'>英雄技能</h3>"+
				  "</div>"+
				  "<div class='panel-body'>"+
					"<ul class='list-inline text-center'>"+
					  "<li class='passive tips'><a href='#'><img src='http://7xqrx1.com1.z0.glb.clouddn.com/"+item.passive.image.full+"'></a></li>"+
						"<li class='spell1 tips'>"+
							"<a href='#'><img src='http://7xqrx1.com1.z0.glb.clouddn.com/"+item.spells[0].image.full+"'></a>"+
							"<span>Q</span>"+
						"</li>"+
						"<li class='spell2 tips'>"+
							"<a href='#'><img src='http://7xqrx1.com1.z0.glb.clouddn.com/"+item.spells[1].image.full+"'></a>"+
							"<span>W</span>"+
						"</li>"+
						"<li class='spell3 tips'>"+
							"<a href='#'><img src='http://7xqrx1.com1.z0.glb.clouddn.com/"+item.spells[2].image.full+"'></a>"+
							"<span>E</span>"+
						"</li>"+
						"<li class='spell4 tips'>"+
							"<a href='#'><img src='http://7xqrx1.com1.z0.glb.clouddn.com/"+item.spells[3].image.full+"'></a>"+
							"<span>R</span>"+
						"</li>"+
					"</ul>"+
				  "</div>"+
				"</div>"+
				
				"<div class='panel panel-success skins'>"+
				  "<div class='panel-heading'>"+
					"<h3 class='panel-title'>英雄皮肤</h3>"+
				  "</div>"+
				  "<div class='panel-body'>"+
					"<ul class='list-inline text-center'>";
					
					$.each(item.skins,function(index,block){
contentRight+=  "<li>"+
				  "<a href='#models-pos' class='scroll'><img src='http://7xqrx1.com1.z0.glb.clouddn.com/"+item.id+"_"+block.num+".jpg' data-skinname='"+block.name+"'></a>"+
				  "<span>观看3D模型</span>"+
				"</li>";						
					});
contentRight+=      "</ul>"+
				  "</div>"+
				"</div>"+		
				  "<div class='models' id='models-pos'>"+
				   "<div class='panel panel-primary model-option'>"+ 
					"<div class='panel-heading'>"+
					 "<h3 class='panel-title'>模型选项查看器</h3>"+
					"</div>"+ 
					"<div class='panel-body'>"+ 
					 "<div class='col-md-6 text-center'>"+ 
					  "<p>皮肤</p>"+ 
					  "<select name='skin' style='height: 24px; width: 300px;'> ";
					  $.each(item.skins,function(index,block){
contentRight+=        	"<option value='"+index+"'>"+block.name+"</option>";					  
					  });
					  
contentRight+= 		 "</select>"+ 
					 "</div>"+ 
					 "<div class='col-md-6 text-center'>"+
					  "<p>动画</p> "+
					  "<select id='anims' name='stance' style='height: 24px; width: 200px;'>"+
					  "<option value='attack1'>Attack 1</option>"+
					  "<option value='attack2'>Attack 2</option>"+
					  "<option value='channel'>Channel Spell</option>"+
					  "<option value='channel_wndup'>Channel Windup</option>"+
					  "<option value='crit'>Critical Attack</option> "+
					  "<option value='dance'>Dance</option>"+
					  "<option value='death'>Death</option>"+
					  "<option value='idle1'>Idle 1</option>"+
					  "<option value='idle2'>Idle 2</option>"+
					  "<option value='laugh'>Laugh</option>"+
					  "<option value='run'>Run</option>"+
					  "<option value='spell1'>Spell 1</option>"+
					  "<option value='spell2'>Spell 2</option>"+
					  "<option value='spell3'>Spell 3</option>"+
					  "<option value='spell4'>Spell 4</option>"+
					  "<option value='taunt'>Taunt</option>"+
					  "</select>"+ 
					 "</div> "+
					"</div> "+
				   "</div>"+ 
				   "<div class='panel panel-primary model-content'> "+
					"<div class='panel-heading clearfix'>"+ 
					 "<h3 class='panel-title pull-left'>"+item.name+"</h3>"+
					 "<span class='pull-right'>拖动即可旋转，控制+拖动即可平移,双击即可全屏</span>"+ 
					"</div> "+
					"<div class='panel-body'>"+ 
					 "<div class='boxcontent' style='background: #161616;'>"+ 
					  "<object type='application/x-shockwave-flash' data='https://lkstatic.zamimg.com/shared/mv/ZAMviewerfp11-8.swf?1415668471' width='100%' height='500' id='viewer' style='visibility: visible;'>"+ 
					   "<param name='quality' value='high'></param>"+
					   "<param name='allowscriptaccess' value='always'></param>"+ 
					   "<param name='allowfullscreen' value='true'></param> "+
					   "<param name='menu' value='false'></param>"+ 
					   "<param name='wmode' value='direct'></param>"+ 
					   "<param name='flashvars' value='model="+item.key+"&amp;modelType=0&amp;viewerType=3&amp;contentPath=http://lkstatic.zamimg.com/shared/mv/'></param>"+
					  "</object>"+ 
					 "</div>"+ 
					 "<p>模型数据来源：<a href='http://www.lolking.net/' target='_blank'>http://www.lolking.net/</a></p>"+ 
					"</div>"+ 
				   "</div>"+ 
				  "</div>"+
				"<div class='panel panel-default lore'>"+
				  "<div class='panel-heading'>"+
					"<h3 class='panel-title hcolor2'>背景故事</h3>"+
				  "</div>"+
				  "<div class='panel-body'>"+
					"<p>"+item.lore+"</p>"+
				  "</div>"+
				"</div>"+
				"<div class='panel panel-danger splash'>"+
				  "<div class='panel-heading'>"+
					"<h3 class='panel-title'>壁纸：<span class='skinName'>默认</span></h3>"+
				  "</div>"+
				  "<div class='panel-body slide-skin'>"+
					"<ul id='slider' class='list-unstyled'>";
					
				  $.each(item.skins,function(index,block){
contentRight+=	"<li><img src='http://7xqrxe.com1.z0.glb.clouddn.com/"+item.id+"_"+block.num+".jpg' class='img-responsive' data-skinname='"+block.name+"'></li>";				  
				  });
contentRight+=		"</ul>"+
				  "</div>"+
			  "</div>"+
				"<div class='panel panel-default allytips'>"+
				  "<div class='panel-heading'>"+
					"<h3 class='panel-title hcolor2'>当你使用"+item.title+"</h3>"+
				  "</div>"+
				  "<div class='panel-body'>";
				  $.each(item.allytips,function(index,block){
contentRight+=	"<p>"+block+"</p>";				  
				  });

contentRight+=	"</div>"+
				"</div>"+
				"<div class='panel panel-default enemytips'>"+
				  "<div class='panel-heading'>"+
					"<h3 class='panel-title hcolor2'>当敌人使用"+item.title+"</h3>"+
				  "</div>"+
				  "<div class='panel-body'>";
				  $.each(item.enemytips,function(index,block){
contentRight+=	"<p>"+block+"</p>";
				  });

contentRight+=  "</div>"+
			  "</div>";				
				});
				$("#hero-right").empty();
				$("#hero-right").append(contentRight);
			},
			complete:function(){},
			error:function(){
				console.log("获得"+$.getUrlParam("name")+".json 数据失败");
				$("#hero").empty();
				$("#hero").append("<h1>获取数据失败，返回<a href='index.html'>主页</a></h1>")
			}
		});

	})();
	
	//技能提示
	(function(){
		var championJson=getChampionJson();
		var $x=15;
		var $y=15;
		var tiparray= new Array();
		$.each(championJson.data,function(i,item){
			tiparray[0]="<div class='tipsdiv'><h5>"+item.passive.name+"</h5><p>"+item.passive.description+"</p></div>"
			tiparray[1]="<div class='tipsdiv'><h5>"+item.spells[0].name+"【快捷键 <span>Q</span>】</h5><p>"+item.spells[0].description+"</p><p><label>消耗:</label> "+item.spells[0].costBurn+"</p><p><label>冷却:</label> "+item.spells[0].cooldownBurn+"</p><p><label>射程:</label> "+item.spells[0].rangeBurn+"</p><p><p><label>效果:</label> "+item.spells[0].tooltip+"</p></div>"
			tiparray[2]="<div class='tipsdiv'><h5>"+item.spells[1].name+"【快捷键 <span>W</span>】</h5><p>"+item.spells[1].description+"</p><p><label>消耗:</label> "+item.spells[1].costBurn+"</p><p><label>冷却:</label> "+item.spells[1].cooldownBurn+"</p><p><label>射程:</label> "+item.spells[1].rangeBurn+"</p><p><p><label>效果:</label> "+item.spells[1].tooltip+"</p></div>"
			tiparray[3]="<div class='tipsdiv'><h5>"+item.spells[2].name+"【快捷键 <span>E</span>】</h5><p>"+item.spells[2].description+"</p><p><label>消耗:</label> "+item.spells[2].costBurn+"</p><p><label>冷却:</label> "+item.spells[2].cooldownBurn+"</p><p><label>射程:</label> "+item.spells[2].rangeBurn+"</p><p><p><label>效果:</label> "+item.spells[2].tooltip+"</p></div>"
			tiparray[4]="<div class='tipsdiv'><h5>"+item.spells[3].name+"【快捷键 <span>R</span>】</h5><p>"+item.spells[3].description+"</p><p><label>消耗:</label> "+item.spells[3].costBurn+"</p><p><label>冷却:</label> "+item.spells[3].cooldownBurn+"</p><p><label>射程:</label> "+item.spells[3].rangeBurn+"</p><p><p><label>效果:</label> "+item.spells[3].tooltip+"</p></div>"
		
		});
		
		$(".tips").each(function(){
			$(this).mouseover(function(e){		
				for(i in tiparray){
					var index_num=$(this).index();
					if(i==index_num){
						$("body").append(tiparray[i]);		
						break;
					}
				}
				$(".tipsdiv").css({
					top: (e.pageY+$y)+"px",
					left: (e.pageX+$x)+"px"
				});	
			}).mouseout(function(){
				$(".tipsdiv").remove();	
			}).mousemove(function(e){
				$(".tipsdiv").css({
					top: (e.pageY+$y)+"px",
					left: (e.pageX+$x)+"px"			
				});			
			});
		});
		
	})();
	
	//模型选项查看器的功能
	(function(){
		var model;			
		var championJson=getChampionJson();
		$.each(championJson.data,function(i,item){
			model=item.key;
		});
		
		var stance_keys_to_label = {
		
			'attack1': 'Attack 1',
			'attack2': 'Attack 2',
			'attack3': 'Attack 3',
			'rangedattack1': 'Ranged Attack 1',
			'rangedattack2': 'Ranged Attack 2',
			'rangedattack3': 'Ranged Attack 3',
			'passive': 'Passive',		
			'rangedpassive': 'Ranged Passive',			
			'rangedrun1': 'Ranged Run 1',		
			'rangedrun2': 'Ranged Run 2',			
			'rangedspell1': 'Ranged Spell 1',	
			'rangedspell2': 'Ranged Spell 2',		
			'rangedspell3': 'Ranged Spell 3',	
			'rangedspell2attack2': 'Ranged Spell 2 Attack',	
			'recall': 'Recall',
			'recallloop': 'Recall Loop',
			'recall_idle': 'Recall Idle',
			'channel': 'Channel Spell',
			'channel_wndup': 'Channel Windup',
			'crit': 'Critical Attack',
			'dance': 'Dance',
			'dash1' : 'Dash',								
			'death': 'Death',
			'idle1': 'Idle 1',
			'idle2': 'Idle 2',
			'idle3': 'Idle 3',
			'idle4': 'Idle 4',
			'idle5': 'Idle 5',
			'idle6': 'Idle 6',
			'idle7': 'Idle 7',
			'idle1_raw': 'Idle 1',
			'idle2_raw': 'Idle 2',
			'idle3_raw': 'Idle 3',
			'idle4_raw': 'Idle 4',
			'rangedidle1': 'Ranged Idle 1',
			'rangedidle2': 'Ranged Idle 2',
			'rangedidle3': 'Ranged Idle 3',								
			'laugh': 'Laugh',
			'run_fast' : 'Run Fast',
			'run': 'Run',
			'run1': 'Run 1',
			'run2': 'Run 2',
			'run3': 'Run 3',
			'run4': 'Run 4',
			'run5': 'Run 5',
			'spell1_long' : 'Spell 1 Long',
			'spell1': 'Spell 1',
			'spell2': 'Spell 2',
			'spell3': 'Spell 3',
			'spell3b': 'Spell 3B',
			'spell4': 'Spell 4',
			'spell5': 'Spell 5',
			'spell6': 'Spell 6',
			'spell2_idle' : 'Spell 2 Idle',
			'spell2_run' : 'Spell 2 Run',
			'taunt': 'Taunt',
			'joke' : 'Joke',
			'recall_winddown' : 'Recall Wind-down',
			
			
			//Tryndamere:
			'buffbones' : 'Buff Bones',
			'tryndamere_dreadknight_attack1' : 'Dreadknight Attack 1',
			'tryndamere_dreadknight_attack2' : 'Dreadknight Attack 2',
			'tryndamere_dreadknight_crit' : 'Dreadknight Crit',
			
			//Kha'Zix:
			'hide_wings' : 'Hide Wings',
			'hide_spikes' : 'Hide Spikes',
			'hide_claws' : 'Hide Claws',
			'evo2e' : 'Evolve Wings',
			'evo2q' : 'Evolve Claws',
			'evo2w' : 'Evolve Spikes',
			'evo2r' : 'Evolve Void Assault',
			'attack1_passive' : 'Attack 1 Passive',								
			'stunned' : 'Stunned',
			'knockup' : 'Knockup',
			'run_in_brush' : 'Run in Brush',
			'spell1_evo' : 'Spell 1 Evolution',
			'spell2_evo' : 'Spell 2 Evolution',
			'spell3_evo' : 'Spell 3 Evolution',
			'run_haste' : 'Run Haste',
			'run_fly' : 'Run Fly',
			'run_fast_fly' : 'Run Fast Fly',
			'run_haste_fly' : 'Run Haste Fly',
			'spell3_evo_landing' : 'Spell 3 Evolution Landing',
			'spell3_evo_standup' : 'Spell 3 Evolution Standup',
			'spell3_landing' : 'Spell 3 Landing',
			'spell3_standup' : 'Spell 3 Standup'								
		};
		//禁止在boxcontent上滚动。
		$('.boxcontent').mouseenter(function(){
			disable_scroll();			
		});
		$('.boxcontent').mouseleave(function(){
			enable_scroll();		
		});
		//更新动画列表
		var updateAnimations = function() {
			var viewer = $('#viewer')[0];
			var anims = $('#anims');
			if (viewer.isLoaded && viewer.isLoaded()) {
				var numAnims = viewer.getNumAnimations();
				anims.empty();
				for (var i = 0; i < numAnims; ++i) {
					var a = viewer.getAnimation(i);
					if (a)
						anims.append($('<option/>', { value: a, text: stance_keys_to_label[a] || a }));
				}
			}
			else
				setTimeout(updateAnimations, 100);
		};											
		updateAnimations();

		//改变动画选项
		$('#anims').change(function() {
			var anim = $('#anims').val();

			$('#viewer')[0].setAnimation(anim);
		});
		
		//js初始化模型，使开始就让动画效果生效。
		(function(){
			var flashVars = {
				model: model,
				modelType: 0,
				viewerType: 3,
				contentPath: 'http://lkstatic.zamimg.com/shared/mv/'
				};

			var params = {
				quality: 'high',
				allowscriptaccess: 'always',
				allowfullscreen: true,
				menu: false,
				wmode: 'direct'
				};

			var attributes = {};	
			swfobject.embedSWF('http://lkstatic.zamimg.com/shared/mv/ZAMviewerfp11-8.swf?1415668471', 'viewer', '100%', '500', "11.2.0", 'http://lkstatic.zamimg.com/shared/mv/expressInstall.swf', flashVars, params, attributes);		
		})();
		
		
		//改变皮肤列表选项
		$('[name="skin"]').change(function(){
			var skin_name = new Array(); //皮肤key与name对应数组。
			var skin=$("select[name='skin']").val();
			$.each(championJson.data,function(i,item){
				$.each(item.skins,function(index,block){
					skin_name[index]=block.name;	
				});
			});
			
			$(".model-content .panel-title").first().text(skin_name[skin]);
			$("select[name='stance'] > option").eq(0).attr("selected","selected");	
			var flashVars = {
				model: model,
				modelType: skin,
				viewerType: 3,
				contentPath: 'http://lkstatic.zamimg.com/shared/mv/'
				};

			var params = {
				quality: 'high',
				allowscriptaccess: 'always',
				allowfullscreen: true,
				menu: false,
				wmode: 'direct'
				};

			var attributes = {};	
			swfobject.embedSWF('http://lkstatic.zamimg.com/shared/mv/ZAMviewerfp11-8.swf?1415668471', 'viewer', '100%', '500', "11.2.0", 'http://lkstatic.zamimg.com/shared/mv/expressInstall.swf', flashVars, params, attributes);		
		});
		
		//点击皮肤改变模型状态
		$(".skins").find("li").each(function(){
			$(this).click(function(){
				var skin= $(this).index();
				$("select[name='skin'] > option").eq(skin).attr("selected","selected");
				$("select[name='stance'] > option").eq(0).attr("selected","selected");
				
				var skinName=$(this).find("img").data("skinname");
				$(".model-content").find("h3").text(skinName);
				// console.log(skin_name[skin]);
				var flashVars = {
					model: model,
					modelType: skin,
					viewerType: 3,
					contentPath: 'http://lkstatic.zamimg.com/shared/mv/'
					};

				var params = {
					quality: 'high',
					allowscriptaccess: 'always',
					allowfullscreen: true,
					menu: false,
					wmode: 'direct'
					};

				var attributes = {};	
				swfobject.embedSWF('http://lkstatic.zamimg.com/shared/mv/ZAMviewerfp11-8.swf?1415668471', 'viewer', '100%', '500', "11.2.0", 'http://lkstatic.zamimg.com/shared/mv/expressInstall.swf', flashVars, params, attributes);	
			});
		});	
	})();	
	

});