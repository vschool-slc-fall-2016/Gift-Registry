var app = angular.module("GiftRegistryApp");

app.service("SearchService", ["$http", function ($http) {

	this.getSearch = function () {
		return $http.get("/search")
			.then(function (response) {
				console.log(response);
				return response.data;
			})
	}
    

}])

app.controller("SearchController", ["$scope", "SearchService", function ($scope, SearchService) {

    $scope.Search = [];
    (function getSearch() {
        SearchService.getSearch()
            .then(function (response) {
                console.log(response)
                $scope.Search = response;
            })
    })();
   

}])