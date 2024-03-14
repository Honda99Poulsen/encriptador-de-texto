
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('texto').addEventListener('input', function(event) {
        let texto = event.target.value;
        
        texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
       
        texto = texto.toLowerCase();
        
        event.target.value = texto;
    });
});

function encriptarTexto(){
    
    let texto = document.getElementById('texto').value;
    let newText = texto;

    if(texto == ''){
        return;;
    }
        
    newText = newText.replace(/e/g, 'enter')
    newText = newText.replace(/i/g, 'imes')
    newText = newText.replace(/a/g, 'ai')
    newText = newText.replace(/o/g, 'ober')
    newText = newText.replace(/u/g, 'ufaf')

    console.log(texto);

    quitarImagen('mensajeFinal');
    
    modificarHTML('salidaDatos', newText);
    modificarHTML('salidaDatosP', '');

    modificarCSS('salidaDatos', 'font-size', '24px');
    modificarCSS('salidaDatos', 'font-weight', '400');

    mostrarBotonPorId('copiar', 'hidden');
    mostrarBotonPorId('copiar', 'disabled');

}

function quitarImagen(id){
    let elemento = document.getElementById(id);
    let imagen = elemento.querySelector('img');
    if(imagen){
        imagen.remove();
    } else {
        console.log('No se ha encontrado imagen');
    }
}


function modificarCSS(id, caracteristica, descripcion){
    let modify = document.getElementById(id);
    modify.style[caracteristica] = descripcion;
}

function copiarTexto(){
    let texto = document.getElementById('salidaDatos').textContent;

    navigator.clipboard.writeText(texto);
}

function mostrarBotonPorId(id, atributo){
    let mostrar = document.getElementById(id);
    mostrar.removeAttribute(atributo);
}

function modificarHTML(id, text){
    let salida = document.getElementById(id);
    salida.innerHTML = text;
}


function desencriptarTexto(){

    let texto = document.getElementById('texto').value;
    console.log(texto);
    let nuevoTexto = texto;
    if(texto == ''){
        return;
    }

    nuevoTexto = nuevoTexto.replace(/enter/g, 'e');
    nuevoTexto = nuevoTexto.replace(/imes/g, 'i');
    nuevoTexto = nuevoTexto.replace(/ai/g, 'a');
    nuevoTexto = nuevoTexto.replace(/ober/g, 'o');
    nuevoTexto = nuevoTexto.replace(/ufat/g, 'u');

    quitarImagen('mensajeFinal');
    
    modificarHTML('salidaDatos', nuevoTexto);
    modificarHTML('salidaDatosP', '');

    modificarCSS('salidaDatos', 'font-size', '24px');
    modificarCSS('salidaDatos', 'font-weight', '400');

    mostrarBotonPorId('copiar', 'hidden');
    mostrarBotonPorId('copiar', 'disabled');
}