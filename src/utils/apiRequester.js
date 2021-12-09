import axios from "axios";

/***
 *
 * Base value holder class
 *
 ***/
export class RequestBase {
  static token = "";

  static changeToken(jwt) {
    RequestBase.token = jwt;
  }
}

/***
 *
 * POST Request Handler
 *
 ***/
export const Post = async (path, json) => {
  const response = {};

  try {
    const { data } = await axios.post(`${process.env.API_BASE_URL}/${path}`, json, {
      headers: {
        Authorization: `Bearer ${RequestBase.token}`,
      },
    });

    response.result = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

/***
 *
 * POST Request Handler
 *
 ***/
export const PostPublic = async (path, json) => {
  const response = {};

  try {
    const { data } = await axios.post(`${process.env.API_BASE_URL}/${path}`, json);

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
    const { data } = await axios.get(`${process.env.API_BASE_URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${RequestBase.token}`,
      },
    });

    response.result = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

/***
 *
 * Public GET Request Handler
 *
 ***/
export const GetPublic = async (path, json) => {
  const response = {};

  try {
    const { data } = await axios.get(`${process.env.API_BASE_URL}/${path}`, json);

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
    const { data } = await axios.delete(`${process.env.API_BASE_URL}/${path}`, {
      headers: {
        Authorization: `Bearer ${RequestBase.token}`,
      },
    });

    response.result = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};
