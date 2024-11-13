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

function sendEmail(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Pega os dados do formulário
    const formData = {
        plan: document.getElementById("planSelect").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    // Envia o e-mail usando o serviço e o template do EmailJS
    emailjs.send("service_2ds4ke9", "template_g7qbl5i", formData)
        .then(() => {
            alert("E-mail enviado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao enviar o e-mail:", error);
            alert("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
        });
}
