import axios from "axios";
import profileStatus from "../Components/Profile/AvaAndDescription/ProfileStatus/ProfileStatus";

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "18ac19b0-5cef-40bd-9772-3af54fae3054"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    profile(userId){
                return profileAPI.profile(userId)
                },
}

export const profileAPI ={
    profile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status:status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image" , photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const authAPI ={
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha=null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const securityAPI ={
    getCaptcha(){
        return instance.get(`/security/get-captcha-url`)
    }
}