import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://belaundry-api.sebaris.link/platform';

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,

        token: await getAccessToken(),
      },
    });
  }

  async function putAccessToken(token) {
    try {
      localStorage.setItem('accessToken', token);
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  async function getAccessToken() {
    try {
      const value = localStorage.getItem('accessToken');

      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }

  async function register(body) {
    const response = await axios.post(`${BASE_URL}/user/sign-up`, {
      ...body,
    });

    const { status, message } = response.data;

    if (status !== 'true') {
      throw new Error(message);
    }

    const { response: token } = response.data;

    return token;
  }

  async function login({ email, password }) {
    const response = await axios.post(`${BASE_URL}/user/sign-in`, {
      email,
      password,
    });

    const { response: token } = response.data;

    return token;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/user/info`);

    const responseJson = await response.json();

    const { response: result } = responseJson;

    return result;
  }

  async function seeAllProducts() {
    const response = await _fetchWithAuth(`${BASE_URL}/product`);

    const responseJson = await response.json();

    const { response: result } = responseJson;

    return result;
  }

  async function seeDetailProduct(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/product/${id}`);

    const responseJson = await response.json();

    const { response: result } = responseJson;

    return result;
  }

  async function seeAllCategories() {
    const response = await _fetchWithAuth(`${BASE_URL}/product/categories`);

    const responseJson = await response.json();

    const { response: result } = responseJson;

    return result;
  }

  async function createProduct(body) {
    const response = await _fetchWithAuth(`${BASE_URL}/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson;
  }

  async function deleteProduct(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/product/${id}`, {
      method: 'DELETE',
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status === false) {
      throw new Error(message);
    }

    return null;
  }

  async function seeAllReport() {
    const response = await _fetchWithAuth(`${BASE_URL}/product/report`);

    const responseJson = await response.json();

    return responseJson;
  }

  return {
    seeAllProducts,
    seeDetailProduct,
    login,
    register,
    putAccessToken,
    getOwnProfile,
    seeAllCategories,
    getAccessToken,
    createProduct,
    deleteProduct,
    seeAllReport,
  };
})();

export default api;
