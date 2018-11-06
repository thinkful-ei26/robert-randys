'use strict';


const API_KEY = 'AIzaSyAM2N0VHdrLgxJ1ayI-xa1__T_DWNWlx0U';

/*
  We want our store to hold an array of "decorated" video objects - i.e. objects that
  have been transformed into ONLY the necessary data we're displaying on our page. 
  (Removes extraneous dataset from Youtube.)
  
  Example decorated video object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }
  */
 const store = {
   videos: []
  };
  
  // TASK: Add the Youtube Search API Base URL here:
  // Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  
  const MOCK_DATA = {
    "kind": "youtube#searchListResponse",
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/kEfKiex3v79YjpmVzCz-IFjtZwA\"",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
     "totalResults": 1000000,
     "resultsPerPage": 5
    },
    "items": [
     {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/r4bMXn_zjtjVPE1_WEXQh75kHyI\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "RIuKQPg5npE"
      },
      "snippet": {
       "publishedAt": "2018-06-30T15:00:03.000Z",
       "channelId": "UCejVe2sNPjjvfCXg35q_EQQ",
       "title": "Dog Love 🔴 Cute and Funny Dog Videos Compilation (2018) Perros Adorables Video Recopilación",
       "description": "Dog Love - Cute and Funny Dog Videos Compilation (2018) Perros Adorables Video Recopilación | Animal Planet Videos 🦄 Subscribe Here: ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/RIuKQPg5npE/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/RIuKQPg5npE/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/RIuKQPg5npE/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "Animal Planet Videos",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/dkVsFonSTHSsVgcan59qRr-UCko\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "NwlwJjelgzs"
      },
      "snippet": {
       "publishedAt": "2018-03-30T11:30:00.000Z",
       "channelId": "UCKy3MG7_If9KlVuvw3rPMfw",
       "title": "Get ready for LAUGHING SUPER HARD - Best FUNNY DOG videos",
       "description": "Dogs and puppies are super funny and hilarious, they make us laugh all the time! The hardest TRY NOT TO LAUGH challenge in the World! Just look how all ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/NwlwJjelgzs/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/NwlwJjelgzs/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/NwlwJjelgzs/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "Tiger Productions",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ewKxgDGd2zeva-5noZeowJrGv80\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "-G16EX6b8Xg"
      },
      "snippet": {
       "publishedAt": "2018-07-24T17:00:01.000Z",
       "channelId": "UC4rlAVgAK0SGk-yTfe48Qpw",
       "title": "12 Harmful Things You Do to Your Dog Without Realizing It",
       "description": "How to Keep Your Dog Healthy. If you're a dog owner, you surely want your pet to be healthy and to live a long and happy life. But you might sometimes do ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/-G16EX6b8Xg/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/-G16EX6b8Xg/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/-G16EX6b8Xg/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "BRIGHT SIDE",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/ZFXNQJyThQq-0aH-swGhs8Phclk\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "MfudhWialoU"
      },
      "snippet": {
       "publishedAt": "2018-09-25T10:33:44.000Z",
       "channelId": "UCFfBMLlD61celE_WaF6VbnA",
       "title": "Hero dog saves babies out of the water- Dog loves baby",
       "description": "Cute Dog looking out for babies at beach and pulling kid out of water. Suscribe Our Channel: https://goo.gl/HTWGVx View Our Pet Shop: https://diyhamster.com/ ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/MfudhWialoU/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/MfudhWialoU/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/MfudhWialoU/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "iFun TV",
       "liveBroadcastContent": "none"
      }
     },
     {
      "kind": "youtube#searchResult",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/bbZEPMlyipfw_uPK4xzwMLY1v8U\"",
      "id": {
       "kind": "youtube#video",
       "videoId": "SfLV8hD7zX4"
      },
      "snippet": {
       "publishedAt": "2017-01-21T00:15:19.000Z",
       "channelId": "UCE0uCIsTkr2IKyLB10ghiRQ",
       "title": "Jealous Dog Want Attention Compilation NEW",
       "description": "We all know our pets have feelings, and our dogs sometimes exhibit signs of jealousy. But are they really jealous? Feel free to leave a comment! Share this ...",
       "thumbnails": {
        "default": {
         "url": "https://i.ytimg.com/vi/SfLV8hD7zX4/default.jpg",
         "width": 120,
         "height": 90
        },
        "medium": {
         "url": "https://i.ytimg.com/vi/SfLV8hD7zX4/mqdefault.jpg",
         "width": 320,
         "height": 180
        },
        "high": {
         "url": "https://i.ytimg.com/vi/SfLV8hD7zX4/hqdefault.jpg",
         "width": 480,
         "height": 360
        }
       },
       "channelTitle": "Sad Cat",
       "liveBroadcastContent": "none"
      }
     }
    ]
   };
  
  /**
   * @function fetchVideos
   * Async function, responsible for calling the Youtube API with jQuery, constructing
   * the correct query object, and passing along the callback into the AJAX call.
   * @param {string}   searchTerm
   * @param {function} callback
   */
  // TASK:
  // 1. Use `searchTerm` to construct the right query object based on the Youtube API docs
  //    - Refer to curriculum assignment for help with the required parameters
  // 2. Make a getJSON call using the query object and sending the provided callback in 
  //    as the last argument
  //
  // TEST IT! Execute this function and console log the results inside the callback.
    const callbackFunc = function(results) {
      console.log(results);
    }

    const fetchVideos = function(searchTerm, callback) {
      const query = {
        part: 'snippet',
        q: `${searchTerm}`,
        key: API_KEY,
        maxResults: 3,
      };
     
      $.getJSON(BASE_URL, query, callback);
    };

  /**
   * @function decorateResponse
   * Uses Youtube API response to create an array of "decorated" video objects as 
   * defined at the top of the file.
   * @param   {object} response - should match Youtube API response shape
 * @returns {array}
 */
