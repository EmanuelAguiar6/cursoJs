//Receber valor bruto e benefícios
// Valor bruto do salário - percentual de imposto mediante a faixa salaral + adicional dos benefícios

//Para calcular o percentual do imposto, segue as aliquotas

//    De R$ 0.00 a R$ 1.100 = 5.00%
//    De R$ 1100.01 a R$ 2500.00 = 10.00% 
//    Maior que R$ 2500.00 = 15.00%


const { gets, print } = require('./funcoes-auxiliares')

const valorSalario = gets();
const valorBeneficios = gets();

function calculadoraPorcentagem(valor, percentual){
  return valor * (percentual / 100);
}

function pegarAliquota(salario){
  if(salario >= 0.00 && salario <= 1100){
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500){
    return 10;
  } else if (salario > 2500){
    return 15;
  }
}


const aliquotaImposto = pegarAliquota(valorSalario)
const valorImposto = calculadoraPorcentagem(valorSalario, aliquotaImposto)

const valorTransferir = valorSalario - valorImposto + valorBeneficios

print(valorTransferir)
