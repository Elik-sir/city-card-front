import axios, { AxiosResponse } from 'axios';
// import { deserialise } from 'kitsu-core';
import Qs from 'qs';
import Jsona from 'jsona';


const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  paramsSerializer(params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' });
  },
});

const dataFormatter = new Jsona();

// Если какой-либо запрос к бэкенду возвращает 401 (Unauthorized)
// то сбрасываем информацию об аутентификации
http.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
    }

    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  async (response: AxiosResponse<any> & { meta: any }) => {
    if (!response.data) return response;

    const { data } = response.data;

    // попытка денормализовать данные из формата json:api, если это применимо
    if (data) {
      let deserializedData;

      try {
        // const { data } = await deserialise(response.data);
        // deserializedData = data;
        deserializedData = dataFormatter.deserialize(response.data);
      } catch (e) {
        console.log('json:api deserialization error');
        console.log('e: ', e);
      }

      const meta = response.data.meta; // save
      response.data = deserializedData;
      if (meta) response.meta = meta;
    }

    return response;
  },

  error => {
    return Promise.reject(error);
  },
);

export default http;
