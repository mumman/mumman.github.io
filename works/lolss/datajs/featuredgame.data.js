$(function(){
	$("#featuredgame").click(function(){	
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
				
				$.post('php/featuredgame.add.php',{'fgjson':JSON.stringify(featuredGame)},function(meg){
					
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