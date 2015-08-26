angular.module('project', ['ngRoute'])

.controller('ImageListController', function($scope) {
  var imgList = this;
  $scope.imgList = this;
  $.get("http://localhost:8080/api/images", function(data) {
   $('.list-group').html("");
    if(data.length == 0)
      $('.list-group').append("No Data...");
    if(data) {
      $.each(data, function(index, value){
         $('.list-group').append("<div class='list-group-item'>" + data[index].label + 
            "</div>");     
      });
    }
  });
})
