// Formulário de Contratação
document.querySelector('.contract-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

// Função para abrir o modal
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
