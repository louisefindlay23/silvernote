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