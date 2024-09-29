function soma(vitorias, derrotas) {
    return vitorias - derrotas
}
let saldoVitoria = soma(500, 5)



let nivel = ""
if (saldoVitoria <= 10) {
    nivel = "ferro"
} else if (saldoVitoria >= 11 && saldoVitoria < 20) {
    nivel = "bronze"
} else if (saldoVitoria >= 21 && saldoVitoria < 50) {
    nivel = "prata"
} else if (saldoVitoria >= 51 && saldoVitoria < 80) {
    nivel = "ouro"
} else if (saldoVitoria >= 81 && saldoVitoria < 90) {
    nivel = "diamante"
} else if (saldoVitoria >= 91 && saldoVitoria < 100) {
    nivel = "lendário"
} else if (saldoVitoria >= 101) {
    nivel = "radiante"
}

console.log("O Herói tem de saldo de " + saldoVitoria + " está no nível de " + nivel)