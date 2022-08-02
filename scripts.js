let jogador = undefined;
let computador = undefined;

function jogar(escolha) {
    jogador = escolha
    computador = Math.floor(Math.random() * (3 - 1 + 1)) + 1
        
    if (jogador === computador) {
        document.getElementById("visor").value = "EMPATE - JOGUE NOVAMENTE"
      } else if (jogador === 1 && computador === 2) {
        document.getElementById("visor").value = "COMPUTADOR VENCEU"
      } else if (jogador === 1 && computador === 3) {
        document.getElementById("visor").value = "VOCÊ VENCEU"
      } else if (jogador === 2 && computador === 1) {
        document.getElementById("visor").value = "VOCÊ VENCEU"
      } else if (jogador === 2 && computador === 3) {
        document.getElementById("visor").value = "COMPUTADOR VENCEU"
      } else if (jogador === 3 && computador === 1) {
        document.getElementById("visor").value = "COMPUTADOR VENCEU"
      } else if (jogador === 3 && computador === 2) {
        document.getElementById("visor").value = "VOCÊ VENCEU"
      }
}