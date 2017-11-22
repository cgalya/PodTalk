const app = require("express");
const axios = require("axios");
const Feed = require("rss-to-json");
const async = require("async");

module.exports = {
  findAll: function(req, res) {
    var searchTerm = req.params.id;
    var url = "https://itunes.apple.com/search?entity=podcast&term=" + searchTerm;

    async.waterfall([
        function(callback) {
          axios.get(url).then(function(res) {
            //console.log(res);
            return callback(null, res.data.results[0].feedUrl);
          });
        },

        function(feedUrl, callback) {
          Feed.load(feedUrl, function(err, rss) {
            //console.log(rss);
            if(err){
              console.log(err);
              return callback(err)
            }
            callback(null, rss);
          });
        }

      ], function(err, rss) {
          if(err) {
            console.log(err)
          }
          else {
          //console.log(rss);
          res.json(rss);
         }
      });
    }
};