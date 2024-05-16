var Contrato = require('../models/contrato')

// GET /contratos
module.exports.list = () => {
    return Contrato.find().sort({nome: 1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })

}

// GET /contratos/:id
module.exports.getContrato = id => {
    return Contrato.findOne({_id: id})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

// GET /contratos?entidade=EEEE:
module.exports.getContratoEntidade = e => {
    return Contrato.find({"NIPC_entidade_comunicante": e})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

// GET /contratos?tipo=AAA
module.exports.getContratoTipo = i => {
    return Contrato.find({"tipoprocedimento": i})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

// GET /contratos/entidades: 
// lista ordenada alfabeticamente e sem repetições
module.exports.getEntidades = () => {
    return Contrato.distinct("entidade_comunicante").sort()
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

// GET /contratos/tipos: 
// lista ordenada alfabeticamente e sem repetições
module.exports.getTipos = () => {
    return Contrato.distinct("tipoprocedimento").sort()
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

// POST /contratos
// adicionar registo a db
module.exports.addContrato = p => {
    return Contrato.find({}, {_id: 1})
    .then(qtd => {
        var list = qtd.map( obj => {
            return {_id: obj._id};
        });

        list.sort((a,b) => parseInt(b._id) - parseInt(a._id));
        var next = parseInt(list[0]._id) + 1;
        p._id = next
        return Contrato.create(p)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
    })
    .catch(erro => {
        return erro
    })
}



// DELETE /contratos/:id:
module.exports.deleteContrato = id => {
    return Contrato.deleteOne({_id: id})
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}

// PUT /contratos/:id:
module.exports.updateContrato = p => {
    return Contrato.updateOne({_id: p._id}, p)
    .then(dados => {
        return dados
    })
    .catch(erro => {
        return erro
    })
}
