//获取王者组的summoner信息，共200条
$(function(){
	//获取challenger json对象，闭包。
	(function(){
		var challengerInfo;
		$.getJSON("https://kr.api.pvp.net/api/lol/kr/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=a0c8df35-195e-4a98-b22b-e04938bf711d",function(result){
			
			challengerInfo=result;
		});
		//返回json对象
		getSummonerChallenger=function(){
			return challengerInfo;
		};
		
	})();
	
	
	//获取master json对象，闭包。
	(function(){
		var masterInfo;
		$.getJSON("https://kr.api.pvp.net/api/lol/kr/v2.5/league/master?type=RANKED_SOLO_5x5&api_key=a0c8df35-195e-4a98-b22b-e04938bf711d",function(result){
			
			masterInfo=result;
		});
		//返回json对象
		getSummonerMaster=function(){
			return masterInfo;
		};
	})();
	
	setTimeout(function(){
		console.log("检查段位????："+getSummonerChallenger().tier);
		
	},2200);
	
	
	
	//延迟1500毫秒执行，获取json对象需要时间。
	setTimeout(function(){
		//查看下获取的json对象对不对。
		$("#getSummonerChallengerInfo").click(function(){
			// $.each(getSummonerChallenger().entries,function(i,item){
				// console.log(item.playerOrTeamId+"=="+item.playerOrTeamName);
			// });
			console.log("检查段位："+getSummonerChallenger().tier)
		});
	
		$("#sendSummonerChallengerInfo").click(function(){
			var challengerJson=getSummonerChallenger();
			console.log("发送数据段位："+challengerJson.tier);
			//stringify()将json对象转换为字符，并发送。
			$.post('php/summoner.add.php',{'cjson':JSON.stringify(challengerJson)},function(meg){
				console.log("POST发送"+challengerJson.tier+"数据成功！")
				console.log(meg);
			});	
		});
		
		//查看下获取的json对象对不对。
		$("#getSummonerMasterInfo").click(function(){
			// $.each(getSummonerMaster().entries,function(i,item){
				// console.log(item.playerOrTeamId+"=="+item.playerOrTeamName);
			// });
			console.log("检查段位："+getSummonerMaster().tier)
		});
	
		$("#sendSummonerMasterInfo").click(function(){
			var masterJson=getSummonerMaster();
			console.log("发送数据段位："+masterJson.tier);
			//stringify()将json对象转换为字符，并发送。
			$.post('php/summoner.add.php',{'mjson':JSON.stringify(masterJson)},function(meg){
				console.log("POST发送"+masterJson.tier+"数据成功！")
				console.log(meg);
			});	
		});
	
	},1500);
	
	
	

	//时间
	//获取当前时间戳，毫秒。
	var nowDate =new Date().getTime();
	console.log("现在："+nowDate);
	var oneDay=24*60*60*1000;
	//昨天，上周，上个月。
	var lastDay=nowDate-oneDay;
	var lastWeek=nowDate-oneDay*7;
	var lastMonth=nowDate-oneDay*30;
	
	console.log("前一天："+lastDay);
	console.log("上一周："+lastWeek);
	console.log("上个月："+lastMonth);

	

	//同步的方式从数据中获得summonerId数据
	$("#getSummonerId").click(function(){
		// 保存获得来的数据
		var summonerIdArray=[];
		$.ajax({
			type: 'POST',
			dataType:'json',
			url: 'php/summoner.get.php',
			async:false,
			beforeSend:function(){},
			success: function(result){
				$.each(result,function(i,item){	
					summonerIdArray[i]=result[i];	
				 });
			},
			complete:function(){},
			error: function(){
				console.log("错误");
			},
		});
	//闭包返回summonerIdArray数据
		getSummonerIdArray=function(){
			return summonerIdArray;	
		};
	
	});

	$("#getMatchId").click(function(){
		
			
			
		//王者和大师	
		var summonerIdInfo=getSummonerIdArray();
		//保存获得matchId和timestamp数据。
		var match=[];
			

		//获取王者200为一个月前的每个人的比赛，并把比赛id等信息，放到match[]数组中。
		//这是递归函数，并每一秒执行ajax请求。（因为setTimeout()是非阻塞函数，不能用遍历的方式）
		(function loopAjax (i) {          
		   setTimeout(function () {   
				console.log('循环次数：'+(201-i));
				// 
				$.ajax({
					type: "GET",
					dataType:"json",
					url: "https://kr.api.pvp.net/api/lol/kr/v2.2/matchlist/by-summoner/"+summonerIdInfo[i] +"?rankedQueues=RANKED_SOLO_5x5&seasons=PRESEASON2016&beginTime="+lastMonth+"&endTime="+nowDate+"&api_key=a0c8df35-195e-4a98-b22b-e04938bf711d",
					async:false,
					// timeout:3000,
					beforeSend:function(){},
					success:function(result){															
						//如果totalGames不为0才进行数据获取。
						if(!(result.totalGames==0)){
							console.log("总共比赛："+result.totalGames);
							console.log(summonerIdInfo[i]+"--第一次比赛id："+result.matches[0].matchId);
							$.each(result.matches,function(index,item){	
								//把数据添加到match数组中。
								match.push({matchId:item.matchId,timestamp:item.timestamp});
							});							
						}else{
							console.log("总共比赛："+result.totalGames);
							console.log(summonerIdInfo[i]+"--没有比赛");
						}	
					},
					complete:function(){},
					error:function(){
						console.log("ajax错误");	
					},
				});													

				if (--i) loopAjax(i);      
		   }, 1000)  
		})(200),   		
		
		
		getMatch=function(){
			return match;
			
		};
		
	});


	$("#check").click(function(){
		var zz=getMatch();
		console.log("总共数据："+zz.length);
		// $.each(zz,function(i,item){
			// console.log(item.matchId+"=="+item.timestamp);		
		// });
		
		
	});

	
     //获得特色游戏数据并发送数据到summoner.add.php中
	$("#featured-game").click(function(){
		var featuredGame;
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "https://kr.api.pvp.net/observer-mode/rest/featured?api_key=a0c8df35-195e-4a98-b22b-e04938bf711d",
			async: false,
			beforeSend:function(){},
			success:function(result){
				
				featuredGame=result;
			},
			complete:function(){
				
				$.post('php/summoner.add.php',{'fgjson':JSON.stringify(featuredGame)},function(meg){
					
					console.log("POST发送"+featuredGame.gameList[4].gameId+"数据成功！");
					console.log(meg);
					
				});
				
			},
			error:function(){
				console.log("获得特色游戏出错")
			},
		});
		
		
		
		
	});








	 

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	







	
	
	
	
	
});










