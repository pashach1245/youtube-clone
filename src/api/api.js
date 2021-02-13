import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
    }
});

export const getVideos = (query) => {
    return  instanse.get(`/search?q=${query}`).then(resp => resp.data);
}

export const getTrendsVideos = () => {
    return  instanse.get(`/videos?chart=mostPopular`).then(resp => resp.data);
}