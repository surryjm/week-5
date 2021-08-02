// const { Router } = require("express");
// const router = Router();




// Create: POST /orders - open to all users
// Takes an array of item _id values (repeat values can appear). 
// Order should be created with a total field with the total cost of all the items 
// from the time the order is placed (as the item prices could change). 
// The order should also have the userId of the user placing the order.

// Get my orders: GET /orders - return all the orders made by the user making the request

// Get an order: GET /order/:id - return an order with the items array 
// containing the full item objects rather than just their _id. 
// If the user is a normal user return a 404 if they did not place the order. 
// An admin user should be able to get any order.


//module.exports = router;