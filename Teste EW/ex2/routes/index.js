var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);

  axios.get('http://localhost:16001/contratos')
    .then(dados => {
      res.render('contratos', { contratos: dados.data, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro});
    });
});


router.get('/:id', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);

  axios.get('http://localhost:16001/contratos/' + req.params.id)
    .then(dados => {
      res.render('contrato', { contrato: dados.data, d: data });
       
    })
    .catch(erro => {
      res.render('error', {error: erro});
    });
});


router.get('/contratos/:id', async function(req, res) {
  try {
    const data = new Date().toISOString().substring(0, 16);

    const response = await axios.get(`http://localhost:16001/entidades/${req.params.id}`);
    const entidade = response.data;

    let totalContratos = 0;
    entidade.forEach(contrato => {
      totalContratos += contrato.precoContratual;
    });
    
  } catch (error) {
    res.render('error', {error: error});
  }
});
