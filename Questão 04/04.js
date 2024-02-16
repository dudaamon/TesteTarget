const faturamentos = {
    'SP': 67.836,
    'RJ': 36.678,
    'MG': 29.229,
    'ES': 27.165,
    'Outros': 19.849,
}

let totalFaturamento = 0;

for (let estado in faturamentos) {
    totalFaturamento += faturamentos[estado];
}

for (let estado in faturamentos) {
    const percentual = (faturamentos[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}