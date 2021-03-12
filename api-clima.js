const climas = ['despejado', 'nublado', 'lluvioso'];


const aleatorio = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

const obtenerClima = new Promise((resolve, reject) => {
        let clima = '';
        clima = climas[aleatorio(0,2)]
        setTimeout(
            () => clima != ''
                ? resolve(clima)
                : reject(new Error('no encontrado')),
            3000
        );
    });

    const obtenerTemperatura = new Promise((resolve, reject) => {
        let temperatura;
        temperatura = aleatorio(5,30);
        setTimeout(
            () => temperatura >= 5
                ? resolve(temperatura)
                : reject(new Error('no encontrado')),
            3000
        );
    });

module.exports = {
    obtenerClima,
    obtenerTemperatura

}