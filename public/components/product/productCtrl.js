var app = angular.module("GiftRegistryApp");
app.service("ProductService", ["$http", function ($http) {
	this.getProduct = function () {
		var config = {
			params: {
				callback: "JSON_CALLBACK"
			}
		};
		return $http.jsonp("https://api.walmartlabs.com/v1/search?apiKey=gz24h8emgntbstsayg43jc42&query=baby&numItems=25", config)
			.then(function (response) {
				return response.data;
			}, function (response) {
				console.log("Error" + response.status + " : " + response.statusText)
			});
	}
	this.getRegistry = function () {
		return $http.get("/api/registry")
			.then(function (response) {
				return response.data
			}, function (response) {
				console.log("Error" + response.status + ":" + response.statusText);
			})
	}
	this.createRegistry = function (item) {
		return $http.post("/api/registry", item)
			.then(function (response) {
				return response.data;
			}, function (response) {
				console.log("Error" + response.status + ":" + response.statusText);
			})
	}

	this.deleteItem = function (item) {
		return $http.delete("/api/registry/" + item.id)
			.then(function (response) {
                console.log(response.data)
				return response.data;
			}, function (response) {
				console.log("Error" + response.status + ":" + response.statusText);
			})
	}


}])

app.controller("ProductController", ["ProductService", "$scope", function (ProductService, $scope) {
	(function getProduct() {
		ProductService.getProduct()
			.then(function (response) {
				$scope.products = response.items;
			})

	})();

	$scope.createRegistry = function (baby, index) {
		var newitem = $scope.products[index];
		console.log(newitem);
		ProductService.createRegistry(newitem)
			.then(function (response) {

			})
	};


}])

app.controller("RegistryController", ["ProductService", "$scope", function (ProductService, $scope) {
	(function getRegisty() {
		ProductService.getRegistry()
			.then(function (response) {
				$scope.registry = response;
			})
	})();

	$scope.deleteItem = function (item, index) {
		ProductService.deleteItem(item, index)
			.then(function (response) {
                $scope.registry.splice(index, 1);
			})
	}
}]);