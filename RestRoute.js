const RestController = require("./RestController");

module.exports = (app) =>{

    app.get("/api", RestController.getData);

    app.get("/fetchDetails/:id", RestController.getId);

    app.get("/getCart/:id", RestController.getCart);

    app.post("/login", RestController.login);

    app.post("/register", RestController.register);

    app.post("/RestuarantList", RestController.restuarantList);

    app.put("/updateList", RestController.updateList);

    app.put("/updateOrder", RestController.updateOrder);

    app.put("/addToCart", RestController.addToCart);

    app.delete("/deleteList", RestController.deleteList);
}