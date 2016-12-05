var app = angular.module("Auth", ["ngStorage"]);

app.config(["$routeProvider", function ($routeProvider) {
	$routeProvider
		.when("/signup", {
			templateUrl: "components/auth/signup/signup.html",
			controller: "SignupCtrl"
		})
		.when("/login", {
			templateUrl: "components/auth/login/login.html",
			controller: "LoginCtrl"
		})
		.when("/logout", {
			controller: "LogoutCtrl",
			template: ""
		});
}]);

app.service("TokenService", ["$localStorage", function ($localStorage) {

	this.setToken = function (token) {
		$localStorage.token = token;
	};

	this.getToken = function () {
		return $localStorage.token;
	};

	this.removeToken = function () {
		delete $localStorage.token;
	};
}]);