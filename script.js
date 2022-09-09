const area = document.querySelector(".area")
const mensaje = document.querySelector(".mensaje")

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){

    const textoEncriptado = encriptar(area.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage ="none"
    area.value = ""
}

function btnDesencriptar(){

    const textoDesencriptado = Desencriptar(area.value)
    mensaje.value = textoDesencriptado;
    area.value = ""
}

function btnDesencriptar(){

    const textoDesencriptado = Desencriptar(area.value)
    mensaje.value = textoDesencriptado;
    area.value = ""
}

function btncopiar(){

    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("El mensaje ha sido copiado")
}


function encriptar (StringEncriptado){

    let matrizarreglo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase();

    for (let i= 0; i < matrizarreglo.length; i++ ){
        if(StringEncriptado.includes(matrizarreglo[i][0])){

            StringEncriptado = StringEncriptado.replaceAll(matrizarreglo[i][0], matrizarreglo[i][1])

        }

 }

        return StringEncriptado;
}

function Desencriptar (StringDesencriptado){

    let matrizarreglo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    StringDesencriptado = StringDesencriptado.toLowerCase();

    for (let i= 0; i < matrizarreglo.length; i++ ){
        if(StringDesencriptado.includes(matrizarreglo[i][1])){

            StringDesencriptado = StringDesencriptado.replaceAll(matrizarreglo[i][1], matrizarreglo[i][0])

        }

 }

        return StringDesencriptado;
}