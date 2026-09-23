const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoasService = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoasService);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoasService.pegaMatriculasPorEstudante(Number(estudanteId));

      return res.status(200).json(listaMatriculas);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PessoaController;