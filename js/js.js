// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$(".small-logo").hide();
	
	$(".dropdownmenu").hide();
	
	$("#hm").click(function(){
		
		$("#about").animate({left:'100%'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$(".small-logo img").click(function(){
		
		$("#about").animate({left:'100%'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#ab").click(function(){
		
		$("#about").animate({left:'0'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
		$(".desktop.menu").click(function(){
			
			$(this).toggleClass("change");
		
			$(".overlay").toggleClass("over");
			
		});
	
	$(".small-logo .menu").click(function(){
		
		$("nav .menu").addClass("change");
		
		$(".small-logo .menu").hide();
		
		$(".overlay").addClass("over");
		
	});
	
	$(".change").click(function(){
		
		$(".small-logo .menu").show();
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#start").click(function(){
		
		$("#about").animate({left:'0'});
		$(".small-logo").show();
		$(".menu desktop").show();
		
	});
	
	$("#art").click(function(){
		
		$("#artists").animate({top:"0"});
		
		$("#about").animate({left:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change");
		
		$(".overlay").removeClass("over");
	});
	
	$("#ev").click(function(){
		
		$("#event").animate({right:"0"});
		
		$("#artists").animate({top:"100%"});
		
		$("#about").animate({left:"100%"});
		
		$(".menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#down").click(function(){
		
		$("#artists").animate({top:"0"});
		
	});
	
	$("#left").click(function(){
		
		$("#event").animate({right:"0"});
		
	});
	
	// M O B I L E

$("#mobaboutarrow").click(function(){
		
		$("#about").hide();
		
		$("#artists").show();
	
		$(".small-logo").show();
	
		$(".tab").hide();
	
		$(".menu").show();
		
	});
	
$(".small-logo img").click(function(){
		
		$("#about").show();
	
		$(".menu").hide();
		
		$("#artists").hide();
	
		$("#event").hide();
		
	});
	
$(".fa-sort-down").click(function(){
		
		$(".dropdownmenu").toggle();
		
	});
	
$(".katie").click(function(){
		
		$("#Artist1").show();
		$("#Artist2").hide();
		$("#Artist3").hide();
		$("#Artist4").hide();
		$("#Artist5").hide();
		$("#Artist6").hide();
		$(".dropdownmenu").hide();
		
	});
	
$(".shannon").click(function(){
		
		$("#Artist2").show();
		$("#Artist1").hide();
		$("#Artist3").hide();
		$("#Artist4").hide();
		$("#Artist5").hide();
		$("#Artist6").hide();
		$(".dropdownmenu").hide();
		
	});
	
$(".jamie").click(function(){
		
		$("#Artist3").show();
		$("#Artist1").hide();
		$("#Artist2").hide();
		$("#Artist4").hide();
		$("#Artist5").hide();
		$("#Artist6").hide();
		$(".dropdownmenu").hide();
		
	});
	
$(".josh").click(function(){
		
		$("#Artist4").show();
		$("#Artist1").hide();
		$("#Artist2").hide();
		$("#Artist3").hide();
		$("#Artist5").hide();
		$("#Artist6").hide();
		$(".dropdownmenu").hide();
		
	});
	
$(".red").click(function(){
		
		$("#Artist5").show();
		$("#Artist1").hide();
		$("#Artist2").hide();
		$("#Artist3").hide();
		$("#Artist4").hide();
		$("#Artist6").hide();
		$(".dropdownmenu").hide();
		
	});
	
$(".glass").click(function(){
		
		$("#Artist6").show();
		$("#Artist1").hide();
		$("#Artist2").hide();
		$("#Artist3").hide();
		$("#Artist4").hide();
		$("#Artist5").hide();
		$(".dropdownmenu").hide();
		
	});
	
$(".mobartistarrow").click(function(){
		
		$("#artists").hide();
		
		$("#event").show();
		
	});
	
$("#hm").click(function(){
	
		$("#artists").hide();
		
		$("#event").hide();
	
		$("#about").show();
	
	});
	
$("#art").click(function(){
	
		$("#about").hide();
	
		$("#event").hide();
		
		$("#artists").show();
	
		$(".small-logo").show();
	
		$(".menu").show();
	
	});
	
$("#ev").click(function(){
	
		$("#about").hide();
	
		$("#event").show();
		
		$("#artists").hide();
	
		$(".small-logo").show();
	
		$(".menu").show();
	
	});
	
});

// T A B S

function openBand(evt, bandName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(bandName).style.display = "block";
    evt.currentTarget.className += " active";
}
