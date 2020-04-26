module.exports = app => {
    
    const secretescapes = require("../controllers/SecretEscapes.controller");

    let router = require("express").Router();


    router.post("/", secretescapes.create);


    router.get("/", secretescapes.findAll);


    router.get("/:id", secretescapes.findOne);


    router.put("/:id", secretescapes.update);


    router.delete("/:id", secretescapes.delete);

 
    router.delete("/", secretescapes.deleteAll);

    app.use('/api/secretescapes', router);
}