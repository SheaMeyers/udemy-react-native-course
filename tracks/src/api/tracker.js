import axios from 'axios';

export default axios.create({
    // Need to update this whenever restarting ngrok
    baseURL: 'http://1507a6ecd089.ngrok.io'
})