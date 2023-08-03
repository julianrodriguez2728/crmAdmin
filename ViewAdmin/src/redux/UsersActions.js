import axios from "axios";
import { getUsers } from "./UsersSlice";

export const getAllUsers = async (dispatch)  => {
    try {
        const response = await axios.get('http://localhost:3001/user/all')
        dispatch(getUsers(response.data))
    } catch (error) {
        console.log(error)
    }
}