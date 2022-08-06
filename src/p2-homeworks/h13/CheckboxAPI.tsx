import axios from "axios";

export const appAPI = {
    updateStatus(value: boolean) {
        return axios.post<ResponseStatusType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
            .then((res) => {
                return res.data;
            })
    }
}

//types
type ResponseStatusType = {
    errorText: string
    info: string
    yourBody: { success: boolean }
    yourQuery: {}
}