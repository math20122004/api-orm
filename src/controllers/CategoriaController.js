const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaService.js');

const categoriaService = new CategoriaServices();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaService);
  }
}

module.exports = CategoriaController;