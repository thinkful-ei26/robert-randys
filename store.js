'use strict';

const videoApp = (function (){

  const store = {
    videos: [],
  };

  const API_KEY = 'AIzaSyAM2N0VHdrLgxJ1ayI-xa1__T_DWNWlx0U';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      q: `${searchTerm}`,
      key: API_KEY,
      maxResults: 3,
    };
       
    $.getJSON(BASE_URL, query, callback);
  };
  
  const decorateResponse = function(response) {
    return response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      };
    });
  };
  
  const generateVideoItemHtml = function(video) {
    return `<li data-video-id="${video.id}">
              <h2>${video.title}</h2>
              <img src="${video.thumbnail}">
              <a href="${video.videoLink}">Watch Video</a>
            </li>`;
  };
  
  const addVideosToStore = function(videos) {
    store.videos = videos;
  };
  
  const render = function() {
    const videos = store.videos.map((video) => generateVideoItemHtml(video));
    const videoString = videos.join('');
    
    $('.results').html(videoString);
  };
  
  const handleFormSubmit = function() {
    $(':submit').click(function (event) {
      event.preventDefault();
      console.log('button clicked');
      const searchWord = $('#search-term').val();
      console.log(searchWord);
      $('#search-term').val('');
      fetchVideos(searchWord, function(response) {
        const newVideos = decorateResponse(response);
        addVideosToStore(newVideos);
        console.log(store.videos);
        render();
      });
    });
  };

  return {
    handleFormSubmit,
  };
}());
