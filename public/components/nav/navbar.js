var app = angular.module("BabyRegistryApp");

app.directive("navbar", ["registryService", function (registryService) {
    return {
        templateUrl: "components/navbar/navbar.html",
        link: function(scope) {
            scope.registryService = registryService;
        }
    }
}]);
