var myApp = angular.module("myApp", []);

myApp.controller("ZetaController", ["$scope","$http", function($scope, $http) {

    $scope.sortFilter;
    $scope.nameArray = [];

    $scope.getPeople = function(){
        //console.log("in the function");
        $http.get('/data').then(function(response){
           //console.log(response.data);
            $scope.nameArray = response.data;
            //console.log("these are the names ", $scope.nameArray);
        });
    };
    $scope.sortByName = function(){
        $scope.sortFilter = "name";
        //console.log($scope.sortFilter);
    };
    $scope.sortByLocation = function(){
        $scope.sortFilter = "location"
    };
    $scope.sortByNumber = function(){

        //for(var i =0; i<$scope.nameArray.length; i++) {
        //    var value = $scope.nameArray[i].favorite_number;
        //    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
        //        value = Number(value);
        //    } else {
        //        value = NaN;
        //    }
        //    //$scope.nameArray[i].favorite_number = favoriteNumber;
        //    console.log(parseInt(value));
        //    //if (favoriteNumber == "NaN"){
        //    //    favoriteNumber = null;
        //    //} else {
        //    //    parseInt(favoriteNumber);
        //    //}
        //}
        $scope.sortFilter = "favorite_number";
    };

    $scope.getPeople();

}]);