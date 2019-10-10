(function () {
    'use strict';

    angular
        .module('app')
        .controller('News.IndexController', Controller);

    function Controller(NewsService) {
        var vm = this;

        vm.bbcnews = null;

        vm.ieeenews = null;

        vm.cnnnews = null;

        vm.washingtonnews = null;

        vm.nasanews = null;

        vm.bbctechnews = null;

        vm.dailynews = null;

        initController();

        function initController() {
            // get bbc news
            NewsService.getBBCNews().then(function (bbcnews) {
                        vm.bbcnews = bbcnews;
            });

            NewsService.getIEEENews().then(function (ieeenews) {
                vm.ieeenews = ieeenews;
            });
            NewsService.getCNNNews().then(function (cnnnews) {
                vm.cnnnews = cnnnews;
            });
            NewsService.getWashingtonNews().then(function (washingtonnews) {
                vm.washingtonnews = washingtonnews;
            });
            NewsService.getNASANews().then(function (nasanews) {
                vm.nasanews = nasanews;
            });
            NewsService.getBBCTechNews().then(function (bbctechnews) {
                vm.bbctechnews = bbctechnews;
            });
            NewsService.getDailyNews().then(function (dailynews) {
                vm.dailynews = dailynews;
            });

        }
    }

})();