import { Axios } from "./index"


export const fetchCountry = async() => {
    return Axios({method: 'GET', url: 'fetch-all-countries'})
}

export const fetchAllCourses = async() => {
    return Axios({method: 'GET', url: 'fetch-all-courses'})
}