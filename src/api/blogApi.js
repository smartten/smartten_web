import axios from './instance'
// import apiKey from './instance'

const blogApi= {
    getBlogs: (keyword)=>{
        return axios.get(`${keyword}`)
    },
    getServices: (keyword)=>{
        return axios.get(`${keyword}`)
    },
    getMenus: (keyword)=>{
        return axios.get(`${keyword}`)
    },
    postCustomersInfo: (keyword, customerInfo)=>{
        return axios.post(`${keyword}`, customerInfo)
    }
    
}

  export default blogApi;