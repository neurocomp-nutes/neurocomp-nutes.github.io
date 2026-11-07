// <-------------------FORMATO DOS INSTRUMENTOS------------------->
// Imagens e fontes ficam centralizadas para facilitar futuras substituições.
export interface Instrumento {
  nome: string;
  categoria: 'Equipamento' | 'Avaliação' | 'Técnica' | 'Medida';
  descricao: string;
  imagem: string;
  credito?: string;
  fonte?: string;
}
export interface LinhaPesquisa {
  /* 
    slug é uma parte de uma URL que vem após o nome do domínio e é  usado para gerar a URL da 'subpágina' da linha de pesquisa. 
    Exemplo: https://neurocomp-nutes.github.io/linhasPesquisa/memoria
    separamos o nome de slugs com '-' geralmente
  */
  slug: string; 
  nome: string;
  subtitulo: string;
  resumo: string;
  logo: string;
  temas: string[];
  apresentacao: string;
  pesquisas: { titulo: string; descricao: string }[];
  extensao: string;
  instrumentos: Instrumento[];
  membrosIds: string[];
}

// <-------------------LINHAS E PROJETOS------------------->
// Para incluir alguém, cadastre a pessoa em membros.ts e acrescente seu id aqui.
// A mesma pessoa pode integrar várias linhas, sem duplicar fotos ou contatos.
export const linhasPesquisa: LinhaPesquisa[] = [
  
  {
    slug: 'memoria', nome: 'Memória', subtitulo: 'Cognição, envelhecimento e comunidade',
    logo: '/imgs/logos/MEMORIA.png',
    resumo: 'Estudo da memória e do envelhecimento cognitivo, integrando avaliações e sinais neurofisiológicos à atuação em contextos comunitários.',
    temas: ['Cognição', 'Envelhecimento', 'Neurotecnologia'],
    apresentacao: 'A linha Memória conecta neurociência, avaliação cognitiva e análise de dados para investigar o envelhecimento. O trabalho reúne informações sobre a história de vida, aspectos emocionais e registros fisiológicos, considerando o contexto de cada participante.',
    pesquisas: [
      { titulo: 'Memória e envelhecimento', descricao: 'Como o desempenho cognitivo se relaciona com as queixas de memória, o cotidiano e a história de vida?' },
      { titulo: 'Sinais e cognição', descricao: 'Quais relações podem ser investigadas entre avaliações cognitivas, atividade elétrica cerebral e variabilidade da frequência cardíaca?' },
      { titulo: 'Análise de dados', descricao: 'Como integrar avaliações e sinais neurofisiológicos, com atenção à qualidade dos registros e à interpretação dos resultados?' },
    ],
    extensao: 'No projeto de monitoramento cognitivo no envelhecimento, a atuação comunitária inclui o Cidade Madura. Anamnese, questionários e registros fisiológicos compõem a avaliação e apoiam a elaboração de devolutivas. O rastreio orienta o acompanhamento e não constitui, por si só, um diagnóstico.',
    membrosIds: ['georis-samuel', 'tiago-souto-rocha', 'joao-pedro-pinheiro-alves', 'aline-macedo-brito', 'shara-isabell'],
    instrumentos: [
      { nome: 'Anamnese', categoria: 'Avaliação', descricao: 'Entrevista para conhecer a história clínica, as queixas e aspectos do cotidiano do participante.', imagem: 'anamnese.svg' },
      { nome: 'Questionário sociodemográfico', categoria: 'Avaliação', descricao: 'Reúne informações sobre escolaridade, ocupação e contexto de vida para contextualizar a avaliação.', imagem: 'sociodemografico.svg' },
      { nome: 'MoCA-BR', categoria: 'Avaliação', descricao: 'Instrumento de rastreio cognitivo utilizado junto às demais informações da avaliação.', imagem: 'moca.svg' },
      { nome: 'DASS-21', categoria: 'Avaliação', descricao: 'Questionário de autorrelato sobre sintomas de depressão, ansiedade e estresse.', imagem: 'dass21.svg', fonte: 'https://dass.psy.unsw.edu.au/down.htm' },
      { nome: 'EEG · Emotiv EPOC X', categoria: 'Equipamento', descricao: 'Headset utilizado para registrar a atividade elétrica cerebral e apoiar a análise dos sinais de EEG.', imagem: 'epocx.png', credito: 'Imagem: EMOTIV', fonte: 'https://www.emotiv.com/epoc-x' },
      { nome: 'Polar H10 · HRV', categoria: 'Equipamento', descricao: 'Sensor cardíaco utilizado na coleta de dados para a análise da variabilidade da frequência cardíaca (VFC, ou HRV).', imagem: 'polar_h10.webp', credito: 'Imagem: Polar', fonte: 'https://www.polar.com/us-en/sensors/h10' },
    ],
  },

  {
    slug: 'dor', nome: 'Dor', subtitulo: 'Experiência da dor e neuromodulação',
    logo: '/imgs/logos/DOR.png',
    resumo: 'Investigação da dor e de seus impactos na vida cotidiana, articulando avaliação, neurotecnologia e ações de extensão.',
    temas: ['Dor', 'Neuromodulação', 'Qualidade de vida'],
    apresentacao: 'A linha Dor articula o estudo da experiência dolorosa com avaliações de saúde e registros fisiológicos. A pesquisa e a extensão aproximam o conhecimento sobre dor, seus impactos no cotidiano e o uso de neurotecnologias.',
    pesquisas: [
      { titulo: 'Dor e cotidiano', descricao: 'Como a experiência da dor se relaciona com a qualidade de vida e com aspectos físicos e emocionais?' },
      { titulo: 'Neuromodulação', descricao: 'Como investigar as respostas à estimulação transcutânea auricular do nervo vago (taVNS) no contexto da dor?' },
      { titulo: 'Sinais fisiológicos', descricao: 'Como os registros de EEG e de variabilidade da frequência cardíaca podem contribuir para o estudo da dor?' },
    ],
    extensao: 'A atuação de extensão reúne avaliação por questionários, registros fisiológicos e atividades com neuromodulação. Os instrumentos ajudam a acompanhar diferentes dimensões da experiência da dor e a aproximar a pesquisa das demandas da comunidade.',
    membrosIds: ['thaynara-paiva', 'danilo-valerio', 'joao-paulo', 'rennan-fernandes', 'lais-borba'],
    instrumentos: [
      { nome: 'PROMIS-29', categoria: 'Avaliação', descricao: 'Perfil de autorrelato que reúne diferentes dimensões da saúde, incluindo função física, sono e interferência da dor.', imagem: 'promis29.svg', fonte: 'https://www.nih.gov/node/21501' },
      { nome: 'Escala de Catastrofização da Dor', categoria: 'Avaliação', descricao: 'Investiga pensamentos e sentimentos relacionados à experiência da dor.', imagem: 'catastrofizacao.svg' },
      { nome: 'SF-36', categoria: 'Avaliação', descricao: 'Questionário utilizado para avaliar a qualidade de vida relacionada à saúde.', imagem: 'sf36.svg' },
      // Modelos ainda não informados: a ilustração não representa um aparelho específico.
      { nome: 'taVNS', categoria: 'Técnica', descricao: 'Estimulação transcutânea auricular do nervo vago, utilizada nas atividades de neuromodulação da linha.', imagem: 'tavns.svg' },
      { nome: 'EEG · iCelera', categoria: 'Equipamento', descricao: 'Equipamento de eletroencefalografia utilizado para registrar a atividade elétrica cerebral.', imagem: 'eeg.svg', fonte: 'https://icelera.com.br/' },
      { nome: 'HRV · Variabilidade cardíaca', categoria: 'Medida', descricao: 'Análise da variação dos intervalos entre batimentos cardíacos, integrada aos demais registros da linha.', imagem: 'hrv.svg' },
    ],
  },
];
