import axios from 'axios';

export default axios.create({
    // Need to update this whenever restarting ngrok
    baseURL: 'http://02d7753d9bec.ngrok.io'
})