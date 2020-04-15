const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default:true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer (yargs)',{
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de la tarea',{
        descripcion,
        completado
     
    })
    .command('borrar', 'Borrando el elemento',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}    