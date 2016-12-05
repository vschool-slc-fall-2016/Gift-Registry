var app = angular.module("GiftRegistryApp", ["ngRoute","Auth"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "components/home/home.html"
		})
		.when("/registry", {
			templateUrl: "components/registry/registry.html",
			controller: "RegistryController"
		});
}]);


