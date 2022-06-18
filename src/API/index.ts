import axios from "axios"

export const Axios = ({method, url, data}: {method: string, url: string, data?: any}) => axios({
    method: method,
    url: `https://imparticus.herokuapp.com/${url}`,
    data: data
})