import axios from "axios";

export const addPost = async({ title, author, introText, supportText, italicText,
    summaryText, mainPhoto, supportPhoto, category, date, likes }) => 
{
    try {
        
        const { data } = await axios.post('/api/posts', {
            title, author, introText, supportText, italicText,
            summaryText, mainPhoto, supportPhoto, category, date, likes
        })
        console.log(data)
        return data
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}

export const getAllPosts = async(searchKeyword = "", page = 1, limit = 10) => {
    try {
        const  { data, headers } = await axios.get(`/api/posts/?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`)
        console.log({ data, headers })
        return { data, headers }
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)    
    }
}

export const getSinglePost = async({ slug }) => {
    try {
        const { data } = await axios.get(`/api/posts/${slug}`)
        console.log(data)
        return data
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}