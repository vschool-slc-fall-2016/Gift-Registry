var app = angular.module("GiftRegistryApp", ["ngRoute", "Auth"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "components/home/home.html"
		})
		.when("/santa", {
			templateUrl: "components/santa/santa.html",
			controller: "SantaCtrl"
		});
}]);


