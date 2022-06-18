import { Axios } from "./index"

export const postUserData = (data: any) => {
    return Axios({method: 'POST', url: 'create-user', data})
}