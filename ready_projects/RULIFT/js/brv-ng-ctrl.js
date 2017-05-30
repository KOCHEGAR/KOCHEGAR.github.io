// global
// var SLIDES=<?php echo ($tpl['data']?$tpl['data']:'[]');?>
var SLIDES={};
// controller
function slideCtrl($scope) {
  $scope.slides={};
	$scope.slides = (SLIDES) ? SLIDES : {} ;
  
//   $scope.submit = function() {
// 		sld.submit();}
  
  $scope.addslide = function() {
    $scope.slides[SliderName].push({id:$scope.slides[SliderName].length,txt:$scope.slideText, url:$scope.slideURL,done:false});
    $scope.slideText = '';
    $scope.slideURL = '';
  };
 
//   $scope.remaining = function() {
//     var count = 0;
//     angular.forEach($scope.slides, function(slide) {
//       count += slide.done ? 0 : 1;});
//     $CC=$scope.slides;
//     return count;
//   };
 
//   $scope.archive = function() {
//     var oldslides = $scope.slides;
// //     $CC=oldslides;
//     $scope.slides = [];
//     angular.forEach(oldslides, function(slide) {
//       if(!slide.done){
// 				slide.id=$scope.slides.length
// 				$scope.slides.push(slide);}
//     });
//   };
}
