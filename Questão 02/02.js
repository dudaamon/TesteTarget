const sequenciaFibonacci = (n) => {
    let numerosFibonacci = [0, 1]

    for (i = 2; i < n; i++) {
        let proxNumero = numerosFibonacci[i - 1] + numerosFibonacci[i - 2]
        numerosFibonacci.push(proxNumero);
    }

    return numerosFibonacci;
}

let numero = 21
let sequencia = sequenciaFibonacci(numero);

if (sequencia.includes(numero)) {
    console.log(`O número ${numero} está na sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não está na sequência de Fibonacci.`);
}