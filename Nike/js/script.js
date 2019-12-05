$(document).ready(function(){
	var section = $('.zInDex');
	var idx=0;
	var list = $('.maskfack > li > span');	
	// i 번째 리스트를 누르면 i번째 아티클 옵파시티 1 z index 100 
	for(let i=0; i<list.length ; i++){

		list.eq(i).on('click',function(){				
				idx=i
				$('.mask').removeClass('mask');	
				$('.maskfack').animate({opacity:'0'},300);
				$('.maskfack').animate({width:'0%',height:'0%'},300);
				$(section[i]).css('z-index', '100'); 
				$(section[i]).animate({opacity:'1'},1000);
				$('#top').animate({opacity:'1'},2000);
		});
		
		$('#top').on('click',function(){
			$('#mask').addClass('mask');	
			$('.maskfack').animate({opacity:'1'},300);
			$('.maskfack').animate({width:'100%',height:'100%'},300);
			$('#top').animate({opacity:'0'});
			
				$(section[i]).animate({opacity:'0'},1000);
		})
		
	}	

var img = $(section[idx]).children().children().children().children()



$('.bTTn').on('click',function(){	
	
	idx++			
		
	$(section[idx]).animate({opacity:'1'},1000)
	$(section[idx-1]).animate({opacity:'0'},1000)
	$(section[idx]).css('z-index', '100')	
	$(section[idx-1]).css('z-index', '99');		
	
});

//버튼 이동 페이드
$('.bTTn2').on('click',function(){
	
	idx--		
	
	
	$(section[idx]).css('z-index', '100');		
	$(section[idx]).animate({opacity:'1'},1000)
	$(section[idx+1]).css('z-index', '99');		
	$(section[idx+1]).animate({opacity:'0'},1000)
});




});