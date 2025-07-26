import axios from 'axios';
const api = process.env.REACT_APP_API;

const createOrg = async (body) => {
    try {
        const res = await axios.post(`${api}/organizations/createOrg`, body);
        return res.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Something went wrong');
    }
}

const getOrgs = async () => {
    try {
        const res = await axios.get(`${api}/organizations/getOrgs`);
        return res.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Something went wrong');
    }
}

export { createOrg,getOrgs }
