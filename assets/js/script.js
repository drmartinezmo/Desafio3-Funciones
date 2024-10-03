// parrafo 1 sin fondo, click para fondo amarillo
// function pintar(){
//     ele1.style.backgroundColor = 'yellow'
//     }
//     const ele1 = document.getElementById("ele1")
//     ele1.addEventListener("click", pintar);

//Cambio solicitado en desafio
const color = 'yellow';

const pintar = (id) => {
    document.getElementById(id).style.backgroundColor = color;
    };


document.addEventListener('click', (event) => {
    pintar(event.target.id);
    });