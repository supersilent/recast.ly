var searchYouTube = (options, callback) => {
  let data = $.get("https://www.googleapis.com/youtube/v3/search", {
    part: "snippet",
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: "video"
  }).done(function(data) {
    callback(data.items);
  });
  // .done((data) => callback(data.responseJSON.items))
  // console.log(data);
};

export default searchYouTube;
