const express = require('express');
const router = express.Router();

// const tradesController = require('../controllers/trades');

router.get("/", tradesController.trades_get_all);

// router.post("/", checkAuth, OrdersController.orders_create_order);
//
// router.get("/:orderId", checkAuth, OrdersController.orders_get_order);
//
// router.delete("/:orderId", checkAuth, OrdersController.orders_delete_order);

module.exports = router;
