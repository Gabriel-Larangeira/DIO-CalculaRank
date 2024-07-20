function calcular() {
    const nome = document.getElementById("nome").value.trim();
    const vitorias = document.getElementById("vitorias").value.trim();
    const derrotas = document.getElementById("derrotas").value.trim();

    var vitorias_int = parseInt(vitorias);
    var derrotas_int = parseInt(derrotas);
    var resultado = vitorias_int - (derrotas_int * 2);

    if (resultado < 10) {
        rank = 'Ferro';
    } else if (resultado >= 11 && resultado <= 20) {
        rank = 'Bronze';
    } else if (resultado >= 21 && resultado <= 50) {
        rank = 'Prata';
    } else if (resultado >= 51 && resultado <= 80) {
        rank = 'Ouro';
    } else if (resultado >= 81 && resultado <= 90) {
        rank = 'Diamante';
    } else if (resultado >= 91 && resultado <= 100) {
        rank = 'Lendário';
    } else if (resultado >= 101) {
        rank = 'Imortal';
    }

    alert(nome + " o seu rank é: " + rank)
}