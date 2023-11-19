function modoVermelho() {
    var body = document.body;
    body.classList.toggle("modo-vermelho");
}

document.getElementById('vermelho').addEventListener('click', modoVermelho);

document.querySelectorAll('.aposta1').forEach(item => { 
    item.addEventListener('click', function () {
        var escolha = prompt('Para Pablo digite 1, para Junin digite 2:');
        
        if (escolha === '1') {
            alert('Aposta feita em Pablo');
        } else if (escolha === '2') {
            alert('Aposta feita em Junin');
        } else {
            alert('Escolha inválida.');
        }
    });
});

document.querySelectorAll('.aposta2').forEach(item => { 
    item.addEventListener('click', function () {
        var escolha = prompt('Para Pedrinho digite 1, para Rogerio digite 2:');
        
        if (escolha === '1') {
            alert('Aposta feita em Pedrinho');
        } else if (escolha === '2') {
            alert('Aposta feita em Rogerio');
        } else {
            alert('Escolha inválida.');
        }
    });
});