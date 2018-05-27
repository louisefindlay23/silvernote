$(document).ready(function(){
	$(".loader").delay(1000).fadeOut("200");
	$("#load").delay(1500).fadeOut("400");
});

function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

TweenMax.set('svg', {
  visibility: 'visible'
});// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$(".small-logo").hide();
	
	$(".dropdownmenu").hide();
	
	$("#hm").click(function(){
		
		$("#home").show();
		
		$("#about").animate({left:'100%'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change crosspadding");
		
		$(".overlay").removeClass("over");
		
		$(".small-logo img").hide();
		
	});
	
	$(".small-logo img").click(function(){
		
		$("#home").show();
		
		$("#about").animate({left:'100%'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
		$(".small-logo img").hide();
		
	});
	
	$("#ab").click(function(){
		
		$("#about").show();
		
		$("#about").animate({left:'0'});
		
		$("#artists").animate({top:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change");
		
		$(".overlay").removeClass("over");
		
		$(".small-logo img").show();
		
	});
	
		$(".menu").click(function(){
			
			$(this).toggleClass("change");
		
			$(".overlay").toggleClass("over");
			
			$(this).toggleClass("crosspadding");
			
		});
	
	$("#start").click(function(){
		$("#about").show();
		$("#about").animate({left:'0'});
		$(".small-logo").show();
		$(".small-logo img").show();
		$(".menu").show();
		
		$("#site-id").fadeIn();
		
	});
	
	$("#art").click(function(){
		
		$("#artists").show();
		
		$("#artists").animate({top:"0"});
		
		$("#about").animate({left:"100%"});
		
		$("#event").animate({right:"100%"});
		
		$(".menu").removeClass("change crosspadding");
		
		$(".overlay").removeClass("over");
	});
	
	$("#ev").click(function(){
		
		$("#event").show();
		
		$("#event").animate({right:"0"});
		
		$("#artists").animate({top:"100%"});
		
		$("#about").animate({left:"100%"});
		
		$(".menu").removeClass("change crosspadding");
		
		$(".overlay").removeClass("over");
		
	});
	
	$("#down").click(function(){
		
		$("#artists").show();
		
		$("#artists").animate({top:"0"});
		
	});
	
	$("#left").click(function(){
		
		$("#event").show();
		
		$("#event").animate({right:"0"});
		
	});
	
	// M O B I L E

$("#mobaboutarrow").click(function(){
		
		$("#about").hide();
		
		$("#artists").show();
	
		$(".small-logo").show();
	
		$(".tab").hide();
	
		$(".menu").show();
	
		$("#event").animate({right:"0"});
	
		$(".small-logo img").off('click');
	
			$(".small-logo img").click(function(){

				$("#artists").hide();

				$("#event").hide();

				$("#about").show();

				$(".menu").removeClass("change crosspadding");

				$(".overlay").removeClass("over");

		});
	
	});
	
$(".left-col h4").click(function(){
		
		$(".dropdownmenu").toggle();
	
		$(".left-col img, .right-col, .arrow").toggle();
	
		$("#left").hide();
	
		$("#Artist1, #Artist2, #Artist3, #Artist4, #Artist5, #Artist6").toggleClass("artistpadding");
		
	});
	
$(".dropdownmenu p").click(function(){
		
		$("#Artist1, #Artist2, #Artist3, #Artist4, #Artist5, #Artist6").removeClass("artistpadding");
		$(".left-col img, .right-col, .arrow").toggle();
		$("#left").hide();
		
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
	
$(".hm-mobile").click(function(){
	
		$("#artists").hide();
		
		$("#event").hide();
	
		$("#about").show();
	
		$(".menu").removeClass("change crosspadding");
		
		$(".overlay").removeClass("over");
	
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

// L O A D E R

