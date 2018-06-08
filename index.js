const fetch = require('node-fetch');
let credentials = require('./credentials');

let mnet_channel_id = "UCTQVIXvcHrR9jYoJ6qaBAow";
let youtube_api_key = credentials.youtube_api_key;


let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTQVIXvcHrR9jYoJ6qaBAow&order=date&key="+youtube_api_key+"&maxResults=5";

fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json);
    });