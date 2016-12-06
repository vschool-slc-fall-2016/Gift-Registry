var app = angular.module("GiftRegistryApp", ["ngRoute","Auth"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "components/home/home.html"
		})
		.when("/product", {
			templateUrl: "components/product/product.html",
			controller: "ProductController"
		})
         .when("/registry",{
            templateUrl: "components/product/registry.html",
            controller: "RegistryController"
    })
}]);




