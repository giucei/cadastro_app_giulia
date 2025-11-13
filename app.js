// app.js - classes POO e lógica básica de cadastro

// === Classe: User ===
class User {
  constructor(name, email, password) {
    // Copilot, me explique esta classe. O que é um 'constructor'?
    // Resposta: O 'constructor' é um método especial executado quando você cria uma nova instância da classe com 'new'.
    // Ele inicializa as propriedades do objeto (por exemplo: this.name, this.email).

    this.name = name;
    this.email = email;
    this.password = password; // Em produção, nunca armazene senhas em texto puro.
  }

  // salva o usuário localmente (simulação de backend)
  saveLocal() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ name: this.name, email: this.email });
    localStorage.setItem('users', JSON.stringify(users));
  }

  static validateEmail(email) {
    // validação simples
    return /\S+@\S+\.\S+/.test(email);
  }
}

// === Classe: Restaurante ===
class Restaurante {
  constructor(nome, endereco) {
    // Copilot, me explique `this` neste contexto.
    // Resposta: 'this' refere-se à instância atual da classe. Dentro do constructor, 'this.nome' cria a propriedade nome
    // para a instância que está sendo construída.
    this.nome = nome;
    this.endereco = endereco;
    this.cardapio = [];
  }

  adicionarPrato(prato) {
    this.cardapio.push(prato);
  }

  render() {
    // Copilot, por que este método 'render' é útil?
    // Resposta: 'render' encapsula a lógica de transformar dados da classe em markup HTML (ou string) que pode ser inserido
    // na página. Facilita reaproveitar a apresentação da mesma entidade em diferentes partes do app.
    return `${this.nome} - ${this.endereco}`;
  }
}

// === Classe: Prato ===
class Prato {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  render() {
    return `${this.nome} — R$ ${this.preco}`;
  }
}

// Observação: As classes acima são exemplos para fins didáticos. Perguntas ao Copilot foram inseridas
// como comentários e as respostas foram coladas abaixo das perguntas, conforme solicitado na atividade.

// ======================================================
// Lógica do formulário (simulação sem backend)
const form = document.getElementById('signupForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    showMessage('Preencha todos os campos', true);
    return;
  }

  if (!User.validateEmail(email)) {
    showMessage('Email inválido', true);
    return;
  }

  // Enviar dados ao endpoint serverless `/api/register`
  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    if (res.ok) {
      showMessage('Cadastro realizado com sucesso!');
      form.reset();
    } else {
      showMessage(data.error || 'Erro no cadastro', true);
    }
  } catch (err) {
    showMessage('Erro ao conectar com o servidor', true);
    console.error(err);
  }
});

function showMessage(text, isError = false) {
  msg.textContent = text;
  msg.className = '';
  msg.style.background = isError ? '#ffe6e6' : '#e6ffef';
  setTimeout(() => { msg.className = 'hidden'; }, 4000);
}
