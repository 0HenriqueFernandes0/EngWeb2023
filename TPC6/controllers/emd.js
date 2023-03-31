var Emd = require('../models/emd')

// emd list
module.exports.list = () => {
    return Emd
        .find()
        .sort({data:-1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getEmd = id => {
    return Emd.findOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addEmd = e => {
    return Emd.create(e)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.updateEmd = e => {
    return Emd.updateOne({_id: e._id}, e)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}


module.exports.deleteEmd = id => {
    return Emd.deleteOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}