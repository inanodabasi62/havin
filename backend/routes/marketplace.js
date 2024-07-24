const express = require('express');
const router = express.Router();
const { getProductsFromMarketplace } = require('../services/marketplace');

router.get('/products', async (req, res) => {
  const { marketplace, query } = req.query;
  try {
    const products = await getProductsFromMarketplace(marketplace, query);
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
