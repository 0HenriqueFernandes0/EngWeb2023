var axios = require('axios')

// Student list
module.exports.list = () => {
    return axios.get('http://localhost:3000/tasks')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
}

module.exports.Done = (id) => {
    return axios.get('http://localhost:3000/tasks/'+id)
        .then(resposta => {
            task= resposta.data
            task.Done = 1
            return axios.put('http://localhost:3000/tasks/'+id,task)
                .then(resposta => {
                    return axios.get('http://localhost:3000/tasks')
                        .then(resposta => {
                            return resposta.data
                        })
                        .catch(erro => {
                            return erro
                        })
                })
                .catch(erro => {
                    return erro
                })
        })
        .catch(erro => {
            return erro
        })

}

module.exports.Delete = (id) => {
    return axios.delete('http://localhost:3000/tasks/'+id)
        .then(resposta=>{
            return axios.get('http://localhost:3000/tasks')
            .then(resposta => {
                return resposta.data
            })
            .catch(erro => {
                return erro
            })
        })
        .catch(erro => {
            return erro
        })

}