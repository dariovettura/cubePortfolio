// JavaScript Document
import $ from "jquery"

export const main = () => {

 $(document).ready(() => {
    $('.slaider').slick({
        
        arrows:false,
        dots: false,
       autoplay:true,
		slidesToShow: 1,
       autoplaySpeed:1000,
  slidesToScroll: 1,
      pauseOnHover:false,
      pauseOnFocus:false,
      
	
    });
});
$(".video1").click(function(){
    var iframe = $("#beergarde");
    iframe.attr("src",iframe.data("src")); 
});
	$(".video2").click(function(){
    var iframe = $("#drinkis");
    iframe.attr("src",iframe.data("src")); 
});
	$(".video3").click(function(){
    var iframe = $("#dopote");
    iframe.attr("src",iframe.data("src")); 
})}