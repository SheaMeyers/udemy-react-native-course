# Tracks

Note: This project relies on `track-server` project which is an express api using a mongodb instance to store data.  It also relies on `ngrok` being run.

To run this three terminal windows need to be run:
1. Regular `npm start` this project
2. Start `track-server` project with `npm run dev`
3. Start `ngrok` with `ngrok http 3000` and then update the `baseURL` in `tracker.js` to have the first `Forwarding` url