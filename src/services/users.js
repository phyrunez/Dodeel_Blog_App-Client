import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL
console.log(API_URL)

export const signup = async ({ name, email, password }) => {
    try {
        const { data } = await axios.post(`/api/users/register`, {
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

        const { data }  = await axios.post(`/api/users/login`, {
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

export const getAllUsers = async() => {
    try {
        const  { data } = await axios.get(`/api/users/`)
        
        return { data }
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

        const { data } = await axios.get(`/api/users/profile`, config);
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

        const { data } = await axios.put(`/api/users/updateProfile`, userData, config);
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

        const { data } = await axios.put(`/api/users/updateUserProfilePicture/${userId}`, formData, config);
        console.log(data)
        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)
        throw new Error(error.message)
    }
}