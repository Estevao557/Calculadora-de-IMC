const calcIMC = () => {
    let imc = '';
    let classificacao = '';

    // Verifica se os campos altura e peso não estão vazios
    if (altura.value !== '' && peso.value !== '') {    
        // Calcula o IMC
        imc = (pesoNum / (alturaNum * alturaNum)).toFixed(2);

        if (imc < 18.5) {
            classificacao = 'Magreza';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Normal';
        } else if (imc >= 24.9 && imc < 30) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30) {
            classificacao = 'Obesidade';
        }

       
        resultado.innerHTML = `IMC: ${imc} (${classificacao})`;
    } else {
        
        resultado.innerHTML = 'Preencha os campos';
    }
}