var app = angular.module("GiftRegistryApp");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function(scope) {
            scope.registryService = registryService;
        }
    }
}]);
