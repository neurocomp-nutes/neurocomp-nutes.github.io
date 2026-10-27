// <-------------------FORMATO DOS DADOS------------------->
import type { Membro } from './membros';

// Omit reaproveita o tipo existente, retirando a classificação acadêmica e os contatos.
// Os membros não humanos têm uma seção própria, separada dos grupos de pesquisadores.
type MembroNaoHumano = Omit<Membro, 'grupo' | 'lattes' | 'email' | 'github' | 'site'>;

// <-------------------MEMBROS NÃO HUMANOS------------------->
export const membrosNaoHumanos: MembroNaoHumano[] = [
  {
    id: 'marlboro',
    nome: 'Marlboro',
    foto: '/imgs/pets/marlboro.png',
    posicaoFoto: 'center top 80%',
    interesses: [
      'Comer',
      'Dormir',
      'Receber Carinho',
      'Impactos da Nicotina',
      'Neurociência da Adicção',
    ],
  },
];
