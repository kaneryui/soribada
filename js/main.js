$(document).ready(function(){
    
    /*검색 슬라이드*/
    var height =  $(".search_langking").height();
	var num = $(".langking_list li").length;
	var max = height * num;
	var move = 0;
	function noticeRolling(){
		move += height;
		$(".langking_list").animate({"top":-move},600,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,2000);
    
    /*lnb*/
    $(".gnb li").hover(function() {

        $(this).children("ul").stop().slideToggle(500)

      });
    
    /*앨범 슬라이드*/
    $(".h_album01").slick({
        dots: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });
})