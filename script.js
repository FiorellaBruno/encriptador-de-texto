const textArea = document.querySelector(".text-area");
const encriptacion = document.querySelector(".texto__desencriptado");


function btnEncriptador(){
    const textoEncriptado = encriptador(textArea.value);
    encriptacion.value = textoEncriptado;
}

function encriptador(stringEncriptacion){
    let matrizCodificacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptacion=stringEncriptacion.toLowerCase();

    for (let i = 0; i < matrizCodificacion.length; i++) {
        if (stringEncriptacion.includes(matrizCodificacion[i][0])) {
            stringEncriptacion=stringEncriptacion.replaceAll(matrizCodificacion[i][0],matrizCodificacion[i][1]);
            
        }
        
    }
    return stringEncriptacion;
}
