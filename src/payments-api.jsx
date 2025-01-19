import axios from "axios";

axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";

export const getPayments = async (owner) => {
  const response = await axios.get(`/payments?search=${owner}`);
  if (!response) {
    return <p>Sory</p>;
  }
  return response.data;
};

export const getPaymentById = async (paymentId) => {
  const response = await axios.get(`/payments/${paymentId}`);
  return response.data;
};
