var config = require('config.json');
var _ = require('lodash');
var Q = require('q');
var mongo = require('mongoskin');
var Feed = require('rss-to-json');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('news');

var service = {};

service.getBBCNews = getBBCNews;
service.getIEEENews = getIEEENews;
service.getCNNNews = getCNNNews;
service.getWashingtonNews = getWashingtonNews;
service.getNASANews = getNASANews;
service.getBBCTechNews = getBBCTechNews;
service.refershRSS = refershRSS;
service.getDailyNews = getDailyNews;


module.exports = service;

const BBC_RSS_url = 'http://feeds.bbci.co.uk/news/rss.xml?edition=uk#';
const CNN_RSS_URL = 'http://rss.cnn.com/rss/edition_world.rss';
const BBC_Tech_RSS_url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
const IEEE_RSS_url = 'https://spectrum.ieee.org/rss/blog/tech-talk/fulltext';
const WashingtonPost_RSS_url = 'http://feeds.washingtonpost.com/rss/rss_blogpost';
const NASA_RSS_url = 'https://www.nasa.gov/rss/dyn/breaking_news.rss';
const DailyMaile_url = 'https://www.dailymail.co.uk/articles.rss';

function getBBCNews() {
    var deferred = Q.defer();

    db.news.findOne(
        { title: 'BBC News - Home' },
        function (err, anew) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (anew) {
                console.log("getting anew in service");
                deferred.resolve(anew);}
            else {
                deferred.resolve(anew);}
        });


    return deferred.promise;
}

function getIEEENews() {
    var deferred = Q.defer();

    db.news.findOne(
        { title: 'IEEE Spectrum Tech Talk' },
        function (err, anew) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (anew) {
                console.log("getting anew in service");
                deferred.resolve(anew);}
            else {
                deferred.resolve(anew);}
        });


    return deferred.promise;
}

function getCNNNews() {
    var deferred = Q.defer();

    db.news.findOne(
        { title: 'CNN.com - RSS Channel - World' },
        function (err, anew) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (anew) {
                console.log("getting anew in service");
                deferred.resolve(anew);}
            else {
                deferred.resolve(anew);}
        });


    return deferred.promise;
}


function getWashingtonNews() {
    var deferred = Q.defer();

    db.news.findOne(
        { title: 'World' },
        function (err, anew) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (anew) {
                console.log("getting anew in service");
                deferred.resolve(anew);}
            else {
                deferred.resolve(anew);}
        });


    return deferred.promise;
}

function getNASANews() {
    var deferred = Q.defer();

    db.news.findOne(
        { title: 'NASA Breaking News' },
        function (err, anew) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (anew) {
                console.log("getting anew in service");
                deferred.resolve(anew);}
            else {
                deferred.resolve(anew);}
        });


    return deferred.promise;
}

function getBBCTechNews() {
    var deferred = Q.defer();

    db.news.findOne(
        { title: 'BBC News - Technology' },
        function (err, anew) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (anew) {
                console.log("getting anew in service");
                deferred.resolve(anew);}
            else {
                deferred.resolve(anew);}
        });


    return deferred.promise;
}

function getDailyNews() {
    var deferred = Q.defer();

    db.news.findOne(
        { title: 'Articles | Mail Online' },
        function (err, anew) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (anew) {
                console.log("getting anew in service");
                deferred.resolve(anew);}
            else {
                deferred.resolve(anew);}
        });


    return deferred.promise;
}


function refershRSS(){
    db.news.remove();
    Feed.load(BBC_RSS_url, function(err, rss){
        db.news.insert(rss);
    });
    Feed.load(IEEE_RSS_url, function(err, rss){
        db.news.insert(rss);
    });
    Feed.load(CNN_RSS_URL, function(err, rss){
        db.news.insert(rss);
    });
    Feed.load(WashingtonPost_RSS_url, function(err, rss){
        db.news.insert(rss);
    });
    Feed.load(NASA_RSS_url, function(err, rss){
        db.news.insert(rss);
    });
    Feed.load(BBC_Tech_RSS_url, function(err, rss){
        db.news.insert(rss);
    });
    Feed.load(DailyMaile_url, function(err, rss){
        db.news.insert(rss);
    });
    
}


// function find_CNN_RSS(){
//     Feed.load(CNN_RSS_URL, function(err, rss){
//         console.log(rss);
//         //db.news.insert(
//                 //rss,
//                 //function (err, doc) {
//                     //if (err) deferred.reject(err.name + ': ' + err.message);
    
//                     //deferred.resolve();
//                 //});
//     });
// }


// function find_BBCTech_RSS(){
//     Feed.load(BBC_Tech_RSS_url, function(err, rss){
//         console.log(rss);
//         //db.tech.insert(
//                 //rss,
//                 //function (err, doc) {
//                     //if (err) deferred.reject(err.name + ': ' + err.message);
    
//                     //deferred.resolve();
//                 //});
//     });
// }

// function find_IEEE_RSS(){
//     Feed.load(IEEE_RSS_url, function(err, rss){
//         console.log(rss);
//         //db.tech.insert(
//                 //rss,
//                 //function (err, doc) {
//                     //if (err) deferred.reject(err.name + ': ' + err.message);
    
//                     //deferred.resolve();
//                 //});
//     });
// }




//find_BBCTech_RSS();
//find_IEEE_RSS();
//find_CNN_RSS();