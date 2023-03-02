import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getBurgues = () => api.get("/burgers");

export const getPizzas = () => api.get("/pizzas");

export const getDrinks = () => api.get("/drinks");

export const getIceCreams = () => api.get("/ice-creams");

export default api;
