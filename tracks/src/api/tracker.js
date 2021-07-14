import axios from 'axios';

export default axios.create({
    // Need to update this whenever restarting ngrok
    baseURL: 'http://ff1f78d7a373.ngrok.io'
})