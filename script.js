function isPalindrome(str) {

    const fraseFormatada = str.toLowerCase().replaceAll(' ', '');
    const frase = fraseFormatada.split('');
    const fraseAoContrario = frase.reverse();
    const fraseAoContrarioString = fraseAoContrario.join('');


    if (fraseFormatada === fraseAoContrarioString) {
        return true
    } else {
        return false
    }

}


function arrayMaxMin(arr) {
    let max = 0;
    let min = 0;
    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        const numeroAtual = arr[i];
        if (numeroAtual > max) {
            max = numeroAtual
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const numeroAtual = arr[i];
        if (numeroAtual < min || min === 0){
            min = numeroAtual
        }
    }


    resultado[0] = min
    resultado[1] = max
    console.log(resultado)
    return resultado
}











