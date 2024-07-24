const axios = require('axios');

const getProductsFromMarketplace = async (marketplace, query) => {
  let url;
  switch (marketplace) {
    case 'amazon':
      url = `https://api.amazon.com/products?search=${query}`;
      break;
    case 'alibaba':
      url = `https://api.alibaba.com/products?search=${query}`;
      break;
    case 'ebay':
      url = `https://api.ebay.com/products?search=${query}`;
      break;
    default:
      throw new Error('Unsupported marketplace');
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error('Error fetching products');
  }
};

module.exports = { getProductsFromMarketplace };
