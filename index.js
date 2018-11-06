'use strict';

const url = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyAM2N0VHdrLgxJ1ayI-xa1__T_DWNWlx0U';

const MOCK_DATA = '

'

const store = {
  videos: [
    {

    }
  ]
}

// function generateString (response) {
// //retrieve data from the API (getDataFromApi function)
// //we want to show on the web page a list of videos, with their titles, as thumbnails.  
// //Including any videos that contain the word 'dog' in them.
// //we are going to need to find the video title, author, image.jpeg


//   console.log(response.items[0].snippet.title);
// }

// let searchTerm = 'dog';

function getDataFromApi(searchTerm, callback) {
  const query = {
    part: 'snippet',
    q: `${searchTerm}`,
    key: API_KEY,
    maxResults: 20,
  };
 
  $.getJSON(url, query, callback);
}

getDataFromApi(searchTerm, generateString);

const decorateResponse = function (response) {
  return response.items.map(item => {
    return {
      id: item.id.videoID,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url,
    }
  })
}

console.log(decorateResponse(MOCK_DATA);

const generateVideoItemHTML = function (video) {
  return `
  <li>
    <img src="${video.thumbnail}" />
    <h3>${video.title}</h3>
  </li>
  `;
}

const 