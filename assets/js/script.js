// Inicializa o modal de login
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Função para enviar o formulário de e-mail
function sendEmail(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    const formData = {
        plan: document.getElementById("planSelect").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    emailjs.send("service_2ds4ke9", "template_g7qbl5i", formData)
        .then(() => {
            alert("E-mail enviado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao enviar o e-mail:", error);
            alert("Ocorreu um erro ao enviar o e-mail. Tente novamente.");
        });
}
