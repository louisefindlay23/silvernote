// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$("#hm").click(function(){
		
		$("#home").animate({left:'0'});
		
		$("#about").animate({left:'0'});
		
		$("#artists").animate({top:"100%"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#ab").click(function(){
		
		$("#about").animate({left:'-50%'});
		
		$("#home").animate({left:'0'});
		
		$("#artists").animate({top:"100%"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#menu").click(function(){
		
		$(this).toggleClass("change");
		
		$(".overlay").toggleClass("over");
		
	});
	
	$("#start").click(function(){
		
		$("#about").animate({left:'-50%'});
		
	});
	
	$("#art").click(function(){
		
		$("#artists").animate({top:"0"});
		
		$("#home").animate({left:'0'});
		
		$("#about").animate({left:"0"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
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

// TABS - About

