import axios from "axios"
// import queryString from 'query-string';


// export const apiKey = ''

const instance = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 20000,
    // paramsSerializer: params => queryString.stringify({...params, api_key: apiKey}),
});


instance.interceptors.request.use(async (config) => config);

instance.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data.response;
    }
    return response;
}, (error) => {
    throw error;
});


export default instance