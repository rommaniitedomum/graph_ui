const router = require("express").Router(); 
const visitorsRoute = require("../controllers/customersCtrls");  
router.get("/customers", customersRoute.getCustomers);  

module.exports = router; 
