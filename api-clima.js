const climas = ['despejado', 'nublado', 'lluvioso'];


function aleatorio (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function obtenerClima(){
    return new Promise((resolve, reject) => {
        let clima = '';
        clima = climas[aleatorio(0,2)]
        console.log(clima);
        setTimeout(
            () => clima != ''
                ? resolve(clima)
                : reject(new Error('no encontrado')),
            1000
        );
    });

}

    function obtenerTemperatura() {
        return new Promise((resolve, reject) => {
            let temperatura;
            temperatura = aleatorio(5,30);
            setTimeout(
                () => temperatura >= 5
                    ? resolve(temperatura)
                    : reject(new Error('no encontrado')),
                1000
            );
        });
    }

module.exports = {
    obtenerClima,
    obtenerTemperatura

}