angular.
module('ligaDetail', []).
component('ligaDetail', {
    templateUrl: '/view1/liga-detail.html',
    controller: ['$http', '$routeParams', 'LigaInfo', '$scope',
        function LigaDetailController($http, $routeParams, LigaInfo, $scope) {
            this.liga =
                LigaInfo.query({
                    slug: $routeParams.slug
                });
            this.orderProp = 'pontos.campparcial';
            this.setOrder = function (order) {
                this.orderProp = order;
            }
        }
    ]
});