import axios from "axios";
import * as AxiosLogger from "axios-logger";

AxiosLogger.setGlobalConfig({
  headers: true,
  dateFormat: "HH:MM:ss",
  status: true,
});

const httpClient = axios.create({
  baseURL: "https://jpwbackend.herokuapp.com/jpw",
  headers: {
    "Content-type": "application/json",
  },
});
httpClient.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);

const token = axios.create({
  baseURL: "https://jpwbackend.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
token.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
token.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);

export const getAll = () => {
  return httpClient.get("/cliente", { headers: { Authorization: "Bearer " + localStorage.getItem("jwtToken") } });
};

export const create = (data) => {
  return httpClient.post("/cliente", data);
};

export const exportExcel = () =>{
  return httpClient.get(`/clientes/export/excel`);
}

export const login = (data) => {
  return token.post(
    "/token",
    {},
    {
      auth: {
        username: data.nome,
        password: data.senha,
      },
    }
  );
};