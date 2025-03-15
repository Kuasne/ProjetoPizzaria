document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
      errorMessage.textContent = "Todos os campos são obrigatórios.";
      return;
    }

    if (password.length < 6) {
      errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
      return;
    }

    // Aqui você pode adicionar a lógica de autenticação, por exemplo, fazer uma requisição para o servidor

    errorMessage.textContent = "";
    alert("Login realizado com sucesso!");
  });

document.getElementById("loginButton").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validação simples (substitua por lógica real, como uma API)
  if (username === "admin" && password === "1234") {
    alert("Login bem-sucedido!");
    window.location.href = "home.html"; // Redireciona para a página home
  } else {
    alert("Usuário ou senha incorretos!");
  }
});

// Alternar Modo Escuro
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Simular Integração com API
const apiDataContainer = document.getElementById("apiData");
setTimeout(() => {
  apiDataContainer.innerHTML = `
        <p>📊 Dados Atualizados:</p>
        <ul>
            <li>Usuários Ativos: 1,234</li>
            <li>Novos Cadastros: 56</li>
            <li>Vendas Hoje: R$ 12,345.67</li>
        </ul>
    `;
}, 2000);
