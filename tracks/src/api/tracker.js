import axios from 'axios';

export default axios.create({
    // Need to update this whenever restarting ngrok
    baseURL: 'http://0bd64c2e9578.ngrok.io'
})