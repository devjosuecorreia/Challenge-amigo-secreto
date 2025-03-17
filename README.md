# Projeto Amigo Secreto

Este projeto é uma aplicação simples em JavaScript que permite criar uma lista de amigos e sortear aleatoriamente um "amigo secreto".

## Funcionalidades

- **Adicionar Amigo:**  
  Permite inserir o nome de um amigo em um campo de entrada. Se nenhum nome for informado, um alerta solicita a inserção de um nome.

- **Exibir Texto com Narração:**  
  Exibe textos em elementos HTML e utiliza o ResponsiveVoice para narrá-los, proporcionando uma experiência interativa.

- **Atualizar Lista de Amigos:**  
  Sempre que um novo amigo é adicionado, a lista na tela é atualizada para refletir as alterações.

- **Sortear Amigo Secreto:**  
  Seleciona aleatoriamente um amigo da lista para ser o "amigo secreto". Caso a lista esteja vazia, exibe um alerta.

## Tecnologias Utilizadas

- **JavaScript:**  
  Linguagem utilizada para implementar a lógica do projeto.

- **HTML/CSS:**  
  Utilizados para estruturar e estilizar a interface da aplicação (não inclusos neste snippet, mas necessários para a execução completa).

- **ResponsiveVoice API:**  
  Serviço utilizado para a síntese de voz, que narra as mensagens exibidas na tela.

## Como Utilizar

1. **Configuração Inicial:**

   - Clone este repositório para a sua máquina.
   - Certifique-se de que o arquivo HTML que integra este script esteja configurado corretamente.
   - Abra o arquivo `index.html` no seu navegador.

2. **Adicionar um Amigo:**

   - Insira o nome de um amigo no campo de entrada (elemento com o ID `amigo`).
   - Clique no botão que dispara a função `adicionarAmigo()`.  
     Caso o campo esteja vazio, um alerta solicitará que um nome seja inserido.
   - A lista de amigos (elemento com o ID `listaAmigos`) será atualizada automaticamente.

3. **Sortear Amigo Secreto:**
   - Após adicionar os amigos desejados, clique no botão que aciona a função `sortearAmigo()`.
   - Se houver pelo menos um amigo na lista, o sorteio será realizado e o resultado será exibido no elemento com o ID `resultado`.

## Estrutura do Código

- **adicionarAmigo():**  
  Captura o valor do campo de entrada, valida se não está vazio, adiciona o nome ao array `amigos`, atualiza a lista exibida e limpa o campo de entrada.

- **exibirTextoNaTela(tag, texto):**  
  Exibe o texto em uma tag HTML específica e utiliza o ResponsiveVoice para narrar o conteúdo com voz feminina em português brasileiro.

- **atualizarListaAmigos():**  
  Percorre o array `amigos` e atualiza o elemento HTML responsável por exibir a lista, criando um item (`<li>`) para cada amigo.

- **sortearAmigo():**  
  Realiza a verificação para garantir que a lista não esteja vazia, sorteia um amigo de forma aleatória e exibe o resultado.

## Contribuições

Contribuições são sempre bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE)
