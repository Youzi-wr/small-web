import axios from 'axios';

export default {
    getCardData: function(data) {
        // return axios.get('/api/cardList', data);
        return axios.get('src/mock/cardList.json', data);
    }
}