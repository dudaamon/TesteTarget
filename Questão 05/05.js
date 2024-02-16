function inverterString(string) {
    let novaString = '';
    for (let caractere of string) {
        novaString = caractere + novaString;
    }
    return novaString;
}

const stringOriginal = "javascript";
const stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida); 