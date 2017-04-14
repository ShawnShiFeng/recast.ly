var searchYouTube = (options, callback) => {

  var apiurl = "https://www.googleapis.com/youtube/v3/search"
  +"?part=snippet&type=video&q="+options.query+"&maxResults="
  +options.max+"&videoCaption=closedCaption&key="
  +window.YOUTUBE_API_KEY


  $.ajax({
    url: apiurl,
    type: "GET",
    contentType: "text/plain",
    dataType: "json",

    success: function (data) {
      callback(data.items);
      console.log('search result: search data received');
    },

    error: function (data) {
      console.error('search result: failed to fetch video info', data);
    }
  });
};

window.searchYouTube = searchYouTube;
