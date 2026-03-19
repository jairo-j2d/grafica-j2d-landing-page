import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  Upload,
  Palette,
  ChevronDown,
  Briefcase,
  Headset,
  MonitorPlay,
  CreditCard,
  Search,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'

const categories = [
  {
    title: 'Adesivos',
    desc: 'Vinil, papel, recorte eletrônico e mais.',
    img: 'https://img.usecurling.com/p/400/300?q=stickers&color=purple',
    badge: 'Mais Vendido',
  },
  {
    title: 'Banners',
    desc: 'Lonas brilho ou fosco para sua marca aparecer.',
    img: 'https://img.usecurling.com/p/400/300?q=banner+print&color=blue',
  },
  {
    title: 'Acrílico',
    desc: 'Corte a laser impecável para displays.',
    img: 'https://img.usecurling.com/p/400/300?q=acrylic+sign&color=cyan',
  },
  {
    title: 'MDF',
    desc: 'Peças rústicas ou pintadas sob medida.',
    img: 'https://img.usecurling.com/p/400/300?q=wood+cutout&color=orange',
  },
]

const sidebarCategories = [
  { name: 'Adesivos', isNew: false },
  { name: 'Banners', isNew: false },
  { name: 'Acrílico', isNew: false },
  { name: 'MDF', isNew: false },
  { name: 'Cartões', isNew: true },
  { name: 'Brindes', isNew: true },
]

export default function Index() {
  const [isInfoBarOpen, setIsInfoBarOpen] = useState(true)
  const [filterText, setFilterText] = useState('')

  const filteredCategories = sidebarCategories.filter((c) =>
    c.name.toLowerCase().includes(filterText.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#F8FAFC] dark:bg-background">
      {/* Hero Section */}
      <section className="relative w-full bg-[#2D1B69] overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B69] via-[#43238a] to-[#6B21A8] opacity-90" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

        <div className="container relative mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left z-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Personalize. Peça. Receba. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                A Gráfica J2D faz para você.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 font-medium">
              Adesivos, banners, acrílico, MDF e muito mais — do pedido à entrega, sem complicação.
              O parceiro ideal para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#bef264] text-[#1a2e05] hover:bg-[#a3e635] text-base md:text-lg font-bold rounded-full px-8 py-7 animate-pulse-soft hover:scale-105 transition-all shadow-xl"
              >
                QUERO PEDIR AGORA
              </Button>
            </div>
          </div>
          <div
            className="hidden lg:block relative z-10 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#bef264]/20 to-transparent rounded-full blur-2xl animate-pulse" />
              <img
                src="https://img.usecurling.com/p/600/600?q=printing+press+modern&color=purple"
                alt="Impressão"
                className="w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-white/10 rotate-[-3deg] animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retractable Information Bar */}
      <section className="bg-white dark:bg-card border-b border-border/50 shadow-sm relative z-20">
        <div className="container mx-auto px-4">
          <Collapsible open={isInfoBarOpen} onOpenChange={setIsInfoBarOpen} className="w-full">
            <div className="flex items-center justify-between py-3">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Informações Úteis
              </span>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-500">
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
            <CollapsibleContent className="pb-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {[
                  { title: 'Nichos de Atuação', icon: Briefcase },
                  { title: 'Atendimento', icon: Headset },
                  { title: 'Mídia Própria', icon: MonitorPlay },
                  { title: 'Formas de Pagamento', icon: CreditCard },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-4 bg-slate-50 dark:bg-muted/40 rounded-xl border border-slate-100 dark:border-border/50 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#bef264]/20 flex items-center justify-center mb-3 text-green-600 dark:text-green-500">
                      <item.icon className="w-5 h-5" />
                    </div>
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

      {/* Main Layout (Sidebar + Content) */}
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Product Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 order-2 lg:order-1">
          <div className="sticky top-28 bg-white dark:bg-card p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-border/50">
            <h3 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-100">
              Categorias
            </h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Filtrar categorias..."
                className="pl-9 bg-slate-50 dark:bg-muted/50 border-transparent focus-visible:ring-green-500 h-10"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>
            <nav className="flex flex-col gap-1 mt-2">
              {filteredCategories.map((cat, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/10 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-green-700 transition-colors"
                >
                  <span>{cat.name}</span>
                  {cat.isNew && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 border-none px-1.5 py-0 text-[10px] uppercase font-bold tracking-wider rounded-sm">
                      Novo
                    </Badge>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Section */}
        <div className="flex-1 order-1 lg:order-2 flex flex-col gap-20">
          <section>
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-3 text-foreground">O que você precisa hoje?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                De pequenos adesivos a grandes fachadas, temos a tecnologia e a expertise para
                entregar o melhor resultado.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <Card
                  key={i}
                  className="group overflow-hidden border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {cat.badge && (
                      <Badge className="absolute top-3 right-3 bg-secondary text-white border-none shadow-md">
                        {cat.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{cat.desc}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
                    >
                      Ver Mais{' '}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
