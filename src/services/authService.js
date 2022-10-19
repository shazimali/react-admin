import axios from "axios";
import { LOGGED_IN_USER_ID } from "../constants";
export const   getAuthToken = async (email,password) => {

    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    return  await axios.post('/token',form);    

}

export const logOut = async () => {
    return  await axios.post('/logout',LOGGED_IN_USER_ID);
}