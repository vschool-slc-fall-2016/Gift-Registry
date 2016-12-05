var app = angular.module("GiftRegistryApp");

app.service("RegistryService", ["$http", function($http){
    this.getProduct = function()[
        return $http.get("https://api.walmartlabs.com/v1/search?apiKey=gz24h8emgntbstsayg43jc42&query=baby")
            .then(function(response){
                return response.data;
            }, function(response){
                console.log("Error"  + response.status + " : " + response.statusText)
            })
    ]
}])

app.controller("RegistryController","RegistryService", [$scope, function($scope, RegistryService){
    Registry.getProduct = function()
        .then(function(response){
            $scope.
        })
    
    
}])