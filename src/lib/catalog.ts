import {
  CreditCard,
  FileText,
  Image as ImageIcon,
  Layers,
  MapPin,
  Package,
  Tag,
} from 'lucide-react'

export const catalog = [
  {
    id: 'cartoes',
    name: 'Cartões de Visita',
    icon: FileText,
    image: 'https://img.usecurling.com/p/800/600?q=business%20cards',
    description: 'Deixe sua marca por onde passar com nossos cartões de visita de alta qualidade.',
    subcategories: [
      {
        id: 'cartoes-couche',
        name: 'Couchê 250g/300g',
        image: 'https://img.usecurling.com/p/400/300?q=paper%20texture&color=purple',
        description:
          'O papel mais popular do mercado, excelente custo-benefício com brilho na medida certa.',
        dependencies: [
          'Tamanho Padrão (9x5cm)',
          'Laminação Brilho ou Fosca',
          'Corte Reto ou Cantos Arredondados',
        ],
      },
      {
        id: 'cartoes-premium',
        name: 'Linha Premium',
        image: 'https://img.usecurling.com/p/400/300?q=luxury%20paper&color=purple',
        description:
          'Acabamentos sofisticados como hot stamping, verniz localizado e bordas coloridas.',
        dependencies: ['Papel Especial 350g', 'Verniz Localizado', 'Hot Stamping Dourado/Prateado'],
      },
    ],
  },
  {
    id: 'adesivos',
    name: 'Adesivos',
    icon: Tag,
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
    name: 'Banners e Lonas',
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
    id: 'brindes',
    name: 'Brindes Promocionais',
    icon: Package,
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
