(function(){
  'use strict';
  angular.module('MyfirstApp',[])
  .controller('MyfirstController',function($scope){
    $scope.name="prince singh";
    $scope.sayHello=function()
    {
      return "hello man";
    };
  });

})();
