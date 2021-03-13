const { ipcRenderer } = require('electron');
const { obtenerClima, obtenerTemperatura } = require('./api-clima');

const hoy = new Date();
let anio = hoy.getFullYear();
let mes = hoy.getMonth() + 1;
if (mes < 10) { mes = '0' + mes; }
let dia = hoy.getDate();

let formulario = document.querySelector('#consulta');
let campoFecha = document.querySelector('#fecha');
let contenedor = document.querySelector('.card-deck');
let fecha = '';

campoFecha.addEventListener('change', ()=>{
    fecha = document.querySelector('#fecha').value;
}) ;

formulario.addEventListener('submit', (event) => {
    let climasHoy = [];
    event.preventDefault();
    
    if (fecha == '' || fecha == `${anio}-${mes}-${dia}`) {
        ipcRenderer.send('agrandar');
        contenedor.innerHTML = `<div><img src="./images/cargando.gif" alt="Cargando"></img></div>`
        obtenerClima()
        .then(clima => {
            climasHoy[0] = clima;
            return obtenerTemperatura()})
        .then(temperatura => {
            contenedor.innerHTML = `<div class="card">
            <div class="card-header">
                Clima de la mañana
              </div>
            <img class="card-img-top" src="./images/${climasHoy[0]}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}°</h1>
                <h3>${climasHoy[0]}</h3>
                <span class="badge badge-pill tag-blue">${dia}/${mes}/${anio}</span>
            </div>`
        })
        .catch(error => alert(error));
        obtenerClima()
        .then(clima => {
            climasHoy[1] = clima;
            return obtenerTemperatura()})
        .then(temperatura => {
            contenedor.innerHTML += `<div class="card">
            <div class="card-header">
                Clima de la tarde
              </div>
            <img class="card-img-top" src="./images/${climasHoy[1]}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}°</h1>
                <h3>${climasHoy[1]}</h3>
                <span class="badge badge-pill tag-blue">${dia}/${mes}/${anio}</span>
            </div>`
        })
        .catch(error => alert(error));

        obtenerClima()
        .then(clima => {
            climasHoy[2] = clima;
            return obtenerTemperatura()})
        .then(temperatura => {
            contenedor.innerHTML += `<div class="card">
            <div class="card-header">
                Clima de la noche
              </div>
            <img class="card-img-top" src="./images/${climasHoy[2]}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}°</h1>
                <h3>${climasHoy[2]}</h3>
                <span class="badge badge-pill tag-blue">${dia}/${mes}/${anio}</span>
            </div>`
        })
        .catch(error => alert(error));

    } else {
        ipcRenderer.send('disminuir');
        contenedor.innerHTML = `<div><img src="./images/cargando.gif" alt="Cargando"></img></div>`
        obtenerClima()
        .then(clima => {
            climasHoy[0] = clima;
            return obtenerTemperatura()})
        .then(temperatura => {
            contenedor.innerHTML = `<div class="card">
            <div class="card-header">
                Clima de la mañana
              </div>
            <img class="card-img-top" src="./images/${climasHoy[0]}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}°</h1>
                <h3>${climasHoy[0]}</h3>
                <span class="badge badge-pill tag-blue">${fecha}</span>
            </div>`
        })
        .catch(error => alert(error));
    }
});