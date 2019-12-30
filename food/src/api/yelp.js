import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1WTSCvsEejlk0nlAMPXFseHGENZlE5yIryt1GCReQVYAVJRIPh_X5wB8gq3DrlEO95kF_ywdpGiRdoQUMZjo5gzuUaCuV0FgAjlXbhKDwaz_4Tm-UpXUNlweMO0IXnYx'
    }
});
