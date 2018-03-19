// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$("#site-id").click(function(){
		
		$("#about").animate({left:'100%'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
		$("#site-id").fadeOut();
		
	});
	
	$("#hm").click(function(){
		
		$("#about").animate({left:'100%'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
		$("#site-id").fadeOut();
		
	});
	
	$("#ab").click(function(){
		
		$("#about").animate({left:'0'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#menu").click(function(){
		
		$(this).toggleClass("change");
		
		$(".overlay").toggleClass("over");
		
	});
	
	$("#start").click(function(){
		
		$("#about").animate({left:'0'});
		
		$("#site-id").fadeIn();
		
	});
	
	$("#art").click(function(){
		
		$("#artists").animate({top:"0"});
		
		$("#about").animate({left:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
	});
	
	$("#ev").click(function(){
		
		$("#event").animate({right:"0"});
		
		$("#artists").animate({top:"100%"});
		
		$("#about").animate({left:"100%"});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#down").click(function(){
		
		$("#artists").animate({top:"0"});
		
	});
	
	$("#left").click(function(){
		
		$("#event").animate({right:"0"});
		
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

