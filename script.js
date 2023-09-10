function isPalindrome(str){

    const fraseFormatada = str.toLowerCase().replaceAll(' ', '');
    const frase = fraseFormatada.split('');
    const fraseAoContrario = frase.reverse();
    const fraseAoContrarioString = fraseAoContrario.join('');
    

    if (fraseFormatada === fraseAoContrarioString){
        return true
    } else {
        return false
    }
  
}



// function arrayMaxMin(arr){
//     /* Seu código aqui */
// }











