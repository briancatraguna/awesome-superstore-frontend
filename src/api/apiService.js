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

export const getCustomerById = async (customerId) => {
  const response = await authenticatedClient.get(`/customer/${customerId}`);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const getAddressByCustomerId = async(customerId) => {
  const response = await authenticatedClient.get(`/address/${customerId}`);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const getAllRegions = async () => {
  const response = await authenticatedClient.get('/address/regions');
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const getAllCountriesByRegion = async (regionId) => {
  const response = await authenticatedClient.get(`/address/countries/${regionId}`);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const getAllStatesByCountry = async (countryId) => {
  const response = await authenticatedClient.get(`/address/states/${countryId}`);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const getAllCitiesByState = async (stateId) => {
  const response = await authenticatedClient.get(`/address/cities/${stateId}`);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const addAddress = async (cityId, postalCode, customerId) => {
  const requestBody = {
    cityId: cityId,
    postalCode: postalCode,
    customerId: customerId
  }
  const response = await authenticatedClient.put('/address', requestBody);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const editAddress = async (addressId, cityId, postalCode) => {
  const requestBody = {
    addressId: addressId,
    cityId: cityId,
    postalCode: postalCode
  }
  const response = await authenticatedClient.post('/address', requestBody);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const getAddressById = async (addressId) => {
  const response = await authenticatedClient.get(`/address/id/${addressId}`);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const sendOTPByEmail = async (email) => {
  const response = await client.post(`/auth/sendOTP/${email}`);
  if (response.status === 200) {
    return {
      success: true,
      message: response.data.message
    }
  } else {
    throw new Error(response.data.message);
  }
}

export const changePasswordByCustId = async (customerId, otpCode, password, confirmPassword) => {
  const requestBody = {
    customerId: customerId,
    otpCode: otpCode,
    password: password,
    confirmPassword: confirmPassword
  }
  const response = await authenticatedClient.post('/auth/changePassword/custId', requestBody);
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    }
  } else {
    throw new Error(response.data.message);
  }
}