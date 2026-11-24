// <-------------------FORMATO DOS INSTRUMENTOS------------------->
// Imagens e fontes ficam centralizadas para facilitar futuras substituições.
export interface Instrumento {
  nome: string;
  categoria: 'Equipamento' | 'Avaliação' | 'Técnica' | 'Medida';
  descricao: string;
  imagem: string;
  modelo?: string;
  versao?: string;
  referencia?: string;
  credito?: string;
  fonte?: string;
}

// <-------------------FORMATO DAS MÍDIAS E SUBLINHAS------------------->
export interface Midia {
  src: string;
  alt: string;
  legenda: string;
  posicao?: string;
}

export interface Sublinha {
  titulo: string;
  foco: string;
  objetivo?: string;
  importancia?: string;
  perguntas?: string[];
  blocos?: { titulo: string; descricao: string }[];
  overview: { src: string; alt: string };
  visualizacoes?: Midia[];
}

export interface ProjetoExtensao {
  titulo: string;
  data: string;
  resumo: string;
  objetivos: string[];
  etapas: string[];
  detalheColeta: string;
  contribuicoes: string[];
  resultadosEsperados: string[];
  fechamento: string;
  galeria: Midia[];
}

export interface Colaborador {
  nome: string;
  vinculo: string;
  funcao: string;
}

// <-------------------FORMATO DAS LINHAS------------------->
export interface LinhaPesquisa {
  /*
    slug é uma parte de uma URL que vem após o nome do domínio e é usado para gerar a URL da subpágina da linha
    Exemplo: https://neurocomp-nutes.github.io/linha-pesquisa/memoria
  */
  slug: string;
  nome: string;
  subtitulo: string;
  resumo: string;
  logo: string;
  temas: string[];
  apresentacao: string;
  pesquisas: { titulo: string; descricao: string }[];
  objetivo?: string;
  nomeCompleto?: string;
  perguntas?: string[];
  publico?: string;
  locais?: string[];
  parceiros?: string[];
  atividades?: string[];
  situacaoAtual?: string;
  sublinhas?: Sublinha[];
  visualizacoes?: Midia[];
  projetoExtensao?: ProjetoExtensao;
  colaboradores?: Colaborador[];
  extensao: string;
  instrumentos: Instrumento[];
  membros: { id: string; vinculo: string; funcao: string }[];
}

// <-------------------MÍDIA DA MEMÓRIA------------------->
const visualizacoesMemoria: Midia[] = [
  {
    src: '/gifs/linhas_de_pesquisa/memoria/sublinha2/wpli_matriz.gif',
    alt: 'Matriz de conectividade funcional cerebral apresentada ao longo do tempo',
    legenda: 'Matriz de conectividade funcional (wPLI) ao longo do tempo',
  },
  {
    src: '/gifs/linhas_de_pesquisa/memoria/sublinha2/network_topology.gif',
    alt: 'Representação da topologia de uma rede cerebral por teoria dos grafos',
    legenda: 'Topologia da rede cerebral (teoria dos grafos)',
  },
  {
    src: '/gifs/linhas_de_pesquisa/memoria/sublinha2/eeg_dynamic_connectivity.gif',
    alt: 'Estimativa da conectividade cerebral dinâmica a partir de sinais de EEG',
    legenda: 'Conectividade dinâmica estimada a partir do EEG',
  },
];

const fotosCidadeMadura: Midia[] = [
  {
    src: '/imgs/linhas_de_pesquisa/memoria/extensao_cidade_madura/01_montagem_headset.jpeg',
    alt: 'Dois integrantes da equipe, de jaleco, ajustam um headset de EEG em uma participante sentada em poltrona.',
    legenda: 'Montagem do headset de EEG vestível com participante',
  },
  {
    src: '/imgs/linhas_de_pesquisa/memoria/extensao_cidade_madura/02_checagem_sinal.jpeg',
    alt: 'Notebook exibindo o mapa dos sensores do EEG enquanto a participante, de headset, aguarda sentada ao fundo.',
    legenda: 'Verificação do sinal de EEG em tempo real durante uma sessão de registro',
  },
  {
    src: '/imgs/linhas_de_pesquisa/memoria/extensao_cidade_madura/03_coleta_equipe.jpeg',
    alt: 'Integrantes da equipe, de jaleco, posicionam o headset em uma participante sentada diante de uma mesa com notebook.',
    legenda: 'Coleta de dados de EEG com a equipe do NeuroComp',
  },
];

