
// Usando typescript para ter verificação de tipos mínima

// <-------------------FORMATO DOS DADOS------------------->
// O tipo define quais informações cada registro precisa fornecer
// Não incluímos breve descrição nesta etapa
export interface Membro {
  id: string;
  nome: string;
  categoria: string;
  interesses: string[];
  foto: string;
  lattes?: string;
  email?: string;
  github?: string;
}

// <-------------------MEMBROS ATUAIS------------------->
// Para cadastrar outra pessoa, adicione um objeto com um id único.
// Arquivos de public/ são acessados pela raiz do site, sem "public" na URL.
export const membros: Membro[] = [
  {
    id: 'georis-samuel',
    nome: 'Georis Samuel',
    categoria: 'Pesquisador',
    interesses: [
      'Memória',
      'Comprometimento cognitivo',
      'Engenharia de software',
      'Machine Learning',
      'Deep Learning',
    ],
    foto: '/imgs/people/georis.jpg',
    lattes: 'http://lattes.cnpq.br/8367997004164846',
    email: 'georis.samuel@aluno.uepb.edu.br',
    github: 'https://github.com/georiSamuel',
  },
];
