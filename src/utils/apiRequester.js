import axios from "axios";

/***
 *
 * POST Request Handler
 *
 ***/
export const Post = async (path, json) => {
  const response = {};

  try {
    const { data } = await axios.post(`${process.env.API_BASE_URL}/${path}`, json, { withCredentials: true });

    response.result = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

/***
 *
 * GET Request Handler
 *
 ***/
export const Get = async path => {
  const response = {};

  try {
    const { data } = await axios.get(`${process.env.API_BASE_URL}/${path}`, { withCredentials: true });

    response.result = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

/***
 *
 * DELETE Request Handler
 *
 ***/
export const DELETE = async path => {
  const response = {};

  try {
    const { data } = await axios.delete(`${process.env.API_BASE_URL}/${path}`);

    response.result = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};
