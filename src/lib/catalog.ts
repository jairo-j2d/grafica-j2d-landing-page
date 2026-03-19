import {
  StickyNote,
  Image as ImageIcon,
  Box,
  LayoutTemplate,
  Gift,
  MapPin,
  Layers,
  CreditCard,
} from 'lucide-react'

export const catalog = [
  {
    id: 'adesivos',
    name: 'Adesivos',
    icon: StickyNote,
    image: 'https://img.usecurling.com/p/800/600?q=stickers',
    description: 'Adesivos personalizados para embalagens, vitrines, veículos e muito mais.',
    subcategories: [
      {
        id: 'adesivo-papel',
        name: 'Adesivo de Papel',
        image: 'https://img.usecurling.com/p/400/300?q=paper%20roll',
        description: 'Ideal para uso interno e embalagens que não vão à geladeira.',
        dependencies: ['Meio Corte (Cartela)', 'Corte Reto', 'Impressão a Laser'],
      },
      {
        id: 'adesivo-vinil',
        name: 'Adesivo de Vinil',
        image: 'https://img.usecurling.com/p/400/300?q=vinyl%20roll',
        description: 'Resistente à água e intempéries, perfeito para uso externo.',
        dependencies: ['Vinil Branco ou Transparente', 'Corte Especial', 'Resistência UV'],
      },
    ],
  },
  {
    id: 'banners',
    name: 'Banners',
    icon: ImageIcon,
    image: 'https://img.usecurling.com/p/800/600?q=banner%20printing',
    description: 'Destaque sua mensagem em grandes formatos com alta resolução.',
    subcategories: [
      {
        id: 'banner-lona',
        name: 'Banner em Lona Brilho',
        image: 'https://img.usecurling.com/p/400/300?q=large%20print',
        description: 'Tradicional banner com acabamento em bastão e cordão.',
        dependencies: ['Impressão Eco-solvente', 'Acabamento Bastão/Cordão', 'Ilhós opcional'],
      },
    ],
  },
  {
    id: 'acrilico',
    name: 'Acrílico',
    icon: Box,
    image: 'https://img.usecurling.com/p/800/600?q=acrylic',
    description: 'Peças sofisticadas em acrílico cortado a laser com alta precisão.',
    subcategories: [
      {
        id: 'trofeus',
        name: 'Troféus e Homenagens',
        image: 'https://img.usecurling.com/p/400/300?q=acrylic%20trophy',
        description: 'Premiações em acrílico com gravação a laser.',
        dependencies: ['Acrílico 3mm a 10mm', 'Gravação a Laser', 'Impressão UV'],
      },
      {
        id: 'placas-acrilico',
        name: 'Placas de Sinalização',
        image: 'https://img.usecurling.com/p/400/300?q=acrylic%20sign',
        description: 'Placas corporativas elegantes e duráveis.',
        dependencies: ['Adesivação Interna', 'Espaçadores Inox', 'Alta Durabilidade'],
      },
    ],
  },
  {
    id: 'mdf',
    name: 'MDF',
    icon: LayoutTemplate,
    image: 'https://img.usecurling.com/p/800/600?q=wood%20texture',
    description: 'Soluções criativas em MDF com corte a laser e acabamento impecável.',
    subcategories: [
      {
        id: 'caixas-mdf',
        name: 'Caixas Personalizadas',
        image: 'https://img.usecurling.com/p/400/300?q=wooden%20box',
        description: 'Caixas para presentes, bebidas e organização.',
        dependencies: ['Corte a Laser', 'Gravação', 'MDF 3mm'],
      },
      {
        id: 'displays',
        name: 'Displays de Mesa',
        image: 'https://img.usecurling.com/p/400/300?q=wooden%20display',
        description: 'Displays e expositores para pontos de venda.',
        dependencies: ['Encaixes Perfeitos', 'Pintura Opcional', 'MDF 6mm'],
      },
    ],
  },
  {
    id: 'brindes',
    name: 'Brindes',
    icon: Gift,
    image: 'https://img.usecurling.com/p/800/600?q=corporate%20gifts',
    description: 'Fidelize clientes com brindes úteis e personalizados com sua marca.',
    subcategories: [
      {
        id: 'canetas',
        name: 'Canetas Personalizadas',
        image: 'https://img.usecurling.com/p/400/300?q=pens',
        description: 'Vários modelos e cores para estampar a sua marca.',
        dependencies: ['Tampografia', 'Impressão Digital UV', 'Embalagem Individual'],
      },
      {
        id: 'canecas',
        name: 'Canecas',
        image: 'https://img.usecurling.com/p/400/300?q=mugs',
        description: 'Canecas de porcelana, polímero e alumínio.',
        dependencies: ['Sublimação', 'Transfer Laser', 'Resistente a microondas'],
      },
    ],
  },
]

export const usefulLinks = [
  { id: 'atendimento', name: 'Atendimento', icon: MapPin },
  { id: 'central-ajuda', name: 'Central de Ajuda', icon: Layers },
  { id: 'pagamento', name: 'Formas de pagamento', icon: CreditCard },
]
