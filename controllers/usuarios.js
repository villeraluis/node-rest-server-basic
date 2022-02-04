const { response } = require('express')

const usuariosGet = (req, res = response) => {
    const  query= req.query

    res.json({
        msg: 'get API contrllador',
        query
    })
}


const usuariosPost = (req, res = response) => {

    const {nombre,id}=req.body

    res.json({
        msg: 'post API',
        nombre,
        id
    })
}

const usuariosPut = (req, res = response) => {

    const {id}= req.params
    res.json({
        msg: 'put API',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delet API-cont'
    })
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API-Con'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch

}