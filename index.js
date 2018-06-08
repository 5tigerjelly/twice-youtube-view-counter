var ypi = require('youtube-channel-videos');

ypi.channelVideos("YOUR_YOUTUBE_API_KEY", "CHANNEL_ID", function(channelItems) {
  console.log(channelItems);
});