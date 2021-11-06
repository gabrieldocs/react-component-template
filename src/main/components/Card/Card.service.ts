import axios from "axios"

export const getUser = (username: string) => {
    return axios.get(`https://api.github.com/users/${username}`).then(response => response.data)
}

export const getUserByName = (username: string) => {
    return axios.get(`https://api.github.com/users/${username}`).then(response => response.data)
}