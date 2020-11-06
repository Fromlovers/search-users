const API_URL = 'http://localhost:8000';

const http = {
  async get(uri, params, headers = {}) {
    const prepandParams = Object.keys(params).length
      ? `?${Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key])}`).join('&')}`
      : '';

    const response = await fetch(API_URL + uri + prepandParams, { method: 'GET', headers });

    return response;
  },

  async post(uri, params, headers = {}) {
    const response = await fetch(`${API_URL}${uri}`, { method: 'POST', headers, body: params });
    return response;
  },
};

export default http;
