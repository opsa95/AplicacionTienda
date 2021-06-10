import _axios from "axios";

const axios = _axios.create({
  baseURL: "https://fakestoreapi.com/products/",
  responseType: "json",
});

// Incluimos un interceptor para las peticiones
axios.interceptors.request.use(
  (config) => {
    console.log(
      "He lanzado una petición con la siguiente configuración: ",
      config
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Incluimos un interceptor para las respuestas
axios.interceptors.response.use(
  (response) => {
    console.log(
      "He lanzado una petición con la siguiente configuración: ",
      response
    );

    const status = response.status;
    if (status < 200 || status >= 300) {
      return Promise.reject(`Response status: ${status}`);
    } else {
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

/** Devolveremos una Promesa con los
 * datos en formato JSON a solicitar */
const GET = (url) => {
    return axios.get(url)
      .then(response => response.data);
}

const POST = (url, data) => {
    return axios.post(url, data)
      .then(response => response.data);
}

const PUT = (url, data) => {
    return axios.put(url, data)
      .then(response => response.data);
}

const DELETE = (url) => {
    return axios.delete(url)
      .then(response => `${response.status} ${response.statusText}`);
}

export { GET, POST, PUT, DELETE };
