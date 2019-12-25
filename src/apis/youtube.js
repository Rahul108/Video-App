import axios from 'axios';

const KEY= 'AIzaSyBwTULfifbs-87b6GsWEyCbbvAf4Hm8SYo'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});