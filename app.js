function encriptarTexto(){
    let textoFinal = '';
    let textoFinalDos = '';
    let texto = document.getElementById('texto').value;

    function encriptarTexto(){
        
        for (let i = 0; i < texto.length; i++) {
            if(texto[i] == 'e'){
                textoFinal += 'enter';
            }else{
                if(texto[i] == 'i'){
                    textoFinal += 'imes';
                }else{
                    if(texto[i] == 'a'){
                        textoFinal += 'ai';
                    }else {
                        if(texto[i] == 'o'){
                            textoFinal += 'ober';
                        }else {
                            if(texto[i] == 'u'){
                                textoFinal += 'ufat';
                            }else{
                                textoFinal += texto[i];
                            }
                        }
                    }
                }
            }
            
        }
        console.log(texto.length)
        console.log(textoFinal.length)
    }
    encriptarTexto();

    function desencriptarTexto(){
        for (let i = 0; i < textoFinal.length; i++) {
            if(textoFinal[i] == 'e'){
                if(textoFinal[i+1] == 'n'){
                    if(textoFinal[i+2] == 't'){
                        if(textoFinal[i+3] == 'e'){
                            if(textoFinal[i+4] == 'r'){
                                textoFinalDos += 'e';
                                console.log(true)
                            }
                        }
                    }
                }
            }
        }
        console.log(textoFinalDos);
    }
    desencriptarTexto()

    let salida = document.getElementById('salidaDatos'). value = textoFinal;
}

