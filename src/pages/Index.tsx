import { useState } from 'react'
import { ChevronDown, Briefcase, Headset, MonitorPlay, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

const sections = [
  {
    title: 'Corte e gravação a laser',
    subProducts: 'Acrílico, MDF, ABS, Garrafas, PS...',
    items: [
      {
        name: 'Letreiro em Acrílico',
        price: '120,00',
        img: 'https://img.usecurling.com/p/400/300?q=acrylic+sign&color=cyan',
      },
      {
        name: 'Caixa em MDF',
        price: '45,00',
        img: 'https://img.usecurling.com/p/400/300?q=mdf+box&color=orange',
      },
      {
        name: 'Corte PS Especial',
        price: '80,00',
        img: 'https://img.usecurling.com/p/400/300?q=plastic+cutout&color=gray',
      },
    ],
  },
  {
    title: 'Impressão Digital',
    subProducts: 'Banners e Adesivos',
    items: [
      {
        name: 'Banner Lona Fosca',
        price: '50,00',
        img: 'https://img.usecurling.com/p/400/300?q=banner&color=blue',
      },
      {
        name: 'Adesivo Vinil Recorte',
        price: '15,00',
        img: 'https://img.usecurling.com/p/400/300?q=stickers&color=purple',
      },
      {
        name: 'Adesivo Automotivo',
        price: '110,00',
        img: 'https://img.usecurling.com/p/400/300?q=car+wrap&color=black',
      },
    ],
  },
  {
    title: 'Sublimação',
    subProducts: 'Canecas, Garrafas, Camisas, Bolsas, Bonés, bags...',
    items: [
      {
        name: 'Caneca Branca Personalizada',
        price: '25,00',
        img: 'https://img.usecurling.com/p/400/300?q=mug&color=white',
      },
      {
        name: 'Camisa Algodão Estampada',
        price: '35,00',
        img: 'https://img.usecurling.com/p/400/300?q=t-shirt&color=black',
      },
      {
        name: 'Boné Bordado/Sublimado',
        price: '20,00',
        img: 'https://img.usecurling.com/p/400/300?q=cap&color=red',
      },
    ],
  },
  {
    title: 'Impressões',
    subProducts: 'Apostilas, Livros, Agendas, Bloquinhos, Rifas, Cartelas, Talões, Comandas...',
    items: [
      {
        name: 'Agenda Anual Corporativa',
        price: '60,00',
        img: 'https://img.usecurling.com/p/400/300?q=planner&color=blue',
      },
      {
        name: 'Bloco de Notas A5',
        price: '10,00',
        img: 'https://img.usecurling.com/p/400/300?q=notepad&color=white',
      },
      {
        name: 'Talão de Pedidos/Comanda',
        price: '18,00',
        img: 'https://img.usecurling.com/p/400/300?q=receipt+book&color=green',
      },
    ],
  },
]

export default function Index() {
  const [isInfoBarOpen, setIsInfoBarOpen] = useState(true)

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-white dark:bg-card border-b border-slate-200 dark:border-border/50 py-12 md:py-20 flex justify-center items-center">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1B69] dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Personalize. Peça. Receba. <br className="hidden sm:block" />
            <span className="text-slate-600 dark:text-slate-300 font-medium text-2xl md:text-3xl mt-3 block">
              A Gráfica J2D faz para você.
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-white dark:bg-card border-b border-slate-100 dark:border-border/50 shadow-sm relative z-20">
        <div className="container mx-auto px-4">
          <Collapsible open={isInfoBarOpen} onOpenChange={setIsInfoBarOpen} className="w-full">
            <div className="flex items-center justify-between py-3">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Utilidades e Informações
              </span>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-slate-500 hover:text-slate-700"
                >
                  <span className="sr-only">Toggle</span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-300',
                      isInfoBarOpen && 'rotate-180',
                    )}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="pb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {[
                  { title: 'Nichos de Atuação', icon: Briefcase },
                  { title: 'Atendimento', icon: Headset },
                  { title: 'Mídia Própria', icon: MonitorPlay },
                  { title: 'Formas de Pagamento', icon: CreditCard },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-4 bg-slate-50 dark:bg-muted/40 rounded-xl border border-slate-100 dark:border-border/50"
                  >
                    <item.icon className="w-6 h-6 mb-3 text-green-500" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex flex-col gap-16">
        {sections.map((section, idx) => (
          <section
            key={idx}
            className="animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="mb-8 group cursor-default inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 inline-flex items-center gap-3">
                {section.title}
              </h2>
              <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800/50 inline-block px-3 py-1.5 rounded-md mt-2">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Inclui:
                    </span>{' '}
                    {section.subProducts}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {section.items.map((item, itemIdx) => (
                <Card
                  key={itemIdx}
                  className="group overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium">
                      a partir de R$ {item.price}
                    </p>
                    <Button className="w-full bg-[#2D1B69] text-white hover:bg-[#43238a] transition-colors">
                      Ver mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
