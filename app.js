//Essa variável serve para salvar os nomes dos amigos
let amigos = [];

//Essa função adiciona um amigo a lista
function adicionarAmigo() {
  let inputAmigo = document.querySelector("#amigo");
  let nome = inputAmigo.value.trim();

  //Alerta, caso o nenhum nome seja adicionado ao formulário
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  atualizarListaAmigos();
  inputAmigo.value = "";
}
