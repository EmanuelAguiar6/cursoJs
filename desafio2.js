const { gets, print } = require('./funcoes-auxiliares');
const n = gets();
let MaiorNumeroPar = 0;
let MenorNumeroImpar = 1;
for (let i = 0; i < n; i++) {
  const numero = gets();
  if (numero % 2 === 0) {
    if(numero > MaiorNumeroPar){
      MaiorNumeroPar = numero;
    }
  } else {
    if(numero === MenorNumeroImpar){
      MenorNumeroImpar = numero;
    } else if(numero < MenorNumeroImpar){
      MenorNumeroImpar = numero;
    }
  }
}
print(MenorNumeroImpar)
print(MaiorNumeroPar)
