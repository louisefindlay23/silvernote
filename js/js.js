// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$("#hm").click(function(){
		
		$("#home").animate({left:'0'});
		
		$("#about").animate({left:'0'});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#ab").click(function(){
		
		$("#about").animate({left:'-50%'});
		
		$("#home").animate({left:'0'});
		
		$("#menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#menu").click(function(){
		
		$(this).toggleClass("change");
		
		$(".overlay").toggleClass("over");
		
	});
	
	$(".startp").click(function(){
		
		$("#about").animate({left:'-50%'});
		
	});
	
});