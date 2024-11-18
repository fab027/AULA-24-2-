function DarResultado() {

    var X = parseFloat(document.getElementById('X').value);
    var Y = parseFloat(document.getElementById('Y').value);
    

    var operacao = document.getElementById('Calculadora').value;
    var resultado;


    if (operacao === 'Soma') {
        resultado = CalcularSoma(X, Y);
    } 
    else if (operacao === 'Subtracao') {
        resultado = CalcularSubtracao(X, Y);
    } 
    else if (operacao === 'Divisao') {
        resultado = CalcularDivisao(X, Y);
    } 
    else if (operacao === 'Multiplicacao') {
        resultado = CalcularMultiplicacao(X, Y);
    }

    
    alert('O resultado da operação é: ' + resultado);
}


function CalcularSoma(X, Y) {
    return X + Y;
}

function CalcularSubtracao(X, Y) {
    return X - Y;
}

function CalcularDivisao(X, Y) {
    if (Y === 0) {
        return "Erro: Divisão por zero!";
    }
    return X / Y;
}

function CalcularMultiplicacao(X, Y) {
    return X * Y;
}
