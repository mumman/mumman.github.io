$(function(){

	var randomChampionId=Math.ceil(Math.random()*128);
	var profileicoX=(-(Math.ceil(Math.random()*10))*36);
	var profileicoY=(-(Math.ceil(Math.random()*15))*36);
	
	function ajaxData(index,size){
		$.ajax({
			type:"POST",
			dataType:"json",
			asycn:false,
			data:{"i":index,"s":size},
			url:"php/rank.php",
			beforeSend:function(){
				$("#table-content").append("<img src='img/loading.gif' class='loading center-block'>")
			},
			success:function(result){
				var content="";
				$.each(result,function(i,item){
				var winrate=((item.wins/(parseInt(item.wins)+parseInt(item.losses)))*100).toFixed(1);
				
				var losswidth=((item.losses/(parseInt(item.wins)+parseInt(item.losses)))*100);
				var winwidth=((item.wins/(parseInt(item.wins)+parseInt(item.losses)))*100);
				
content += "<tr>"+
			"<td class='hcolor1'>"+i+"</td>"+
			"<td>"+												 								
				"<span class='profileicon' style='background:url(../loldata/img/small_profileicon0.png) "+(-(Math.ceil(Math.random()*9))*36)+"px "+(-(Math.ceil(Math.random()*15))*36)+"px no-repeat'></span>"+
				"<a href='#' class='sName hcolor5'>"+item.summoner_name+"</a>"+
			"</td>"+
			"<td>"+item.division+"</td>"+
			"<td>"+
				"<span class='glyphicon glyphicon-grain mark"+item.isHotStreak+"'></span>"+
				"<span class='glyphicon glyphicon-fire mark"+item.isVeteran+"'></span>"+
				"<span class='glyphicon glyphicon-star mark"+item.isFreshBlood+"'></span>"+
			"</td>"+
			"<td class='hcolor3'>"+item.leaguePoints+" LP</td>"+
			"<td>"+(parseInt(item.wins)+parseInt(item.losses))+"</td>"+
			"<td>"+
				"<div class='rate clearfix'>"+
					"<div class='wins' style='width:"+winwidth+"%'>"+
						"<span style='padding-left:5px'>"+item.wins+"</span>"+
					"</div>"+
					"<div class='losses' style='width:"+losswidth+"%'>"+
						"<span class='pull-right' style='padding-right:5px'>"+item.losses+"</span>"+
					"</div>"+
				"</div>"+
				"<span class='hcolor5'>"+winrate+"%</span>"+
			"</td>"+
			"<td>"+
				"<span class='mostChampions' style='background:url(../loldata/img/small_champion.jpg) "+(-(Math.ceil(Math.random()*9))*36)+"px "+(-(Math.ceil(Math.random()*11))*36)+"px no-repeat'></span>"+
				"<span class='mostChampions' style='background:url(../loldata/img/small_champion.jpg) "+(-(Math.ceil(Math.random()*9))*36)+"px "+(-(Math.ceil(Math.random()*11))*36)+"px no-repeat'></span>"+
				"<span class='mostChampions' style='background:url(../loldata/img/small_champion.jpg) "+(-(Math.ceil(Math.random()*9))*36)+"px "+(-(Math.ceil(Math.random()*11))*36)+"px no-repeat'></span>"+
				"<span class='mostChampions' style='background:url(../loldata/img/small_champion.jpg) "+(-(Math.ceil(Math.random()*9))*36)+"px "+(-(Math.ceil(Math.random()*11))*36)+"px no-repeat'></span>"+
				"<span class='mostChampions' style='background:url(../loldata/img/small_champion.jpg) "+(-(Math.ceil(Math.random()*9))*36)+"px "+(-(Math.ceil(Math.random()*11))*36)+"px no-repeat'></span>"+
			"</td>"+
		  "</tr>";
			
				});
				$("#table-content").empty();
				$("#table-content").append(content);
			},
			complete:function(){
				// $(".loading").remove();
			},
			error:function(){}
		});

	};
	ajaxData(0,20);
	//无尽分页.
	var times=1;
	var loadingPage=0;
	function getNextPage(){
		if(loadingPage !=0 ) return;
		loadingPage++;
		var t=times*20
		ajaxData(t,t+20);
		loadingPage--;
		times++;
	};
	function readyForNextPage(){
		var threshold=50;
		var bottomPosition=$(window).scrollTop()+$(window).height();
		var distanceFormBottom= $(document).height()-bottomPosition;
		return distanceFormBottom <= threshold;
	};
	function observeScroll(event){
		if(readyForNextPage())
			getNextPage();
	};
	$(document).scroll(observeScroll);

});

