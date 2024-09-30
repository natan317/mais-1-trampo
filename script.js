function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    resultado.innerText = '';

    if (numero === '') {
        resultado.innerText = '<p>Por favor, insira um número válido. <p>';
        return;
    }
    for (let i = 1; i < 11; i++) {
        const multiplicacao = numero * i;

        const linha = document.createElement('p');
        linha.textContent = `${numero} x ${i} = ${multiplicacao}`;

        resultado.appendChild(linha);
    }

}