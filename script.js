function isPalindrome(str) {
    const fraseFormatada = str.toLowerCase().replaceAll(' ','');
    const length = fraseFormatada.length;

    for (let inicio = 0, fim = length - 1; inicio < fim; inicio++, fim--) {
        if (fraseFormatada[inicio] !== fraseFormatada[fim]) {
            return false;
        }
    } 

    return true;
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
     
        if (numeroAtual < min || min === 0){
            min = numeroAtual
        }
    }

    resultado[0] = min
    resultado[1] = max
    return resultado
}











