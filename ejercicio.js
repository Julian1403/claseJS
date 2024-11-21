let avion = {
    piloto: "Jaime",
    asafatas: [
        {
            nombre: "Camila",
            edad: 25,
            casada: false,
            estatura: 1.70,
            capitana: false
        },
        {
            nombre: "Andrea",
            edad: 29,
            casada: true,
            hijos: [
                {
                    nombre: "Jose",
                    edad: 4
                }
            ],
            estatura: 1.76,
            capitana: true
        }
    ],
    pasajeros: [
        {
            nombre: "jarol",
            profesion: "asesor comfama",
            edad: 36,
            millas: 5000,
            silla: "45A",
            vip: false,
            aerolinea: {
                nombre: "Avianca",
                convenio: 7894
            }
        },
        {
            nombre: "Armando",
            profesion: "Ingeniero",
            edad: 36,
            millas: 15000,
            silla: "15A",
            vip: true,
            aerolinea: {
                nombre: "Latam",
                convenio: 7894
            }
        }
    ]
}

function hijos(obj){
    const{asafatas}=obj;
    const {hijos}=asafatas[1];
    console.log(hijos);
}

hijos(avion);
