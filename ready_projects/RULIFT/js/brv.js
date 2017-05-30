function exam(f,arr,e,MSG,cssf){
// f=форма, arr=массив полей для проверки, e="пустая" строка, т.е. реакция как на пустую
// MSG=текст сообщения, cssm=набор свойств в фрмате json для формы
	ok=true;
	for (var key in arr){
		if(document.forms[f][f+'['+arr[key]+']']['value']==e
				|| document.forms[f][f+'['+arr[key]+']']['value']==''
				|| document.forms[f][f+'['+arr[key]+']']['value']==document.forms[f][f+'['+arr[key]+']']['label']){
			ok=false;
			$('#message div.txt_form').html(MSG);
			$('#message').css('display','block');
			$(document.forms[f][f+'['+arr[key]+']']).css(cssf); }}
	if(ok){document.forms[f].submit()}}


$(function() {
	$("#message .send-form-error,\
		 #message .say_form,\
		 #message .say_me,\
		 #message #say_close").click(function () {
		$("#message").fadeOut(400);});
	});
	
	$(function() {
    $(".say_rel").click(function () {
	  $(".popupWindow").fadeIn(100);
		$(".TB_sloiBG2").fadeIn(1000)
    });

	
   $(".close").click(function () {
	  $(".popupWindow").fadeOut(100);
	  $(".TB_sloiBG2").fadeOut(1000);
	 
    });
	
	 $(".TB_sloiBG2").click(function () {
  $(".popupWindow").fadeOut(100);
	  $(".TB_sloiBG2").fadeOut(1000);
	  $(".okm").fadeOut(1000);
	  
	  $("#show_img").fadeOut(500);
	
    });
	 $(".okm").click(function () {
  $(".popupWindow").fadeOut(100);
	  $(".TB_sloiBG2").fadeOut(1000);
	  $(".okm").fadeOut(1000);
	
    });
	
  });

    	$(function() {
		$('.time_pl').removeAttr('value');
  	$('#btn_docs').click(function(){
		var selfClick = $('#docs_list').is(':visible');
		if(!selfClick) {
			$('#docs_list:visible')
//				.parent()
				.slideToggle();
			}
    
		$('#docs_list')
			.stop(true, true)
			.slideToggle();
		}); } );
