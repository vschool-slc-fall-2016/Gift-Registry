var app = angular.module("GiftRegistryApp", ["ngRoute", "Auth"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "components/home/home.html"
		})
		.when("/product", {
			templateUrl: "components/product/product.html",
			controller: "ProductController"
		})

		.when("/registry", {
			templateUrl: "components/product/registry.html",
			controller: "RegistryController"
		})
		.when("/search", {
			templateUrl: "components/search/search.html",
			controller: "SearchController"
		})

         .when("/registry",{
            templateUrl: "components/product/registry.html",
            controller: "RegistryController"
         })
         .when("/profile",{
             templateUrl: "components/profile/profile.html",
             controller: "ProfileController"
         
        })
}]);




