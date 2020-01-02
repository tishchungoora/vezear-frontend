const API_ENDPOINT = "http://localhost:4000";
const PRODUCT_CATEGORIES_URL = `${API_ENDPOINT}/product_categories`;
const PRODUCTS_URL = `${API_ENDPOINT}/products`;
const BUSINESS_CATEGORIES_URL = `${API_ENDPOINT}/business_categories`;

const jsonify = response => response.json();

const fetchProductCategories = () => {
  return fetch(PRODUCT_CATEGORIES_URL).then(jsonify);
};

const fetchProducts = () => {
  return fetch(PRODUCTS_URL).then(jsonify);
};

const fetchBusinessCategories = () => {
    return fetch(BUSINESS_CATEGORIES_URL).then(jsonify);
  };

export default {
  fetchProductCategories,
  fetchProducts,
  fetchBusinessCategories
};
