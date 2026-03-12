const estaciones = [
    { nombre: "Primavera", icono: "IMG/flor.png", msj: "Las flores del cerezo florecen bajo el sol cálido de la primavera." },
    { nombre: "Verano", icono: "IMG/sol.png", msj: "Verano, es el mejor cuento que se tiene que contar." }
];

let indice = 0;

const boton = document.getElementById("boton-estacion");
const cuerpo = document.body;
const icono = document.getElementById("icono-estacion");
const titulo = document.getElementById("titulo-estacion");
const mensaje = document.getElementById("mensaje-estacion");
const capaFondo = document.getElementById("fondo-animado");


function actualizarParticulas(estacion) {
    if (estacion === "Primavera") {
        capaFondo.innerHTML = `<span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span><span>🌸</span>`;
    } else if (estacion === "Verano") {
        capaFondo.innerHTML = `<span>☀️</span><span>☀️</span><span>☀️</span><span>☀️</span><span>☀️</span>`;
    }
    
}


actualizarParticulas(estaciones[indice].nombre);

boton.addEventListener('click', () => {

    icono.classList.add('cambio-icono');

    setTimeout(() => {

        indice = (indice + 1) % estaciones.length;
        const actual = estaciones[indice];


        cuerpo.className = actual.nombre.toLowerCase(); 


        icono.src = actual.icono;
        titulo.textContent = actual.nombre;
        mensaje.textContent = actual.msj;

        actualizarParticulas(actual.nombre);

        icono.classList.remove('cambio-icono');
    }, 600); 
});