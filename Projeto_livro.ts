// Interface
interface Livro {
  id: number;
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

// Array de livros
const livros: Livro[] = [];

// Função 1: adicionar livro
function adicionarLivro(livro: Livro): void {
  livros.push(livro);
  console.log(`Livro "${livro.titulo}" adicionado com sucesso!`);
}

// Função 2: listar livros
function listarLivros(): void {
  if (livros.length === 0) {
    console.log("Nenhum livro cadastrado.");
    return;
  }

  console.log("=== Livros Cadastrados ===");
  livros.forEach((livro) => {
    console.log(`
      ID: ${livro.id}
      Título: ${livro.titulo}
      Autor: ${livro.autor}
      Ano: ${livro.ano}
      Disponível: ${livro.disponivel ? "Sim" : "Não"}
    `);
  });
}
// Exemplo de uso
adicionarLivro({
  id: 1,
  titulo: "A Mentalidade do Fundador",
  autor: "Chris Zook e James Allen",
  ano: 2016,
  disponivel: true,
});

adicionarLivro({
  id: 2,
  titulo: "Capitães da Areia",
  autor: "Jorge Amado",
  ano: 1937,
  disponivel: true,
});

listarLivros();

// Função 3: emprestar livro
function emprestarLivro(id: number): void {
  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    console.log(`Livro com ID ${id} não encontrado.`);
    return;
  }

  if (!livro.disponivel) {
    console.log(`O livro "${livro.titulo}" já está emprestado.`);
    return;
  }

  livro.disponivel = false;
  console.log(`Livro "${livro.titulo}" emprestado com sucesso!`);
}

// Teste
emprestarLivro(1);
listarLivros();