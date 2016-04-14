$(function(){
	$("#rank").click(function(){	
	var summonerIdName={};
	$.when(
		$.ajax({
			type:"GET",
			dataType:"json",
			async:false,
			url:"https://kr.api.pvp.net/api/lol/kr/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=a0c8df35-195e-4a98-b22b-e04938bf711d",
			beforeSend:function(){},
			success:function(result){
				$.each(result.entries,function(i,item){
					summonerIdName[item.playerOrTeamId]=item.playerOrTeamName;
				});
				$.post('php/rank.data.php',{'cjson':JSON.stringify(result)},function(meg){
					console.log("向rank.data.php发送:"+result.tier+"数据,并返回信息:"+meg);
				});		
			},
			complete:function(){},
			error:function(){
				console.log("获取challenger官方数据失败");
			}
		}),
		
		$.ajax({
			type:"GET",
			dataType:"json",
			async:false,
			url:"https://kr.api.pvp.net/api/lol/kr/v2.5/league/master?type=RANKED_SOLO_5x5&api_key=a0c8df35-195e-4a98-b22b-e04938bf711d",
			beforeSend:function(){},
			success:function(result){
				$.each(result.entries,function(i,item){
					summonerIdName[item.playerOrTeamId]=item.playerOrTeamName;
				});
				$.post('php/rank.data.php',{'mjson':JSON.stringify(result)},function(meg){
					console.log("向rank.data.php发送"+result.tier+"数据,并返回信息:"+meg);
				});
			},
			complete:function(){},
			error:function(){
				console.log("获取master官方数据失败");
			}
		})
		
	)
	.done(
		//这里获取最近比赛选项,不做了,用随机数代替.
	
	
	)
	.fail();
	
	
	

	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});