// <-------------------LINHAS E PROJETOS------------------->
// Para incluir alguém, cadastre a pessoa em membros.ts e acrescente seu id e vínculo aqui.
export const linhasPesquisa: LinhaPesquisa[] = [
  {
    slug: 'memoria',
    nome: 'Memória',
    subtitulo: 'Cognição, envelhecimento e comunidade',
    logo: '/imgs/logos/MEMORIA.png',
    resumo: 'Estudo da memória e do envelhecimento cognitivo, integrando avaliações e sinais neurofisiológicos à atuação em contextos comunitários.',
    temas: ['Cognição', 'Envelhecimento', 'Neurotecnologia'],
    apresentacao: 'A linha Memória conecta neurociência, avaliação cognitiva e análise de dados para investigar o envelhecimento. O trabalho reúne informações sobre a história de vida, aspectos emocionais e registros fisiológicos, considerando o contexto de cada participante.',
    pesquisas: [
      { titulo: 'Memória e envelhecimento', descricao: 'Como o desempenho cognitivo se relaciona com as queixas de memória, o cotidiano e a história de vida?' },
      { titulo: 'Sinais e cognição', descricao: 'Quais relações podem ser investigadas entre avaliações cognitivas, atividade elétrica cerebral e variabilidade da frequência cardíaca?' },
      { titulo: 'Análise de dados', descricao: 'Como integrar avaliações e sinais neurofisiológicos, com atenção à qualidade dos registros e à interpretação dos resultados?' },
    ],
    objetivo: 'Desenvolver modelos preditivos que enxerguem o indivíduo como um sistema integrado, combinando atividade neurofisiológica, regulação autonômica, desempenho cognitivo e estados emocionais para suporte na predição e identificação de sujeitos com declínio cognitivo e demências.',
    nomeCompleto: 'Mecanismos Neurocomputacionais do Envelhecimento Cognitivo com Ênfase em Memória',
    sublinhas: [
      {
        titulo: 'Predição Clínica e Biomarcadores Multimodais em Demências',
        foco: 'Pesquisa translacional focada em rastrear, monitorar e prever a progressão do declínio cognitivo, traduzindo assinaturas biológicas em ferramentas clínicas de detecção precoce.',
        objetivo: 'Desenvolver modelos preditivos que enxerguem o indivíduo como um sistema integrado, combinando atividade neurofisiológica, regulação autonômica, desempenho cognitivo e estados emocionais para suporte na predição e identificação de sujeitos com declínio cognitivo e demências.',
        perguntas: [
          'Quais parâmetros e biomarcadores de EEG são mais eficientes para discriminar pessoas cognitivamente saudáveis daquelas com comprometimento cognitivo?',
          'Como desenvolver algoritmos de Inteligência Artificial Explicável para garantir que as decisões clínicas do modelo reflitam assinaturas neurofisiológicas reais e interpretáveis para os profissionais de saúde?',
          'Qual é o ganho preditivo ao substituir marcadores espectrais clássicos por assinaturas multivariadas que combinam conectividade cerebral e dinâmica não linear?',
          'De que forma a avaliação psicológica pode mapear a rota de mediação entre sintomas depressivos, qualidade do sono e desempenho cognitivo na fase pré-demencial?',
        ],
        overview: {
          src: '/imgs/linhas_de_pesquisa/memoria/sublinhas/sublinha1_overview.jpeg',
          alt: 'Infografia da Sublinha 1 sobre predição clínica e biomarcadores multimodais em demências',
        },
      },
      {
        titulo: 'Dinâmica de Redes e Decodificação da Informação Neural no Envelhecimento',
        foco: 'Estudo dos princípios físico-matemáticos que governam o processamento da informação no cérebro. Esta sublinha atua como motor teórico e metodológico da Sublinha 1, fornecendo as bases mecanísticas e os algoritmos que explicam por que os biomarcadores clínicos funcionam.',
        importancia: 'Imagine vivenciar um momento marcante, como uma longa conversa com um ente querido. Para guardar essa experiência, o cérebro precisa "traduzir", ou codificar, tudo o que é percebido (o som das palavras, as expressões, as emoções) em sinais elétricos, conectando essas informações para formar uma lembrança. Mais tarde, ao resgatar essa memória, diferentes partes do cérebro trabalham juntas para "ler", ou decodificar, esses sinais, recriando a cena mentalmente.\n\nNas demências, é exatamente esse processo que começa a falhar. A rede elétrica do cérebro perde sua sincronia e o sinal fica ruidoso, tornando a recriação da lembrança lenta, fragmentada ou bloqueada. É por isso que os estudos da Sublinha 2 são cruciais: eles usam a matemática para mapear exatamente como, quando e onde ocorrem esses "erros de leitura" e curtos-circuitos nas fases iniciais da neurodegeneração. Sem decifrar essa linguagem de falha primeiro, os algoritmos com ênfase clínica da Sublinha 1 estariam somente procurando padrões no escuro. É a compreensão de como a rede da memória se fragmenta que ensina a Inteligência Artificial a olhar para o eletroencefalograma de um paciente e detectar o comprometimento cognitivo com maior precisão, criando uma janela para intervir muito antes de a doença evoluir para o Alzheimer de forma irreversível.',
        blocos: [
          {
            titulo: 'Codificação e Decodificação Neural',
            descricao: 'Investigação de como o cérebro processa, armazena e recupera informações, com foco no processamento semântico, na fala e na formação de engramas de memória. Modelos computacionais que decodificam estados mentais a partir do EEG ajudam a revelar como as representações cognitivas se degradam com o envelhecimento e geram biomarcadores preditivos de alta resolução para os modelos da Sublinha 1.',
          },
          {
            titulo: 'Conectividade Cerebral e Integração da Informação',
            descricao: 'Mapeamento das interações funcionais e estruturais do cérebro utilizando teoria dos grafos e acoplamento de fase-amplitude. Essa modelagem explica, em nível de rede, a desorganização e as falhas de conectividade observadas em pacientes com comprometimento cognitivo leve, garantindo validação biológica para os dados clínicos.',
          },
          {
            titulo: 'Modelagem de Populações Neuronais e Complexidade',
            descricao: 'Simulação in silico da dinâmica de redes neurais para reproduzir o comportamento oscilatório macroscópico. A modelagem matemática da resiliência cerebral frente à neurodegeneração fundamenta o uso de métricas de dinâmica não linear e lentificação espectral na predição clínica do Alzheimer.',
          },
        ],
        overview: {
          src: '/imgs/linhas_de_pesquisa/memoria/sublinhas/sublinha2_overview.jpeg',
          alt: 'Infografia da Sublinha 2 sobre dinâmica de redes e decodificação da informação neural no envelhecimento',
        },
        visualizacoes: visualizacoesMemoria,
      },
    ],
    situacaoAtual: 'A coleta de dados teve início em 24 de agosto de 2026, com encontros quinzenais.',
    projetoExtensao: {
      titulo: 'Lançamento do projeto de extensão Cidade Madura',
      data: '24 de agosto de 2026',
      resumo: 'Em 24 de agosto de 2026, iniciamos a coleta de dados do Cidade Madura, projeto de extensão que leva o monitoramento cognitivo às pessoas idosas que vivem no condomínio Cidade Madura. O projeto une avaliação cognitiva padronizada, neurotecnologia acessível e atividades de promoção da saúde, e fortalece o vínculo entre a universidade e a comunidade.',
      objetivos: [
        'Acompanhar ao menos 30 pessoas idosas ao longo de dois ciclos de avaliação cognitiva e monitoramento com EEG vestível.',
        'Realizar ao menos seis atividades educativas e de estimulação cognitiva, como oficinas, rodas de conversa e sessões de estimulação cognitiva, com cerca de 60 participantes, incluindo pessoas idosas, familiares e comunidade.',
        'Promover o envelhecimento saudável e o autocuidado.',
      ],
      etapas: [
        'Registro de EEG com registro simultâneo da variabilidade da frequência cardíaca (VFC/HRV), com duração aproximada de 20 minutos.',
        'Questionário sociodemográfico e rastreio cognitivo MoCA, com duração aproximada de 40 minutos.',
        'Anamnese e DASS-21, com duração aproximada de 45 minutos. A anamnese ajuda a compreender o contexto, a autopercepção e o impacto na vida diária de cada pessoa.',
      ],
      detalheColeta: 'As sessões acontecem a cada duas semanas, com avaliação completa nas três etapas de três pessoas idosas por dia de coleta. A supervisão é feita por doutorando(a) em Fisioterapia (UFRN) e por profissional de Psicologia. A divisão das etapas reduz o viés de haver vários avaliadores diferentes.',
      contribuicoes: [
        'Relatório individual. Cada participante recebe um relatório pessoal, em linguagem simples, com a análise de seus próprios resultados: rastreio cognitivo, sintomas emocionais e atividade cerebral (EEG) e cardíaca (VFC).',
        'Encaminhamentos a partir da análise integrada. Os resultados cognitivos, emocionais, de EEG e de VFC são interpretados em conjunto. Quando esse quadro integrado indica necessidade, a pessoa recebe encaminhamento para o acompanhamento adequado.',
        'Acompanhamento ao longo do tempo. Os dois ciclos de avaliação permitem que cada pessoa acompanhe suas mudanças e ajudam a detectar sinais precoces de declínio enquanto ainda há margem para agir.',
        'Benefícios para todo o condomínio. A comunidade do Cidade Madura recebe monitoramento cognitivo regular, atividades educativas e de estimulação cognitiva abertas a moradores e familiares, e acesso a uma neurotecnologia raramente disponível fora de centros de pesquisa.',
      ],
      resultadosEsperados: [
        'Identificar sinais precoces de declínio cognitivo.',
        'Incentivar a participação continuada nas atividades.',
        'Construir um repositório de dados para acompanhamento longitudinal.',
      ],
      fechamento: 'O projeto também busca melhorar o cuidado e ampliar o acesso à neurotecnologia para pessoas idosas.',
      galeria: fotosCidadeMadura,
    },
    extensao: 'No projeto de monitoramento cognitivo no envelhecimento, a atuação comunitária inclui o Cidade Madura. Anamnese, questionários e registros fisiológicos compõem a avaliação e apoiam a elaboração de devolutivas. O rastreio orienta o acompanhamento e não constitui, por si só, um diagnóstico.',
    membros: [
      {
        id: 'tiago-souto-rocha',
        vinculo: 'Extensionista voluntário · Psicologia',
        funcao: 'Gerente do projeto. Responsável pela avaliação de qualidade dos relatórios e pelo gerenciamento da coleta e da linha de pesquisa.',
      },
      {
        id: 'aline-macedo-brito',
        vinculo: 'Extensionista bolsista · Psicologia',
        funcao: 'Pesquisa em Alzheimer e envelhecimento. Coleta de anamnese e DASS-21 e elaboração do relatório devolutivo de rastreio cognitivo.',
      },
      {
        id: 'georis-samuel',
        vinculo: 'Extensionista voluntário · Ciência da Computação',
        funcao: 'Pesquisa em Alzheimer e envelhecimento. Coleta e análise de dados de EEG, além da gestão e organização desses dados.',
      },
      {
        id: 'joao-pedro-pinheiro-alves',
        vinculo: 'Extensionista voluntário · Psicologia',
        funcao: 'Pesquisa em Alzheimer e envelhecimento. Coleta do MoCA e do questionário sociodemográfico e elaboração do relatório devolutivo de rastreio cognitivo.',
      },
      {
        id: 'shara-isabell',
        vinculo: 'Extensionista voluntária · Ciência da Computação',
        funcao: 'Pesquisa em biomarcadores de Alzheimer, densidade de canais e métodos de tratamento de dados.',
      },
      // Letícia será incluída quando seu perfil, foto e links estiverem cadastrados.
    ],
    instrumentos: [
      { nome: 'Anamnese', categoria: 'Avaliação', descricao: 'Entrevista para conhecer a história clínica, as queixas e aspectos do cotidiano do participante.', imagem: 'anamnese.svg', versao: 'Adaptada' },
      { nome: 'Questionário sociodemográfico', categoria: 'Avaliação', descricao: 'Reúne informações sobre escolaridade, ocupação e contexto de vida para contextualizar a avaliação.', imagem: 'sociodemografico.svg', versao: 'Elaborado pelo grupo' },
      { nome: 'MoCA-BR', categoria: 'Avaliação', descricao: 'Instrumento de rastreio cognitivo utilizado junto às demais informações da avaliação.', imagem: 'moca.svg' },
      {
        nome: 'DASS-21',
        categoria: 'Avaliação',
        descricao: 'Questionário de autorrelato sobre sintomas de depressão, ansiedade e estresse.',
        imagem: 'dass21.svg',
        versao: 'Adaptação brasileira de Vignola e Tucci (2014)',
        referencia: 'Vignola RCB, Tucci AM. Adaptation and validation of the depression, anxiety and stress scale (DASS) to Brazilian Portuguese. Journal of Affective Disorders. 2014;155:104-109.',
        fonte: 'https://dass.psy.unsw.edu.au/down.htm',
      },
      { nome: 'EEG · Emotiv EPOC X', categoria: 'Equipamento', descricao: 'Headset utilizado para registrar a atividade elétrica cerebral e apoiar a análise dos sinais de EEG.', imagem: 'epocx.png', modelo: 'EPOC X', credito: 'Imagem: EMOTIV', fonte: 'https://www.emotiv.com/epoc-x' },
      { nome: 'Polar H10 · HRV', categoria: 'Equipamento', descricao: 'Sensor cardíaco utilizado na coleta de dados para a análise da variabilidade da frequência cardíaca (VFC, ou HRV).', imagem: 'polar_h10.webp', modelo: 'Polar H10', credito: 'Imagem: Polar', fonte: 'https://www.polar.com/us-en/sensors/h10' },
    ],
  },
  {
    slug: 'dor',
    nome: 'Dor',
    subtitulo: 'Experiência da dor e neuromodulação',
    logo: '/imgs/logos/DOR.png',
    resumo: 'Investigação da dor e de seus impactos na vida cotidiana, articulando avaliação, neurotecnologia e ações de extensão.',
    temas: ['Dor', 'Neuromodulação', 'Qualidade de vida'],
    apresentacao: 'A linha Dor articula o estudo da experiência dolorosa com avaliações de saúde e registros fisiológicos. A pesquisa e a extensão aproximam o conhecimento sobre dor, seus impactos no cotidiano e o uso de neurotecnologias.',
    pesquisas: [
      { titulo: 'Dor e cotidiano', descricao: 'Como a experiência da dor se relaciona com a qualidade de vida e com aspectos físicos e emocionais?' },
      { titulo: 'Neuromodulação', descricao: 'Como investigar as respostas à estimulação transcutânea auricular do nervo vago (taVNS) no contexto da dor?' },
      { titulo: 'Sinais fisiológicos', descricao: 'Como os registros de EEG e de variabilidade da frequência cardíaca podem contribuir para o estudo da dor?' },
    ],
    objetivo: 'Promover o acompanhamento neurofisiológico da dor em pacientes atendidos na Clínica da Dor da Universidade Estadual da Paraíba (UEPB), por meio da integração entre avaliação eletroencefalográfica (EEG), acompanhamento de intervenções terapêuticas e avaliação de indicadores clínicos, funcionais e emocionais, visando monitorar a resposta ao tratamento e contribuir para a personalização do cuidado.',
    perguntas: [
      'Quais padrões neurofisiológicos identificados pelo EEG estão associados às características clínicas e à experiência dolorosa dos pacientes com dor crônica?',
      'Quais alterações nos parâmetros do EEG podem ser observadas após as intervenções terapêuticas?',
      'Existe associação entre as alterações neurofisiológicas e a evolução da intensidade da dor, funcionalidade e aspectos emocionais?',
      'A integração dos dados clínicos e neurofisiológicos pode contribuir para identificar padrões de resposta terapêutica?',
      'Como as tecnologias de avaliação neurofisiológica podem auxiliar no autogerenciamento da dor crônica e na qualificação do acompanhamento e na individualização do cuidado em pacientes com dor crônica?',
    ],
    publico: 'O público-alvo compreende pacientes com dor crônica, especialmente aqueles com disfunção temporomandibular (DTM), bruxismo e dor orofacial. Também contempla indivíduos encaminhados pela Clínica da Dor da UEPB, serviços de saúde parceiros e a comunidade atendida pela Clínica-Escola de Fisioterapia.',
    locais: [
      'Clínica da Dor da UEPB, Departamento de Odontologia, Campus I, Campina Grande/PB.',
      'Clínica-Escola de Fisioterapia da UEPB, Departamento de Fisioterapia, Campus I, Campina Grande/PB.',
    ],
    parceiros: ['Universidade Estadual da Paraíba (UEPB)', 'Núcleo de Tecnologias Estratégicas em Saúde (NUTES/UEPB)'],
    atividades: [
      'Realização de avaliações clínicas e sociodemográficas dos pacientes.',
      'Coleta de dados neurofisiológicos por meio de EEG.',
      'Acompanhamento longitudinal dos pacientes antes e após intervenções terapêuticas.',
      'Monitoramento da resposta às intervenções de neuromodulação.',
      'Aplicação de instrumentos para avaliação da dor, funcionalidade, qualidade de vida e aspectos emocionais.',
      'Organização, tratamento e análise dos dados clínicos e neurofisiológicos.',
      'Elaboração de relatórios informativos e materiais educativos.',
      'Desenvolvimento de ações de educação em saúde sobre neurociência da dor, autocuidado e adesão terapêutica.',
    ],
    situacaoAtual: 'O projeto encontra-se em fase de execução, com atividades de avaliação e acompanhamento dos pacientes, coleta e organização de dados clínicos e neurofisiológicos, análise das informações obtidas e elaboração de materiais informativos. Também está em andamento o acompanhamento da evolução dos pacientes submetidos às intervenções terapêuticas, buscando integrar os resultados das avaliações clínicas aos registros neurofisiológicos.',
    extensao: 'A atuação de extensão reúne avaliação por questionários, registros fisiológicos e atividades com neuromodulação. Os instrumentos ajudam a acompanhar diferentes dimensões da experiência da dor e a aproximar a pesquisa das demandas da comunidade.',
    membros: [
      {
        id: 'sabrina-de-figueiredo-souto',
        vinculo: 'Profa. Dra. · Coordenação',
        funcao: 'Coordenadora do Projeto Vinculado 10.',
      },
      {
        id: 'lais-borba',
        vinculo: 'Extensionista bolsista · Fisioterapia',
        funcao: 'Coleta e análise de dados dos aspectos relacionados à dor crônica, elaboração de relatórios informativos e produção de materiais de educação em saúde.',
      },
      {
        id: 'thaynara-paiva',
        vinculo: 'Voluntária · Psicologia',
        funcao: 'Coleta e análise de dados dos aspectos emocionais, elaboração de relatórios informativos e produção de materiais de educação em saúde.',
      },
      {
        id: 'rennan-fernandes',
        vinculo: 'Extensionista voluntário · Ciência da Computação',
        funcao: 'Coleta e análise de dados de eletroencefalograma.',
      },
      {
        id: 'joao-paulo',
        vinculo: 'Extensionista voluntário · Ciência da Computação',
        funcao: 'Coleta e análise de dados de eletroencefalograma.',
      },
      // Danilo permanece cadastrado em membros.ts e poderá voltar à equipe com vínculo e função definidos.
    ],
    colaboradores: [
      {
        nome: 'Profa. Dra. Ana Isabella Arruda Meira Ribeiro',
        vinculo: 'Coordenação geral',
        funcao: 'Coordenadora geral do Programa Institucional de Extensão Clínica da Dor.',
      },
      {
        nome: 'Lauriston Paixão',
        vinculo: 'Voluntário · Mestre fisioterapeuta',
        funcao: 'Supervisão da coleta de dados e dos materiais educativos, auxílio na análise e elaboração de relatórios informativos.',
      },
      {
        nome: 'Edna Maciel',
        vinculo: 'Voluntária · Medicina',
        funcao: 'Supervisão da coleta de dados e dos materiais educativos, além de auxílio na análise de dados.',
      },
      // Estes colaboradores serão migrados para membros.ts quando houver fotos e links para seus perfis.
    ],
    instrumentos: [
      { nome: 'PainDetect', categoria: 'Avaliação', descricao: 'Questionário para avaliação de aspectos relacionados à dor neuropática.', imagem: 'paindetect.svg', versao: 'Versão validada brasileira' },
      { nome: 'Escala de Catastrofização da Dor (PCS)', categoria: 'Avaliação', descricao: 'Investiga pensamentos e sentimentos relacionados à experiência da dor.', imagem: 'catastrofizacao.svg', versao: 'Estrutura original de Sullivan, Bishop e Pivik (1995)' },
      { nome: 'PROMIS-29', categoria: 'Avaliação', descricao: 'Perfil de autorrelato que reúne diferentes dimensões da saúde, incluindo função física, sono e interferência da dor.', imagem: 'promis29.svg', versao: 'Perfil v2.0 Adulto (Profile 29)', fonte: 'https://www.healthmeasures.net' },
      { nome: 'SF-36', categoria: 'Avaliação', descricao: 'Questionário utilizado para avaliar a qualidade de vida relacionada à saúde.', imagem: 'sf36.svg', versao: 'Versão validada brasileira' },
      {
        nome: 'EEG · Emotiv EPOC X',
        categoria: 'Equipamento',
        descricao: 'Headset utilizado para registrar a atividade elétrica cerebral e apoiar a análise dos sinais de EEG.',
        imagem: 'epocx.png',
        modelo: 'EPOC X',
        credito: 'Imagem: EMOTIV',
        fonte: 'https://www.emotiv.com/epoc-x',
      },
      {
        nome: 'EEG · iCelera',
        categoria: 'Equipamento',
        descricao: 'Equipamento de eletroencefalografia utilizado para registrar a atividade elétrica cerebral.',
        imagem: 'eeg.svg',
        modelo: 'Nano EEG',
        fonte: 'https://icelera.com.br/',
      },
      {
        nome: 'Polar H10 · HRV',
        categoria: 'Equipamento',
        descricao: 'Sensor cardíaco utilizado na coleta de dados para a análise da variabilidade da frequência cardíaca (VFC, ou HRV).',
        imagem: 'polar_h10.webp',
        modelo: 'Polar H10',
        credito: 'Imagem: Polar',
        fonte: 'https://www.polar.com/us-en/sensors/h10',
      },
      {
        nome: 'taVNS',
        categoria: 'Técnica',
        descricao: 'Estimulação transcutânea auricular do nervo vago, utilizada nas atividades de neuromodulação da linha.',
        imagem: 'neurodyn_tavns.png',
        modelo: 'NeuroDyn Portátil 02 canais (Ibramed)',
        credito: 'Foto: acervo do NeuroComp',
      },
    ],
  },
];
