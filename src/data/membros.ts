
// Usando typescript para ter verificação de tipos mínima

// <-------------------GRUPOS DA EQUIPE------------------->
// Esta lista define os títulos e a ordem das subseções; grupos vazios não aparecem.
export const categoriasMembros = [
  { id: 'doutores', titulo: 'Doutores', categoria: 'Pesquisador Doutor' },
  { id: 'mestres', titulo: 'Mestres', categoria: 'Pesquisador Mestre' },
  { id: 'mestrandos', titulo: 'Mestrandos', categoria: 'Pesquisador Mestrando' },
  { id: 'graduados', titulo: 'Graduados', categoria: 'Pesquisador Graduado' },
  { id: 'graduandos', titulo: 'Graduandos', categoria: 'Pesquisador Graduando' },
] as const;

// Deriva as categorias permitidas da lista acima, evitando nomes divergentes.
export type CategoriaMembro = (typeof categoriasMembros)[number]['categoria'];

// <-------------------FORMATO DOS DADOS------------------->
// O tipo define quais informações cada registro precisa fornecer
// Não incluímos breve descrição nesta etapa
export interface Membro {
  id: string;
  nome: string;
  categoria: CategoriaMembro;
  interesses: string[];
  foto: string;
  lattes?: string;
  email?: string;
  github?: string;
  // Separa o site pessoal do GitHub para apresentar o rótulo correto no cartão.
  site?: string;
}

// <-------------------MEMBROS ATUAIS------------------->
// Para cadastrar outra pessoa, adicione um objeto com um id único.
// Arquivos de public/ são acessados pela raiz do site, sem "public" na URL.
export const membros: Membro[] = [
  {
    id: 'georis-samuel',
    nome: 'Georis Samuel',
    categoria: 'Pesquisador Graduando',
    interesses: [
      'Eletroencefalograma',
      'Memória',
      'Comprometimento cognitivo',
      'Engenharia de software',
      'Aprendizado de Máquina',
    ],
    foto: '/imgs/people/georis.jpg',
    lattes: 'http://lattes.cnpq.br/8367997004164846',
    email: 'georis.samuel@aluno.uepb.edu.br',
    github: 'https://github.com/georiSamuel',
  },
  {
    id: 'shara-isabell',
    nome: 'Shara Isabell Alves de Oliveira',
    categoria: 'Pesquisador Graduando',
    interesses: [
      'Eletroencefalograma', 
      'Aprendizado de Máquina',
      'Memória',
      'Biomarcador',
    ],
    foto: '/imgs/people/shara.jpeg',
    lattes: 'https://lattes.cnpq.br/6451381073910604',
    email: 'shara.oliveira@aluno.uepb.edu.br',
    github: 'https://github.com/SharaIsabel',
  },
  {
    id: 'tiago-souto-rocha',
    nome: 'Tiago Souto Rocha',
    categoria: 'Pesquisador Graduando',
    interesses: [
      'Eletroencefalograma',
      'Conectividade',
      'Memória',
      'Envelhecimento',
      'Decodificação',
    ],
    foto: '/imgs/people/tiago.jpeg',
    lattes: 'http://lattes.cnpq.br/2236371058575114',
    email: 'tiago.r@aluno.uepb.edu.br',
    site: 'https://tiagosoutorocha-neuro.github.io/',
  },
  {
    id: 'rennan-fernandes',
    nome: 'Rennan Fernandes da Silva',
    categoria: 'Pesquisador Graduando',
    interesses: [
      'Eletroencefalograma',
      'Dor',
      'Biomarcador',
      'Aprendizado de máquina aplicado',
    ],
    foto: '/imgs/people/rennan.jpeg',
    lattes: 'https://lattes.cnpq.br/3042696533091454',
    email: 'rennan.fernandes@aluno.uepb.edu.br',
    github: 'https://github.com/Rennan0102',
  },
];
