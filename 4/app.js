const elemento1Input = document.querySelector('#elemento1');
const elemento2Input = document.querySelector('#elemento2');
const elemento3Input = document.querySelector('#elemento3');

const formulario = document.querySelector('#nueva-mezcla');

class UI{
    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');

        if(tipo === 'error'){
            divMensaje.classList.add('alert');
        } else{
            divMensaje.classList.add('success');
        }
        //MENSAJE
        divMensaje.textContent = mensaje;

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-mezcla'));

        //QUITAR ALERTA
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
    }
    mostrarGif(){
        // var load = document.createElement('img');
        // load.src = "https://media.giphy.com/media/3o8dp3TMpRhwcpgc7e/giphy.gif";

        // document.getElementById('show-gif').appendChild(load);
        var elem = document.getElementById('show-gif');
        elem.style.visibility="visible";
        elem.src = "IMG/a.gif";
        setTimeout( () => {
            elem.style.visibility="hidden";
            document.getElementById('myImage').src='IMG/gif1.gif';
        }, 7000);
        
    }

}

const ui = new UI();

eventListeners();

function eventListeners(){
    elemento1Input.addEventListener('change', datosElemento1);
    elemento2Input.addEventListener('change', datosElemento1);
    elemento3Input.addEventListener('change', datosElemento1);
   
    formulario.addEventListener('submit', nuevaMezcla);
}

const mezclaObjetos = {
    elemento1: '',
    elemento2: '',
    elemento3: '',
 }
function datosElemento1(e){
    mezclaObjetos[e.target.name] = e.target.value;

    // console.log(mezclaObjetos);
}

//VALIDA UNA NUEVA MEZCLA
function nuevaMezcla(e){
    e.preventDefault();

    //EXTRAIGO
    const {elemento1, elemento2, elemento3} = mezclaObjetos;

    //VALIDO
    if(elemento1 === '' || elemento2 === '' || elemento3 === '' ){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }
    if(elemento1 !="100" || elemento2 !="500" || elemento3 !="1" ){
        ui.imprimirAlerta('Valores Incorrectos, Dirijase a los diagramas de flujo', 'error');
        return;
    }

    ui.mostrarGif();
    return;

}
