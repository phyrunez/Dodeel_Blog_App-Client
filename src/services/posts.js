import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

export const addPost = async({ title, author, introText, supportText, italicText,
    summaryText, mainPhoto, supportPhoto, category, date, likes }) => 
{
    try {
        
        const { data } = await axios.post(`${API_URL}/posts`, {
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
        const  { data, headers } = await axios.get(`${API_URL}/posts/?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`)
        console.log({ data, headers })
        return { data, headers }
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)    
    }
}

export const getSinglePost = async({ slug }) => {
    try {
        const { data } = await axios.get(`${API_URL}/posts/${slug}`)
        console.log(data)
        return data
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}

export const deleteSinglePost = async({ slug }) => {
    try {
        const { data } = await axios.delete(`${API_URL}/posts/${slug}`);
        
        return data;
    } catch (error) {
        console.log(error)
        if(error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}

export const updatePost = async({ slug, userData }) => {
    try {
        const { data } = await axios.put(`${API_URL}/posts/${slug}`, userData);
        
        return data;
    } catch (error) {
        console.log(error)
        if(error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}

export const likePost = async({ slug }) => {
    try {
        const { data } = await axios.post(`${API_URL}/posts/${slug}/like`);
        console.log(slug)
        return data;
    } catch (error) {
        console.log(error)
        if(error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}

export const rankedPost = async() => {
    try {
        const { data } = await axios.get('api/posts/ranked');
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        if(error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}