const botao = document.querySelector(".botao_de_ligar");
const lampada = document.querySelector("#lampada");

function alternarLampada() {
    // Verifica o estado atual da lâmpada, se está ligada ou desligada
    if (lampada.src.includes('lampada_desligada.png')) {
        // Ligar a lâmpada
        lampada.src = './img/lampada_acessa.png';
    } else {
        // Desligar a lâmpada
        lampada.src = './img/lampada_desligada.png';
    }
}

botao.addEventListener('click', alternarLampada);
