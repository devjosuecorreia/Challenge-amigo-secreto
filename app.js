let amigos = [];

//Essa função adiciona um amigo a lista
function adicionarAmigo() {
  let inputAmigo = document.querySelector("#amigo");
  let nome = inputAmigo.value.trim();

  //este alerta é ativado caso o nenhum nome seja adicionado ao formulário
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  atualizarListaAmigos();
  inputAmigo.value = "";
}

//Essa função exibe o texto na tela além de adicionar a narração do recurso responsiveVoice.
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.1 });
}

//Essa função atualiza a lista de amigos exibida na tela.
function atualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Função para sortear um amigo secreto.
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo para sortear.");
    return;
  }

  let selecionaSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[selecionaSorteado];
  document.getElementById(
    "resultado"
  ).innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
}
