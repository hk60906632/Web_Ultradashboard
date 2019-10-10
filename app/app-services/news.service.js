(function () {
    'use strict';

    angular
        .module('app')
        .factory('NewsService', Service);

    function Service($http, $q) {
        var service = {};
        
        service.getBBCNews = getBBCNews;
        service.getIEEENews = getIEEENews;
        service.getCNNNews = getCNNNews;
        service.getWashingtonNews = getWashingtonNews;
        service.getNASANews = getNASANews;
        service.getBBCTechNews = getBBCTechNews;
        service.getDailyNews = getDailyNews;

        return service;


        function getBBCNews() {
            return $http.get('/getnews/getbbcnews').then(handleSuccess, handleError);
        }

        function getIEEENews() {
            return $http.get('/getnews/getieeenews').then(handleSuccess, handleError);
        }
        
        function getCNNNews(){
            return $http.get('/getnews/getcnnnews').then(handleSuccess, handleError);
        }


        function getWashingtonNews(){
            return $http.get('/getnews/getwashingtonnews').then(handleSuccess, handleError);
        }

        function getNASANews(){
            return $http.get('/getnews/getnasanews').then(handleSuccess, handleError);
        }

        function getBBCTechNews(){
            return $http.get('/getnews/getbbctechnews').then(handleSuccess, handleError);
        }
        
        function getDailyNews(){
            return $http.get('/getnews/getdailynews').then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
