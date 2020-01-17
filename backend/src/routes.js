const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de params:

//Query params: request.query (Filtros, ordenação, paginação)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

routes.get("/devs", DevController.index);
routes.get("/devs/:username", DevController.show);
routes.post("/devs", DevController.store);
routes.put("/devs", DevController.update);
routes.delete("/devs", DevController.destroy);

routes.get("/search", SearchController.index);

module.exports = routes;
