var app = angular.module('BabyRegistryApp');

app.controller("MainController", ["$scope", "myService ", function ($scope, registryService) {
	$scope.getregistry = function (booktreats) {
		RegistryService.getRegistryInfo($scope.locationID).then(function (data) {
			$scope.getRegistry = data;
		});
	}
}]);

app.service("registryService", ["$http", function ($http) {
	this.getregistry = function (id) {
		return $http.get("http://api.walmartlabs.com/v1/search?apiKey=gz24h8emgntbstsayg43jc42&query=baby" + id).then(function (response) {
			var giftproduct = {};
			item.name = response.data.name;
			item.date = response.data.date;
			item.description = response.data.description;
			item.image = (product.name.toLowerCase() + ".gif")
			return items
		})
	}
}]);

app.controller('MyCtrl', ["$scope", "$http", "registryService", function ($scope, $http) {
	$scope.user = {};
	$scope.results = [];
	$scope.search = function () {
		$http.get('/your/url/search', {
				params: user
			},
			function (response) {
				$scope.results = response;
			},
			function (failure) {
				console.log("failed :(", failure);
			})
	}
  }]);