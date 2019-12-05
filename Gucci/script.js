

$(document).ready(function(){


	const img = document.getElementById('sibar').children;
const popup = document.getElementsByClassName('popup');
var btn = document.querySelectorAll('.menu_btn') 

for(let i=0;i < img.length ; i++){
img[i].addEventListener('click',function(e){
  e.preventDefault()
 popup[i-1].style.display = 'flex';

 console.log(1 )
 btn[i-1].addEventListener('click',function(){
  popup[i-1].style.display = 'none';
  console.log(123)
 })
})

}
	
    $(".card-con").animate({top:'10%'},1000,"easeOutBounce");
    $(".card-content").animate({marginBottom:'-600%'},1500,"easeOutBounce");
    $(".card-content img").animate({opacity:'1'},1000,"easeOutBounce");
    $(".tree").animate({width:'400%',transition:'3s'});	

	
	var idx=0;

	// 첫번째 섹션 휠 스크립트
	$("article").on("mousewheel",function(event,delta){    
		
		console.log(idx)
		//마우스 휠을 올렸을때	
		if(idx==0){
			if (delta > 0) {  
			
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
				var prev = $(this).prev().offset().top;
				//문서 전체를 prev에 저장된 위치로 이동
				$("html,body").stop().animate({"scrollTop":prev},1000);
				
		//마우스 휠을 내렸을때	 
			}else if (delta < 0) { 
			
			//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
				var next = $(this).next().offset().top;
				//문서 전체를 next에 저장된 위치로 이동				
				$("html,body").stop().animate({"scrollTop":next},1000);                                         
			}
		}
		});	
			
	
	
	

	
	// 마우스 따라다니기
	$(document).on("mousemove",function(e){  		
		var ax = -($(window).innerWidth()/2- e.pageX)/20;
		var ay = ($(window).innerHeight()/2- e.pageY)/22;
	  
	  $(".card").attr("style", "transform: rotateY("+ax/4+"deg) rotateX("+ay/4+"deg);");
	  $(".divis2").attr("style", "transform: rotateY("+ax/4+"deg) rotateX("+ay/4+"deg);");
	  $(".divis2 div").eq(1).attr("style", "transform: rotateY("+ax/1.1*-1+"deg) rotateX("+ay/4+"deg);");
	  $(".divis2 div").eq(2).attr("style", "transform: rotateY("+ax/2*-1+"deg) rotateX("+ay/4+"deg);");
	});


   //메뉴 버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
	
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop()+10;		
		
		//  드랍
			if($(window).scrollTop() > $('article').eq(0).offset().top/2 ){
				$('.text').stop().animate({top:'0px'},1000);					 
				$('.conte').css('color','black');				
				$('.conte2').stop().animate({width:'100%'},1000); 
				
				
				

			} else{
				$('.conte2').stop().animate({width:'0%'},1000);
				$('.text').stop().animate({top:'-1000px'},1000);
				 
			}
		
		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll<= ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			};
		}
	
	});
	
		
	 
});
