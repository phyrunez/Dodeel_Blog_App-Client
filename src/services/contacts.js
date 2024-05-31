import axios from "axios"

export const sendMessage = async({ contactData }) => {
    try {
        const { data } = await axios.post('/api/contacts', contactData);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}

export const getAllMessages = async(searchKeyword = "", page, pageSize) => {
    try {
        const  { data } = await axios.get(`/api/contacts/?searchKeyword=${searchKeyword}`, {
            params: { page, pageSize }
        })
        console.log({ data })
        return { data }
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)    
    }
}