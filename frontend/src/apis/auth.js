import axios from 'axios';
const api = process.env.REACT_APP_API;

const loginUsers = async (body) => {
    try {
        const res = await axios.post(`${api}/users/loginUsers`, body, {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Something went wrong');
    }
}

export { loginUsers }
