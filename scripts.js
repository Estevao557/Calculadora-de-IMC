const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classificacao = ''


    if (imc < 18.5) {
        classificacao = 'Magreza';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Normal';
    } else if (imc >= 24.9 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30) {
        classificacao = 'Obesidade';
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classificacao})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}