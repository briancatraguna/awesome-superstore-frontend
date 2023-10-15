import axios from "axios";

const BASE_URL = "http://localhost:3000";

const client = axios.create({
    baseURL: BASE_URL,
    validateStatus: (_) => {
        return true;
    }
})

export const registerCustomer = async (name, segment, email, password) => {
    const requestBody = {
        name: name,
        segment: segment,
        email: email,
        password: password
    }
    const response = await client.post("/auth/register", requestBody);
    console.log(response);
}