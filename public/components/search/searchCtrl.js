var app = angular.module("GiftRegistryApp");

app.service("SearchService", ["$http", function ($http) {

	this.getSearch = function () {
		return $http.get("/search")
			.then(function (response) {
				console.log(response);
				return response.data;
			})
	}
    

	this.getRegistryList = function (user) {
		return $http.get("/search/" + user._id)
		

	}
}])

app.controller("SearchController", ["$scope", "SearchService", function ($scope, SearchService) {

	$scope.Search = [];
	$scope.List = [];

	(function getSearch() {
		SearchService.getSearch()
			.then(function (response) {
				console.log(response);
				$scope.Search = response;
			})
	})();

	$scope.getList = function (user) {
		$scope.List = [];
		console.log(user);

		SearchService.getRegistryList(user)
			.then(function (response) {
				console.log(response);
				$scope.List = response.data;
			})
	}


}])