var config = require('config.json');
var express = require('express');
var router = express.Router();
var newsService = require('services/news.service');

// routes
router.get('/getbbcnews', getBBCNews);
router.get('/getieeenews', getIEEENews);
router.get('/getcnnnews', getCNNNews);
router.get('/getwashingtonnews', getWashingtonNews);
router.get('/getnasanews', getNASANews);
router.get('/getbbctechnews', getBBCTechNews);
router.get('/getdailynews',getDailyNews);


module.exports = router;

function getBBCNews(req, res) {
    newsService.getBBCNews()
        .then(function (bbcnews) {
            if (bbcnews) {
                res.send(bbcnews);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getIEEENews(req, res) {
    newsService.getIEEENews()
        .then(function (ieeenews) {
            if (ieeenews) {
                res.send(ieeenews);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getCNNNews(req, res) {
    newsService.getCNNNews()
        .then(function (cnnnews) {
            if (cnnnews) {
                res.send(cnnnews);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function getWashingtonNews(req, res) {
    newsService.getWashingtonNews()
        .then(function (washingtonnews) {
            if (washingtonnews) {
                res.send(washingtonnews);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getNASANews(req, res) {
    newsService.getNASANews()
        .then(function (nasanews) {
            if (nasanews) {
                res.send(nasanews);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getBBCTechNews(req, res) {
    newsService.getBBCTechNews()
        .then(function (bbctechnews) {
            if (bbctechnews) {
                res.send(bbctechnews);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getDailyNews(req, res) {
    newsService.getDailyNews()
        .then(function (dailynews) {
            if (dailynews) {
                res.send(dailynews);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}