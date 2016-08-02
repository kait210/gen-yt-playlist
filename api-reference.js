// Gathered call methods from YouTube API v3

var base_URL="https://www.googleapis.com/youtube/v3"

// Search for a particular topic
GET {base_URL}/search?part=snippet
                    //  &topicId=/m/05z1_ Freebase id
                     &q=haul
                     &channelId={loopthroughids}
                     &type=video
                     &maxResults=50
                     &key={YOUR_API_KEY}

// Retreive a list of the channels you subscribe to
GET {base_URL}/subscriptions?part=snippet
                            &mine=true

// This request creates a new public playlist.

POST {base_URL}/playlists?part=snippet
 Request body:
  {
    'snippet': {
      'title': 'New playlist',
      'description': 'Sample playlist for Data API',
     }
  }

// This request adds a video to the beginning of the playlist ('position': 0).

POST {base_URL}/playlistItems?part=snippet
  Request body:
  {
    'snippet': {
      'playlistId': '{PLAYLIST_ID}',
      'resourceId': {
          'kind': 'youtube#video',
          'videoId': '{VIDEO_ID}'
        }
     'position': 0
      }
   }
