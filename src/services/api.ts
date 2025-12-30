import axios from "axios";

const API = axios.create({
  baseURL: "https://chegamaisufc.onrender.com",
});

export const getStudents = async () => {
  try {
    const response = await axios.get("https://chegamaisufc.onrender.com");
  } catch (error) {
    console.error("Erro ao buscar sala:", error);
    throw new Error("Erro ao buscar sala");
  }
};

export default API;
