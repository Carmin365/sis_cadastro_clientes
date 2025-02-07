const form = document.getElementById('cadastroForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Aqui você pode adicionar a lógica para enviar os dados do formulário para um servidor ou realizar outras ações.
    // Por exemplo, você poderia usar o fetch API para enviar os dados para uma API.

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data); // Exibe os dados do formulário no console para fins de demonstração

    // Limpar o formulário após o envio (opcional)
    form.reset();
});