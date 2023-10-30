import { authenticatedClient, client } from "./client";

export const registerCustomer = async (name, segment, email, password) => {
  const requestBody = {
    name: name,
    segment: segment,
    email: email,
    password: password,
  };
  const response = await client.post("/auth/register", requestBody);
  if (response.status === 200) {
    return { success: true, message: response.data.message };
  } else {
    throw new Error(response.data.message);
  }
};

export const loginCustomer = async (email, password) => {
  const requestBody = {
    email: email,
    password: password,
  };
  const response = await client.post("/auth/login", requestBody);
  if (response.status === 200) {
    return {
      success: true,
      message: response.data.message,
      data: response.data,
    };
  } else {
    throw new Error(response.data.message);
  }
};

export const getAllProducts = async () => {
  const response = await client.get("/products");
  if (response.status === 200) {
    return { success: true, data: response.data };
  } else {
    throw new Error(response.data.message);
  }
};

export const updateCustomer = async (customerId, customerName, segment, email) => {
  const requestBody = {
    customerId: customerId,
    customerName: customerName,
    segment: segment,
    email: email
  };
  const response = await authenticatedClient.post("/customer", requestBody);
  if (response.status === 200) {
    return {
      success: true
    }
  } else {
    throw new Error(response.data.message);
  }
}
