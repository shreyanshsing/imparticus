import axios from "axios"

export const Axios = ({method, url, data, params}: {method: string, url: string, data?: any, params?: any}) => axios({
    method: method,
    url: `https://imparticus.herokuapp.com/${url}`,
    data: data,
    params: params
})