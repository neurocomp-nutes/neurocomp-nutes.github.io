
// Usando typescript para ter verificação de tipos mínima

// <-------------------GRUPOS DA EQUIPE------------------->
// Esta lista define os títulos e a ordem das subseções; grupos vazios não aparecem.
export const gruposEquipe = [
  { id: 'coordenacao', titulo: 'Coordenação' },
  { id: 'gerencia', titulo: 'Gerência' },
  { id: 'doutores', titulo: 'Doutores' },
  { id: 'mestres', titulo: 'Mestres' },
  { id: 'mestrandos', titulo: 'Mestrandos' },
  { id: 'graduados', titulo: 'Graduados' },
  { id: 'graduandos', titulo: 'Graduandos' },
] as const;

// Deriva os grupos permitidos da lista acima, evitando nomes divergentes.
export type GrupoMembro = (typeof gruposEquipe)[number]['id'];

// <-------------------FORMATO DOS DADOS------------------->
// O tipo define quais informações cada registro precisa fornecer
export interface Membro {
  id: string;
  nome: string;
  // Define uma única subseção; não é exibido como informação no cartão.
  grupo: GrupoMembro;
  interesses: string[];
  foto: string;
  // Ajusta a posição da foto dentro do recorte quadrado, sem editar o arquivo.
  posicaoFoto?: string;
  lattes?: string; // O ponto de interrogação indica que esta propriedade é opcional
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
    grupo: 'graduandos',
    interesses: [
      'Eletroencefalograma',
      'Memória',
      'Comprometimento cognitivo',
      'Engenharia de Software',
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
    grupo: 'graduandos',
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
    grupo: 'gerencia',
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
    grupo: 'graduandos',
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
  {
    id: 'joao-paulo',
    nome: 'João Paulo',
    grupo: 'graduandos',
    interesses: [
      'Processamento de Sinais Neurofisiológicos',
      'Machine Learning',
      'Inteligência Artificial',
      'Engenharia de Software',
    ],
    foto: '/imgs/people/joao_paulo.jpeg',
    posicaoFoto: 'center top',
    lattes: 'http://lattes.cnpq.br/7894766207491972',
    email: 'j.paulo@aluno.uepb.edu.br',
    github: 'https://github.com/jpauloaraujo',
  },
  {
    id: 'lais-borba',
    nome: 'Laís Borba',
    grupo: 'graduandos',
    interesses: [
      'Dor crônica',
      'Neuromodulação',
      'Eletroencefalografia (EEG)',
      'Interfaces cérebro-computador (BCI)',
    ],
    foto: '/imgs/people/lais.jpeg',
    posicaoFoto: 'center 15%',
    lattes: 'http://lattes.cnpq.br/8332901853866305',
    email: 'lais.borba@aluno.uepb.edu.br',
    github: 'https://github.com/laisborba-rgb',
  },
  {
    id: 'aline-macedo-brito',
    nome: 'Aline Macedo Brito',
    grupo: 'graduandos',
    interesses: [
      'Memória',
      'Envelhecimento',
      'Eletroencefalograma',
      'Neurociência',
      'Saúde mental',
    ],
    foto: '/imgs/people/aline.jpeg',
    posicaoFoto: 'center',
    lattes: 'http://lattes.cnpq.br/6614470443695122',
    email: 'macedo.aline@aluno.uepb.edu.br',
    github: 'https://github.com/Alinemaced0',
  },
  {
    id: 'danilo-valerio',
    nome: 'Danilo Valério',
    grupo: 'graduados',
    interesses: [
      'Processamento de Sinais Neurofisiológicos',
      'Ciência de Dados',
      'Desenvolvimento de Software',
    ],
    foto: '/imgs/people/danilo.jpeg',
    posicaoFoto: 'center 75%',
    lattes: 'https://lattes.cnpq.br/3869570951545715',
    email: 'danilo.valerio@aluno.uepb.edu.br',
    github: 'https://github.com/danilopvalerio',
  },
  {
    id: 'kaique-ivo',
    nome: 'Kaique Ivo',
    grupo: 'mestrandos',
    interesses: [
      'Eletromiograma',
      'Função Neuromuscular',
      'Aprendizado de Máquina',
      'Engenharia de Software',
    ],
    foto: '/imgs/people/kaique.jpeg',
    posicaoFoto: 'center 35%',
    lattes: 'http://lattes.cnpq.br/8142855304935623',
    email: 'kaique.ivo@aluno.uepb.edu.br',
    github: 'https://github.com/KaiqueIvo04',
  },
  {
    id: 'thaynara-paiva',
    nome: 'Thaynara Paiva',
    grupo: 'graduados',
    interesses: [
      'Eletroencefalografia (EEG)',
      'Neuromodulação',
      'BCI',
      'Psicometria',
    ],
    foto: '/imgs/people/thaynara.jpeg',
    posicaoFoto: 'center 45%',
    lattes: 'https://lattes.cnpq.br/7134662166553995',
    email: 'thaynara.barbosa@aluno.uepb.edu.br',
    github: 'https://github.com/Thaynara-Paiva',
  },
  {
    id: 'joao-pedro-pinheiro-alves',
    nome: 'João Pedro Pinheiro Alves',
    grupo: 'graduandos',
    interesses: [
      'Eletroencefalograma',
      'Neuropsicologia',
      'Psicopatologia',
    ],
    foto: '/imgs/people/joao_pedro.jpeg',
    posicaoFoto: 'center top',
    lattes: 'http://lattes.cnpq.br/7630768930347261',
    email: 'j.pinheiro@aluno.uepb.edu.br',
    github: 'https://github.com/jpinheiroalves',
  },
];
