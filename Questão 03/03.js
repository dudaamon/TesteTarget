const dados = require('./dados.json');

const diasUteis = dados.filter(objeto => objeto.valor > 0);

const menorValor = Math.min(...diasUteis.map(objeto => objeto.valor));
const maiorValor = Math.max(...dados.map(objeto => objeto.valor));

const mediaMensal = (dados) => {
    const diasUteis = dados.filter(objeto => objeto.valor > 0);
    const faturamento = diasUteis.reduce((total, objeto) => total + objeto.valor, 0);
    const diasFaturados = diasUteis.length;
    const media = faturamento / diasFaturados;

    return media;
};

function diasAcimaDaMedia(dados) {
    const media = mediaMensal(dados);

    const diasAcima = dados.reduce((acumulador, objeto) => {
        return objeto.valor > media ? acumulador + 1 : acumulador;
    }, 0);

    return diasAcima;
}
const diasAcima = diasAcimaDaMedia(dados);

console.log("Menor valor de faturamento:", menorValor)
console.log("Maior valor de faturamento:", maiorValor)
console.log("Número de dias acima da média:", diasAcima);