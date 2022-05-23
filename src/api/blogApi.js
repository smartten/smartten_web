import axios from './instance'
// import apiKey from './instance'

const logApi= {
    getBlogs: (keyword)=>{
        return axios.get(`${keyword}`)
    },
    
}

  export default logApi;