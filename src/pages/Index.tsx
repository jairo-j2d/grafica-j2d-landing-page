import { ArrowRight, CheckCircle2, Image as ImageIcon, Truck, Upload, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
    desc: 'Corte a laser impecável para displays e troféus.',
    img: 'https://img.usecurling.com/p/400/300?q=acrylic+sign&color=cyan',
  },
  {
    title: 'MDF',
    desc: 'Peças rústicas ou pintadas sob medida.',
    img: 'https://img.usecurling.com/p/400/300?q=wood+cutout&color=orange',
  },
]

const steps = [
  {
    title: '1. Escolha seu produto',
    desc: 'Navegue pelas nossas categorias e selecione o material ideal para o seu projeto.',
    icon: Palette,
  },
  {
    title: '2. Envie sua arte',
    desc: 'Faça o upload do seu design em alta resolução diretamente na nossa plataforma.',
    icon: Upload,
  },
  {
    title: '3. Receba em casa',
    desc: 'Nós imprimimos com qualidade máxima e entregamos na sua porta.',
    icon: Truck,
  },
]

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-[#2D1B69] overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B69] via-[#43238a] to-[#6B21A8] opacity-90" />

        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

        <div className="container relative mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left z-10 animate-fade-in-up">
            <Badge
              variant="outline"
              className="w-fit mx-auto lg:mx-0 text-white/90 border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm"
            >
              ✨ Qualidade Premium Garantida
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Personalize. Peça. Receba. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                A J2D faz para você.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 font-medium">
              Adesivos, banners, acrílico, MDF e muito mais — do pedido à entrega, sem complicação.
              O parceiro ideal para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#bef264] text-[#1a2e05] hover:bg-[#a3e635] text-base md:text-lg font-bold rounded-full px-8 py-7 animate-pulse-soft hover:scale-105 transition-all duration-300 shadow-xl"
              >
                QUERO PEDIR AGORA
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#2D1B69] rounded-full px-8 py-7 font-semibold transition-all duration-300"
              >
                Ver Tabela de Preços
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-sm text-white/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#bef264]" /> Entrega Rápida
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#bef264]" /> Suporte Online
              </div>
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
                alt="Impressão de alta qualidade"
                className="w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-white/10 rotate-[-3deg] animate-float"
              />

              {/* Floating elements for visual interest */}
              <div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Pedido #4092</p>
                  <p className="text-xs text-muted-foreground">Pronto para envio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-background/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              O que você precisa hoje?
            </h2>
            <p className="text-lg text-muted-foreground">
              De pequenos adesivos a grandes fachadas, temos a tecnologia e a expertise para
              entregar o melhor resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <Card
                key={i}
                className="group overflow-hidden border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-card"
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
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 md:py-28 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Como Funciona</h2>
            <p className="text-lg text-muted-foreground">
              Nosso processo é simples, rápido e totalmente transparente. Você no controle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border/60 -z-10" />

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-3xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2 group-hover:rotate-3">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Começar Meu Pedido
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
