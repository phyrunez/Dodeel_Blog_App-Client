import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

export const signup = async ({ name, email, password }) => {
    try {
        const { data } = await axios.post(`API_URL/users/register`, {
            name,
            email,
            password
        });
        return data;
    } catch (error) {
        console.log(error)
        if (error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}

export const signin = async ({ email, password }) => {
    try {

        const { data }  = await axios.post(`API_URL/users/login`, {
            email,
            password
        })
        console.log(data)
        return data
    } catch (error) {
        if (error.response && error.response.data.message) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}

export const getAllUsers = async(searchKeyword = "", page = 1, limit = 10) => {
    try {
        const  { data, headers } = await axios.get(`API_URL/users/?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`)
        console.log({ data, headers })
        return { data, headers }
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)    
    }
}

export const getUserProfile = async({ token }) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.get(`API_URL/users/profile`, config);
        console.log(data)
        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)
        // throw new Error(error.message)
    }
}

export const updateProfile = async({ token, userData }) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`API_URL/users/updateProfile`, userData, config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}

export const updateProfilePicture = async({ userId, token, formData }) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`API_URL/users/updateUserProfilePicture/${userId}`, formData, config);
        console.log(data)
        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}

export const deleteSingleUser = async({ slug }) => {
    try {
        const { data } = await axios.delete(`API_URL/users/${slug}`);
        console.log(data)           
        return data;
    } catch (error) {
        console.log(error)
        if(error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}

export const getSingleUser = async({ slug }) => {
    try {
        const { data } = await axios.get(`API_URL/users/${slug}`)
        console.log(data)
        return data
    } catch (error) {
        if(error.response && error.response.data.response) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}

export const updateUser = async({ slug, userData }) => {
    try {
        const { data } = await axios.put(`API_URL/users/${slug}`, userData);
        
        return data;
    } catch (error) {
        console.log(error)
        if(error.response && error.response.data.message) throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}