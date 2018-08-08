/**
 * Created by mac on 24/07/18.
 */
var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/listsongs', function (req, res) {
    console.log("readFile");
    //fs.readFile( "./plist.json", 'utf8', function (err, data) {
    //    console.log( data );
    //    console.log("eRR",err)
    //    res.end( data );
    //});
    var tmp=['{sngName:’Maru’, movie:’dumm’, relYear:’dumm’, singers:’dumm’}, {sngName:’NeThanae’,movie:’dumm’, relYear:’dumm’, singers:’dumm’},{sngName:’Kalyanm’, movie:’dumm’, relYear:’dumm’, singers:’dumm’}, {sngName:’Nenjukul’,movie:’dumm’, relYear:’dumm’,singers:’dumm’}'];
    console.log(tmp)
    //res.render('songsArr', tmp);
})
module.exports = router;