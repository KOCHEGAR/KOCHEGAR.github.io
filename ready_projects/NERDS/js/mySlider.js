$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 15000,
      step: 1,
      values: [ 0, 15000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ]); /*вывод в первый инпут*/
        $("#amount2").val(ui.values[ 1 ]); /*вывод во второй инпут*/
      },
    });
    
    /*==== вывод дефолтных значений ====*/
     $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ));
     $( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ));
     /*=================================*/
  });