var app = angular.module("GiftRegistryApp");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "components/nav/navbar.html",
        link: function(scope) {
            scope.UserService = UserService;
        }
    }
}]);
