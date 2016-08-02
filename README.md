Generate YouTube Playlist
=========================

** Problem
YouTube subscriptions are linear and "activity" is often missing videos.
It is hard to navigate timeline for specific content or watch out of order.
There is no easy way to group videos by topic, theme, or filter by date.

**** Solution
Generate YouTube Playlist is intended to provide an a la carte solution
to curate content by desired organization, not unlike a self-arranged TV Guide.
This is to be accomplished leveraging private playlists for plug-n-play
ease of use across all devices.

**** Method using YouTube API v3
```
1) Authenticate user and access data via user's chosen YouTube account

2) GET user's subscriptions channel list

3) Apply custom-filtered search to uploaded videos in each subscribed channel

4) Add applicable videos to custom playlist

5) Time to watch? -- play playlist instead of searching subscriptions
```


User can create multiple playlists, separated by upload date and theme
to create a custom, predictable, TV-like viewing experience.


**** Example Playlist Generation:
```
Monday Playlist: GRWM, Plan With Me, Haul videos
Wednesday Playlist: Productivity, Business, How I Film and Edit videos
Friday Playlist: Vlogs, Makeup Looks, DITL
Saturday Playlist: Catchall - All uploaded videos [less above search terms]
```
