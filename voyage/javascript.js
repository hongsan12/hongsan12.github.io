
    $(document).ready(function(){

// .btnMenu 버튼 클릭시 실행 될 모션
$(".btnMenu").on("click",function(){
    $(this).fadeOut();
    $("section").addClass("on");
    $("nav").addClass("on");
    $('article').css('width','95%')
});

//닫기버튼
$(".btnclose").on("click",function(){		
        $('.btnMenu').fadeIn();
		$("section").removeClass("on");
		$("nav").removeClass("on");
        $("section>div").removeClass("on");	
        
        $('article').css('width','100%')
	});
// nav 영역안의 메뉴 선택시 실행 될 모션
$("nav li").on("click",function(){
    $("p").removeClass();    
    $(".btnMenu").fadeIn();
    $("section>article").css('z-index','0');
    $("section").removeClass("on");
    $("nav").removeClass("on");	
    var i = $(this).index();	
    $('article').css('width','100%')
    $("section>article").removeClass("on");
    $("section>article").eq(i).children().addClass("on");    
    $("section>article").eq(i).addClass("on");
    $("section>article").eq(i).css('z-index','100');
    console.log(i)
    var imgNum = 2;
    if(i === 4){
        $('.btnMenu span').css('background','black');        
    }else{
        $('.btnMenu span').css('background','#ffffff');
    }


    // 이미지 슬라이드
    if(i == 3 ){
     setInterval(function(){    
    console.log(imgNum)
    
    $('.imgs').attr("src","./iamges/rocky/0"+imgNum+".jpg");   
    $('.imgs').animate({opacity:"0.5"},300);
    $('.imgs').animate({opacity:"1"},500);
  
    imgNum++
    if(imgNum == 5 ){
     imgNum = 1;
        } 

},4000);}
    

});		
//메뉴 슬라이드
    $('.MainMenu').mouseover(function(){
        $(this).children('.SubMenu').stop().slideDown();
    });
    $('.MainMenu').mouseout(function(){
        $(this).children('.SubMenu').stop().slideUp();
    });



//달력

setInterval(function(){
    var date = Date()
$('.time').text(date)
},1000)

 })   
   
