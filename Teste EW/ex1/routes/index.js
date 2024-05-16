var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');



/* GET /contratos/entidades: */
router.get('/contratos/entidades', function(req, res, next) {
  Contrato.getEntidades()
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das lista de Entidades"})
    })
});

/* GET /contratos/tipos */
router.get('/contratos/tipos', function(req, res, next) {
  Contrato.getTipos()
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das lista de Tipos de Procedimentos"})
    })
});


/* GET /contratos:
   GET /contratos?entidade=EEEE
   GET /contratos?tipo=AAA
*/
router.get('/contratos', function(req, res, next) {
  if(req.query.entidade){
    Contrato.getContratoEntidade(req.query.entidade)
      .then(listas => {
        res.jsonp(listas)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção das lista de contratos"})
      })
  }
  else if(req.query.tipo){
    Contrato.getContratoTipo(req.query.tipo)
      .then(listas => {
        res.jsonp(listas)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção das lista de contratos"})
      })
  }
  else{
    Contrato.list()
      .then(listas => {
        res.jsonp(listas)
      })
      .catch(erro => {
        res.render('error', {error: erro, message: "Erro na obtenção das lista de contratos"})
      })
  }
});


/* GET /contratos/:id: */
router.get('/contratos/:id', function(req, res, next) {
  Contrato.getContrato(req.params.id)
    .then(p => {
      res.jsonp(p)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do contrato" + req.params.id})
    })
});

/* POST /contratos

{
    "_id": 666,
    "nAnuncio": "187/2025",
    "tipoprocedimento": "Concurso público",
    "objectoContrato": "Autocarros grátis para alunos da UM",
    "dataPublicacao": "01/01/2025",
    "dataCelebracaoContrato": "02/01/2025",
    "precoContratual": 6666,
    "prazoExecucao": 854,
    "NIPC_entidade_comunicante": 123443210,
    "entidade_comunicante": "União das Freguesias de Gualtar",
    "fundamentacao": "Artigo 667.º, n.º 45, alínea z) do Código dos Transportes Públicos"
  }

*/

router.post('/contratos', function(req, res, next) {
  Contrato.addContrato(req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção do Contrato"})
    })
});

/* PUT /contratos/:id */
router.put('/contrato/:id', function(req, res, next) {
  req.body._id = req.params.id
  Contrato.updateContrato(req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na atualização do Contrato"})
    })
});

/* DELETE /contratos/:id

Example delete using curl:
*/
router.delete('/contratos/:id', function(req, res, next) {
  Contrato.deleteContrato(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na eliminação do Contrato"})
    })
});



module.exports = router;
