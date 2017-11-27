
module.exports = {
  findAll: function(req, res) {
        console.log(req.params.id);
  var searchTerm = req.params.id;
  var url = "https://itunes.apple.com/search?entity=podcast&term=" + searchTerm;

  $.ajax({
    url: url,
    method: "GET"
  }).done(function(err, response) {
      if(err)
        console.log(err);
      else {
        var temp = JSON.parse(response);
        console.log(temp.results);
      }
     // var temp = JSON.parse(response);
     // return temp;
     // podcastFeedUrl = temp.results[0].feedUrl;
     // console.log(temp.results[0]);
     // console.log("Number of results: " + temp.results.length);
     // for (var i = 0; i < temp.results.length; i++){
     //  console.log("AJAX feed url: " + temp.results[i].feedUrl);
     // }

     // releaseDate
     // artistId
     // artworkUrl100
     // 30, 60, 100 & 600
     // artistName
     // genres
  });
  }
};