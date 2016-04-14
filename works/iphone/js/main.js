
$(document).ready(function() {
	var svg1= document.getElementById("svg1");
	var svg2= document.getElementById("svg2");
	var svg3= document.getElementById("svg3");
			
	$('#fullpage').fullpage({
		afterLoad: function(anchorLink, index){
			
			if(index == 1){
				// $('.ele-player, .ele-note, .ele-title1, .ele-girl1, .ele-bush, .ele-butterfly1, .ele-butterfly2, .ele-flower').addClass('active');
				$("#section0").find(".ele").addClass("active");
				$("#section0").siblings().not("#section0").find(".ele").removeClass("active");
				$("svg").addClass("active");
				svg1.setAttribute("class", "active");
				svg2.setAttribute("class", "negactive");
				svg3.setAttribute("class", "negactive");
				
			}

			if(index == 2){
				$("#section1").find(".ele").addClass("active");
				$("#section1").siblings().not("#section1").find(".ele").removeClass("active");
				svg2.setAttribute("class", "active");
				svg1.setAttribute("class", "negactive");
				svg3.setAttribute("class", "negactive");
			}
			
			if(index == 3){
				$("#section2").find(".ele").addClass("active");
				$("#section2").siblings().not("#section2").find(".ele").removeClass("active");
				svg3.setAttribute("class", "active");
				
				svg2.setAttribute("class", "negactive");
				svg1.setAttribute("class", "negactive");
			}
		}
	});

});
	
