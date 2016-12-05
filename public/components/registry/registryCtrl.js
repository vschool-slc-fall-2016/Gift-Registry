var app = angular.module("GiftRegistryApp");

app.service("RegistryService", ["$http", function ($http) {
    this.getProduct = function () {
        var config = {
            params: {
                apiKey: "gz24h8emgntbstsayg43jc42",
                query: "baby"
            },
            jsonpCallbackParam: "callback"
        }
//        return $http.get("https://api.walmartlabs.com/v1/search?apiKey=gz24h8emgntbstsayg43jc42&query=baby")
        return $http.jsonp("https://api.walmartlabs.com/v1/search", config)
            .then(function (response) {
                console.log(response.data.totalResults)
                return response.data;
            }, function (response) {
                console.log("Error" + response.status + " : " + response.statusText)
            })
    }
            }])

app.controller("RegistryController", ["RegistryService", "$scope", function (RegistryService, $scope) {
    (function getProduct() {
        RegistryService.getProduct()
            .then(function (response) {

            })

    })();



}])