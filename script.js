const textArea = document.querySelector(".texto__encriptado");
const cifrado = document.querySelector(".cifrado");


function btnEncriptador(){
    const textoEncriptado = encriptador(textArea.value)
    cifrado.value = textoEncriptado;
    textArea.value ="";

    cifrado.style.backgroundImage = "none";

}

function encriptador(stringEncriptacion){
    let matrizCodificacion = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
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

function btnDesencriptador(){
    const textoDesencriptado = desencriptador(textArea.value)
    cifrado.value = textoDesencriptado;
    textArea.value ="";


}

function desencriptador(stringDesencriptacion){
    let matrizCodificacion = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptacion=stringDesencriptacion.toLowerCase();

    for (let i = matrizCodificacion.length - 1; i >= 0; i--) {
        stringDesencriptacion = stringDesencriptacion.replaceAll(matrizCodificacion[i][1], matrizCodificacion[i][0]);
    }
    return stringDesencriptacion;
}

function copiarTexto() {
    const texto = document.querySelector(".cifrado").value;
    
    // Usa la API del portapapeles
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}