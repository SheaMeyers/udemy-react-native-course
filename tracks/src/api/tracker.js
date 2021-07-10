import axios from 'axios';

export default axios.create({
    // Need to update this whenever restarting ngrok
    baseURL: 'http://e3ba42c8a794.ngrok.io'
})