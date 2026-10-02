// Pegando os elementos do DOM
const inputEmail = document.getElementById('email');
const btnAvancar = document.getElementById('btnAvancar');
const btnCancelar = document.getElementById('btnCancelar');
const chaosForm = document.getElementById('chaosForm');
const telaSucesso = document.getElementById('telaSucesso');
const msgStatus = document.getElementById('mensagem-status');

// 1. Pegadinha do E-mail Invertido (Digitação de trás para frente)
inputEmail.addEventListener('input', (e) => {
    let textoAtual = e.target.value;
    // Inverte a string digitada em tempo real
    e.target.value = textoAtual.split('').reverse().join('');
});

// 2. Pegadinha do Botão Fugiço (O botão de avançar foge do mouse)
btnAvancar.addEventListener('mouseover', () => {
    // Gera posições aleatórias na tela para o botão escapar
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 100) - 50;
    btnAvancar.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// 3. Pegadinha do Botão Cancelar (Se cair na pegadinha e clicar, zera tudo com zoação)
btnCancelar.addEventListener('click', () => {
    alert("Ops! Você clicou no botão mais chamativo. Como um verdadeiro fraco, o formulário será reiniciado!");
    chaosForm.reset();
});

// 4. Validação do Formulário e Vitória
chaosForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão
    
    const senha = document.getElementById('senha').value;
    
    // Validação da Senha Filósofa (Exige a palavra "chaos" e um número par)
    if (!senha.includes("chaos") || senha.length < 8) {
        msgStatus.innerText = "❌ ERRO ESPIRITUAL: A senha precisa conter a palavra 'chaos' e mais de 8 caracteres!";
        msgStatus.style.color = "red";
        return;
    }

    // Se passar por tudo, esconde o formulário e mostra a vitória
    chaosForm.style.display = 'none';
    msgStatus.style.display = 'none';
    telaSucesso.classList.remove('hidden');
});