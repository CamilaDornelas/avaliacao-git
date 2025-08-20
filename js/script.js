const moveBtn = document.getElementById('moveBtn');

// Adiciona um "ouvinte de eventos" que dispara uma função quando o mouse passa por cima
moveBtn.addEventListener('mouseover', function() {
    // Obtém as dimensões da janela do navegador
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Obtém as dimensões do próprio botão
    const btnWidth = moveBtn.offsetWidth;
    const btnHeight = moveBtn.offsetHeight;

    // Calcula uma nova posição aleatória para o botão
    // A posição máxima é o tamanho da tela menos o tamanho do botão
    const newLeft = Math.random() * (screenWidth - btnWidth);
    const newTop = Math.random() * (screenHeight - btnHeight);

    // Aplica as novas posições ao estilo do botão
    moveBtn.style.left = `${newLeft}px`;
    moveBtn.style.top = `${newTop}px`;
});


// --- Função para o Botão que Adiciona Texto ---

// Seleciona o botão e o contêiner de texto pelos seus IDs
const addTextBtn = document.getElementById('addTextBtn');
const textContainer = document.getElementById('textContainer');
let messageCount = 0; // Um contador para numerar as mensagens

// Adiciona um "ouvinte de eventos" que dispara uma função ao ser clicado
// Adicionando comentario qualquer 
addTextBtn.addEventListener('click', function() {
    messageCount++; // Incrementa o contador

    // Cria um novo elemento de parágrafo (<p>)
    const newParagraph = document.createElement('p');

    // Adiciona uma classe CSS ao novo parágrafo para estilização
    newParagraph.classList.add('new-text');

    // Define o conteúdo de texto do novo parágrafo
    newParagraph.textContent = `Mensagem #${messageCount}: O JavaScript adicionou este texto!`;

    // Adiciona o novo parágrafo como um "filho" do contêiner de texto
    textContainer.appendChild(newParagraph);
});

//MINHA ADIÇÃO:
// imprime números e diz se são pares ou ímpares
for (let i = 1; i <= 10; i++) {
  console.log("O número: " + i);

  if (i % 2 === 0) {
    console.log(i + " é par");
  } else {
    console.log(i + " é ímpar");
  }

}

console.log("Fim");

