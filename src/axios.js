import axios from "axios"

const instance = axios.create({
    baseURL:'https://merntiktokwithrohit.herokuapp.com/',
})

export default instance;