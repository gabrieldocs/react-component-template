import axios from "axios";

const WrapperApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default WrapperApi