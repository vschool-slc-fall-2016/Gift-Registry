var app = angular.module("GiftRegistryApp")


app.service("ProfileService", ["$http", function($http){
    
    this.getProfile = function(){
        return $http.get("/api/profile")
            .then(function(response){
                return response.data;
            })
    
    }
    
    this.updateProfile = function(itemId){
        return $http.put("/api/profile", itemId)
            .then(function(response){
                return response.data
        })
    }
}])


app.controller("ProfileController", ["$scope", "ProfileService", function($scope, ProfileService){
    (function getProfile(){
        ProfileService.getProfile()
            .then(function(response){
               // console.log(response)
                $scope.profile = response;
        })
    })();
    
    $scope.updateProfile = function(){
        var itemId = $scope.profile._id
        ProfileService.updateProfile(itemId)
            .then(function(response){
               console.log(response);
               $scope.profile = response;
        })
    }
    
}])