const functions = require("firebase-functions");
const axios = require("axios");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getLastFM = functions.https.onCall(async (data, context) => {
    
    let res = await axios.get('https://ws.audioscrobbler.com/2.0/', {
        params: {
            method: "user.getRecentTracks",
            user: "Kawambiit",
            limit: 1,
            api_key: process.env.LFM_API_KEY,
            format: "json",
        }
    });
    if (res.status !== 200) {
        return {success: false, message: "Error fetching data from LastFM."}
    }
    let track = (res.data).recenttracks.track[0];
    
    // console.log(track)
    const formatted = {
        success: true,
        artist: track.artist['#text'],
        song: track.name,
        album: track.album['#text'],
        url: track.url,
        isPlaying: track['@attr'] ? true : false,
    }
    return formatted;

})


