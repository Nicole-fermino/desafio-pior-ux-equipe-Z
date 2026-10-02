const inputEmail = document.getElementById('email');
const btnCancelar = document.getElementById('btnCancelar');
const chaosForm = document.getElementById('chaosForm');
const msgStatus = document.getElementById('mensagem-status');

// 1. Pegadinha do E-mail Invertido (Digitação de trás para frente)
inputEmail.addEventListener('input', (e) => {
    let textoAtual = e.target.value;
    e.target.value = textoAtual.split('').reverse().join('');
});

// 2. Pegadinha do Botão Cancelar (Se clicar, zera tudo)
btnCancelar.addEventListener('click', () => {
    alert("Ops! Você clicou no botão mais chamativo. O formulário será reiniciado!");
    chaosForm.reset();
});

// 3. Validação da Senha Filósofa antes de permitir o envio real
chaosForm.addEventListener('submit', (e) => {
    const senha = document.getElementById('senha').value;
    
    // Se a senha não atender aos requisitos caóticos, barra o envio
    if (!senha.includes("chaos") || senha.length < 8) {
        e.preventDefault(); // Impede o envio dos dados
        msgStatus.innerText = "❌ ERRO ESPIRITUAL: A senha precisa conter a palavra 'chaos' e mais de 8 caracteres!";
        msgStatus.style.color = "red";
        return;
    }

    // Se passar por tudo, o botão agora fica fixo e o formulário envia de verdade via FormSubmit!
});