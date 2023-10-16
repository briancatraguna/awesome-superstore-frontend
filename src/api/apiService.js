import { client } from "./client";

export const registerCustomer = async (name, segment, email, password) => {
    const requestBody = {
        name: name,
        segment: segment,
        email: email,
        password: password
    }
    const response = await client.post("/auth/register", requestBody);
    if (response.status === 200) {
        return { success: true, message: response.data.message };
    } else {
        throw new Error(response.data.message);
    }
}