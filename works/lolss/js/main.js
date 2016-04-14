$(function(){
	//champion.json数据获取并拼接.champ-list的内容。
	(function(){
		var championListData;
		$.ajax({
			type: "GET",
			dataType:"json",
			url:"json/champion.json",
			async: false,
			beforeSend:function(){},
			success:function(result){
				
				//闭包返回championListData数据。
				championListData=result;
				getChampionListData=function(){
					return championListData;
				};
				
				//拼接.champion-list内容
				var content="";
				$.each(result.data,function(i,item){
				// console.log(i+"--"+item.name+"=="+item.id);
				// console.log(item.name+"--"+item.tags[0]+"--"+item.tags[1]+"--"+item.tags[2]+"--"+item.partype);
				content+="<a href='champion.html?name="+item.id+
							"' class='champion-wrap' data-ch-id='"+item.id+
						"'><div class='champion-img' style='background:url(../loldata/img/"+item.image.sprite+") "+
						(-item.image.x)+"px "+(-item.image.y)+"px no-repeat;'></div><p class='champion-name'>"+
						item.name+"</p></a>"
				});
				$(".champion-list").empty();
				$(".champion-list").append(content);	
			
				//重置按钮
				$(".champion-reset").click(function(e){
					e.preventDefault();
					$(".champion-list").empty();
					$(".champion-list").append(content);
				});
			},
			
complete: function(){
			//在complete中添加其他部分,以保障champion.json数据获取成功,这样设计真够垃圾的,应该用延迟对象,先这样做吧.
			//获得champion对应idNameArray 的映射数组
	(function(){
		var idNameArray=[];
		var result=getChampionListData();
		$.each(result.data,function(i,item){
			idNameArray[item.key]=i;
		});
		//闭包获取
		getIdNameArray=function(){
			return idNameArray;	
		}
	})();

	
	
	
	//从数据库获得featuredgame数据
	(function(){
		// 获得champion.js数据
		var championListData=getChampionListData();
		var zp=championListData.data
		//存储拼接html
		$.ajax({
			type:"GET",
			dataType:"json",
			url:"php/featuredgame.php",
			async:false,
			beforeSend:function(){},
			success:function(result){
				var content="";
				$.each(result,function(i,item){
					if(i<=3){
				var playerName=JSON.parse(item.summonerName);
				
content+="<div class='col-lg-3 col-md-6 col-sm-6 col'>"+
		"<div class='content'>"+
		"<div class='content-top clearfix'>"+
		  "<span class='pull-left'>"+item.gameMode+" | "+item.gameType+" | "+parseInt(parseInt(item.gameLength)/60)+":"+parseInt(item.gameLength)%60+"</span>"+
		  "<a class='btn btn-primary btn-sm pull-right' href='#'>观看</a>"+
		"</div>"+
		"<div class='content-middle clearfix'>"+
		  "<ul class='list-unstyled pull-left players'>"+
		    "<li class='blue-head'>蓝色</li>";
			  $.each(JSON.parse(item.participants),function(index,players){
				  //根据championId获得英雄名。
				  var cName=getIdNameArray()[players.championId];
					if(index<=4){
						
content+=   "<li class='item clearfix'>"+
			  "<div class='championImg pull-left'>"+	
			    "<a href='champion.html?name="+cName+"' data-championName='"+cName+"' class='fg-image'></a>"+
				"<img class='spell1Id' src='img/"+players.spell1Id+".png'></img>"+
			  "<img class='spell2Id' src='img/"+players.spell2Id+".png'></img>"+
			  "</div>"+
			  "<div class='summonerName pull-right'>"+
				"<a href='summoner.html?name="+playerName[index]+"' data-summonerName='"+playerName[index]+"'>"+playerName[index]+"</a>"+
			  "</div>"+
		    "</li>";
					}
			  });
			  //获得ban位championname
			 if(JSON.parse(item.bannedChampions).length==6){
				 var ban0=getIdNameArray()[JSON.parse(item.bannedChampions)[0].championId];
				 var ban1=getIdNameArray()[JSON.parse(item.bannedChampions)[1].championId];
				 var ban2=getIdNameArray()[JSON.parse(item.bannedChampions)[2].championId];
				 var ban3=getIdNameArray()[JSON.parse(item.bannedChampions)[3].championId];
				 var ban4=getIdNameArray()[JSON.parse(item.bannedChampions)[4].championId];
				 var ban5=getIdNameArray()[JSON.parse(item.bannedChampions)[5].championId];	
			 }else{
				var ban0="";
				var ban1="";
				var ban2="";
				var ban3="";
				var ban4="";
				var ban5="";
			 }
content+=   "<li class='item-foot'>"+
			  "<span>BAN:</span>"+
			  "<a href='/champion/"+ban0+"' class='"+ban0+" fg-image' data-championname='"+ban0+"'></a>"+
			  "<a href='/champion/"+ban1+"' class='"+ban1+" fg-image' data-championname='"+ban1+"'></a>"+
			  "<a href='/champion/"+ban2+"' class='"+ban2+" fg-image' data-championname='"+ban2+"'></a>"+
			"</li>"+
          "</ul>"+
		  "<ul class='list-unstyled pull-right players'>"+
		    "<li class='purple-head'>紫队</li>";
			$.each(JSON.parse(item.participants),function(index,players){
				  //根据championId获得英雄名。
				  var cName=getIdNameArray()[players.championId];
					if(index>4&&index<=9){
content+=   "<li class='item clearfix'>"+
			  "<div class='championImg pull-left'>"+	
			    "<a href='champion.html?name="+cName+"' data-championName='"+cName+"'class='fg-image'></a>"+
			    "<img class='spell1Id' src='img/"+players.spell1Id+".png'></img>"+
				"<img class='spell2Id' src='img/"+players.spell2Id+".png'></img>"+
			  "</div>"+
			  "<div class='summonerName pull-right'>"+
				"<a href='summoner.html?name="+playerName[index]+"' data-summonerName='"+playerName[index]+"'>"+playerName[index]+"</a>"+
			  "</div>"+
		    "</li>";	
					}
			}); 
			 					
content+=   "<li class='item-foot'>"+
			  "<span>BAN:</span>"+
			  "<a href='/champion/"+ban3+"' class='"+ban3+" fg-image' data-championname='"+ban3+"'></a>"+
			  "<a href='/champion/"+ban4+"' class='"+ban4+" fg-image' data-championname='"+ban4+"'></a>"+
			  "<a href='/champion/"+ban5+"' class='"+ban5+" fg-image' data-championname='"+ban5+"'></a>"+
			"</li>"+
		  "</ul></div></div></div>";
					}
				});
				
				
				$(".featuredList").empty();
				$(".featuredList").append(content);
			},
			complete:function(){
				
				
			},
			error:function(){
				console.log("获得featuregame.php失败");				
			}
		});
	})();

	//职业条件选择，只实现了一个条件的选择。
	$(".profession").children("a").each(function(){
		// 获得champion.js数据
		var result=getChampionListData();
		$(this).click(function(e){
			e.preventDefault();
			$(this).toggleClass("selected");
			// 判断是否有selected类
			if($(this).is(".selected")){
				var v =$(this).data("pro");
				$(this).siblings().removeClass("selected");
				var content1="";
				$.each(result.data,function(i,item){
					 if(v==item.tags[0]||v==item.tags[1]){
					content1+="<a href='/champion/"+item.id+"' class='champion-wrap' data-ch-id='"+item.id+
							"'><div class='champion-img' style='background:url(../loldata/img/"+item.image.sprite+") "+
							(-item.image.x)+"px "+(-item.image.y)+"px no-repeat;'></div><p class='champion-name'>"+
							item.name+"</p></a>"
					}	
				});
					$(".champion-list").empty();
					$(".champion-list").append(content1);	
			}else{
				$(".champion-list").empty();
				$(".champion-list").append(content);
			}
		});
	});
		
//真你妈的坑，早知道先该计划 处理数据，在非要写个循环处理featuregame champion图片显示
	(function(){
		var championListData=getChampionListData();
		$.each(championListData.data,function(i,item){
			var cname=item.id;
			$(".fg-image").each(function(){
				if($(this).data('championname')==cname){
					var u="url(../loldata/img/"+item.image.sprite+") "+(-item.image.x)+"px "+(-item.image.y)+"px no-repeat"
				$(this).css("background",u)			
				}
			});
		});
	})();	




	
			},
			error:function(){
				console.log("获取champion.jso数据失败");
			}
		});
	})();


	
});

