const { ipRenderer, ipcRenderer } = require('electron');
const { obtenerClima, obtenerTemperatura } = require('./api-clima');

const hoy = new Date();
let anio = hoy.getFullYear();
let mes = hoy.getMonth() + 1;
if (mes < 10) { mes = '0' + mes; }
let dia = hoy.getDate();
let climaActual = '';


let formulario = document.querySelector('#consulta');
let campoFecha = document.querySelector('#fecha');
let contenedor = document.querySelector('.card-deck');
let fecha = '';
campoFecha.addEventListener('change', ()=>{
    fecha = document.querySelector('#fecha').value;
}) ;


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    if (fecha == '') {
        obtenerClima
        .then(clima => {
            climaActual = clima;
            return obtenerTemperatura})
        .then(temperatura => {
            contenedor.innerHTML = `<div class="card">
            <div class="card-header">
                Clima de la mañana
              </div>
            <img class="card-img-top" src="./images/${climaActual}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}</h1>
                <h3>${climaActual}</h3>
                <span class="badge badge-pill tag-blue">${dia}/${mes}/${anio}</span>
            </div>`
        })
        .catch(error => alert(error));


        obtenerClima
        .then(clima => {
            climaActual = clima;
            return obtenerTemperatura})
        .then(temperatura => {
            contenedor.innerHTML += `<div class="card">
            <div class="card-header">
                Clima de la tarde
              </div>
            <img class="card-img-top" src="./images/${climaActual}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}</h1>
                <h3>${climaActual}</h3>
                <span class="badge badge-pill tag-blue">${dia}/${mes}/${anio}</span>
            </div>`
        })
        .catch(error => alert(error));

        obtenerClima
        .then(clima => {
            climaActual = clima;
            return obtenerTemperatura})
        .then(temperatura => {
            contenedor.innerHTML += `<div class="card">
            <div class="card-header">
                Clima de la noche
              </div>
            <img class="card-img-top" src="./images/${climaActual}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}</h1>
                <h3>${climaActual}</h3>
                <span class="badge badge-pill tag-blue">${dia}/${mes}/${anio}</span>
            </div>`
        })
        .catch(error => alert(error));

    } else {
        obtenerClima
        .then(clima => {
            climaActual = clima;
            return obtenerTemperatura})
        .then(temperatura => {
            contenedor.innerHTML = `<div class="card">
            <div class="card-header">
                Clima de la mañana
              </div>
            <img class="card-img-top" src="./images/${climaActual}.png" alt="Card image cap">
            <div class="card-body">
                <h1>${temperatura}</h1>
                <h3>${climaActual}</h3>
                <span class="badge badge-pill tag-blue">${fecha}</span>
            </div>`
        })
        .catch(error => alert(error));
    }
    

});

