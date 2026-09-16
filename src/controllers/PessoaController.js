const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoasService = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoasService);
  }
}

module.exports = PessoaController;