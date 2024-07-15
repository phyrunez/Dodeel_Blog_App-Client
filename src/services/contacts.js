import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

export const sendMessage = async({ contactData }) => {
    try {
        const { data } = await axios.post(`API_URL/contacts`, contactData);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}

export const getAllMessages = async(searchKeyword = "", page, pageSize) => {
    try {
        const  { data } = await axios.get(`API_URL/contacts/?searchKeyword=${searchKeyword}`, {
            params: { page, pageSize }
        })
        console.log({ data })
        return { data }
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)    
    }
}