// TASK:
// 1. Map through the response object's `items` array
// 2. Return an array of objects, where each object contains the keys `id`, `title`, 
//    `thumbnail` which each hold the appropriate values from the API item object. You 
//    WILL have to dig into several nested properties!
//
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
// const decorateResponse = function(response) {
//   response 
// };

const decorateResponse = function(response) {
  return response.items.map(item => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url
    };
  });
};

const test = decorateResponse(MOCK_DATA);

/**
 * @function generateVideoItemHtml
 * Template function, creates an HTML string from a single decorated video object
 * @param   {object} video - decorated video object
 * @returns {string} HTML 
 */
// TASK:
// 1. Using the decorated object, return an HTML string containing all the expected
// TEST IT! 
const generateVideoItemHtml = function(video) {
  return `<li data-video-id="${video.id}">
            <h2>${video.title}</h2>
            <img src="${video.thumbnail}">
          </li>`;
};
// console.log(generateVideoItemHtml(test));


/**
 * @function addVideosToStore
 * Store modification function to set decorated video objects
 * @param {array} videos - decorated video objects
 */
// TASK:
// 1. Set the received array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};


// console.log(addVideosToStore(test));

/**
 * @function render
 * Responsible for scanning store and rendering the video list to DOM
 */
// TASK:
// 1. Map through `store.videos`, sending each `video` through `generateVideoItemHtml`
// 2. Add this array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const videos = store.videos.map((video) => generateVideoItemHtml(video));
  const videoString = videos.join('');
  
  $('.results').html(videoString);
};

/**
 * @function handleFormSubmit
 * Adds form "submit" event listener that 1) initiates API call, 2) modifies store,
 * and 3) invokes render
 */
// TASK:
// 2. Add an event listener to the form that will:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the 
//      `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {
  $(':submit').click(function (event) {
    event.preventDefault();
    console.log('button clicked')
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

  // $.getJSON(BASE_URL, query, callback);

};

$(handleFormSubmit);

// const decorateResponse = function (response) {
//   return response.items.map(item => {
//     return {
//       id: item.id.videoID,
//       title: item.snippet.title,
//       thumbnail: item.snippet.thumbnails.default.url,
//     }
//   })
// }

// When DOM is ready:
// $(function () {
  //   // TASK:
  //   // 1. Run `handleFormSubmit` to bind the event listener to the DOM
// });

// const store = {
//   videos: [
//     {

//     }
//   ]
// }

// function generateString (response) {
// //retrieve data from the API (getDataFromApi function)
// //we want to show on the web page a list of videos, with their titles, as thumbnails.  
// //Including any videos that contain the word 'dog' in them.
// //we are going to need to find the video title, author, image.jpeg


//   console.log(response.items[0].snippet.title);
// }

// let searchTerm = 'dog';


// getDataFromApi(searchTerm, generateString);


// console.log(decorateResponse(MOCK_DATA);

// const generateVideoItemHTML = function (video) {
//   return `
//   <li>
//     <img src="${video.thumbnail}" />
//     <h3>${video.title}</h3>
//   </li>
//   `;
// }
