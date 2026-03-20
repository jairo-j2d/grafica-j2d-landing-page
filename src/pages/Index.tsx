import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import logoImg from '@/assets/logo-j2d-27bae.png'
import { ChevronRight, Printer, Star, Zap } from 'lucide-react'

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Gráfica J2D Logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold tracking-tight text-purple-900">Gráfica J2D</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#servicos"
              className="text-sm font-medium text-slate-600 hover:text-purple-700 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#produtos"
              className="text-sm font-medium text-slate-600 hover:text-purple-700 transition-colors"
            >
              Produtos
            </a>
            <a
              href="#sobre"
              className="text-sm font-medium text-slate-600 hover:text-purple-700 transition-colors"
            >
              Sobre nós
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button
                variant="outline"
                className="text-purple-700 border-purple-200 hover:bg-purple-50"
              >
                Área do Cliente
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-purple-900 py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1200/800?q=printing&color=purple')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container relative mx-auto px-4 md:px-6 text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in-up">
              Impressões de Alta Qualidade para o seu Negócio
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg text-purple-100 animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              A Gráfica J2D oferece soluções completas em impressão digital e offset. Rapidez,
              qualidade excepcional e o melhor custo-benefício.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-purple-900 hover:bg-gray-100 font-semibold"
              >
                Solicitar Orçamento <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                >
                  Conheça nossos serviços
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Nossos Serviços</h2>
              <p className="mt-4 text-lg text-slate-600">
                Tudo o que você precisa em material gráfico num só lugar.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Impressão Digital',
                  desc: 'Ideal para pequenas tiragens com alta velocidade e qualidade.',
                  icon: Printer,
                },
                {
                  title: 'Materiais Promocionais',
                  desc: 'Banners, faixas, panfletos e cartões de visita.',
                  icon: Zap,
                },
                {
                  title: 'Acabamentos Especiais',
                  desc: 'Laminação, verniz localizado, corte e vinco.',
                  icon: Star,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-purple-100"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-700 mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="produtos" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Categorias em Destaque
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Explore nosso portfólio completo de produtos
              </p>
            </div>

            <Tabs defaultValue="adesivos" className="w-full max-w-5xl mx-auto">
              <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-slate-100 p-2 rounded-2xl mb-12">
                <TabsTrigger
                  value="adesivos"
                  className="rounded-xl px-6 py-3 data-[state=active]:bg-purple-700 data-[state=active]:text-white text-base"
                >
                  Adesivos
                </TabsTrigger>
                <TabsTrigger
                  value="banners"
                  className="rounded-xl px-6 py-3 data-[state=active]:bg-purple-700 data-[state=active]:text-white text-base"
                >
                  Banners
                </TabsTrigger>
                <TabsTrigger
                  value="brindes"
                  className="rounded-xl px-6 py-3 data-[state=active]:bg-purple-700 data-[state=active]:text-white text-base"
                >
                  Brindes
                </TabsTrigger>
                <TabsTrigger
                  value="especiais"
                  className="rounded-xl px-6 py-3 data-[state=active]:bg-purple-700 data-[state=active]:text-white text-base"
                >
                  Acrílico & MDF
                </TabsTrigger>
              </TabsList>

              <TabsContent value="adesivos" className="animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={`https://img.usecurling.com/p/400/300?q=stickers&color=purple&seed=${i}`}
                          alt="Adesivos"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          Adesivo Personalizado {i}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          Corte especial, alta durabilidade e resistente à água.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="banners" className="animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={`https://img.usecurling.com/p/400/300?q=banner&color=purple&seed=${i}`}
                          alt="Banners"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          Banner Lona Frontlight {i}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          Impressão digital de alta resolução com acabamento profissional.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="brindes" className="animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={`https://img.usecurling.com/p/400/300?q=gifts&color=purple&seed=${i}`}
                          alt="Brindes"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          Brinde Exclusivo {i}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          Canecas, canetas, chaveiros e muito mais com a sua marca.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="especiais" className="animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={`https://img.usecurling.com/p/400/300?q=acrylic&color=purple&seed=${i}`}
                          alt="Acrílico e MDF"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">
                          Peça em Acrílico/MDF {i}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          Trabalhos precisos a laser para decoração e sinalização.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img
              src={logoImg}
              alt="Gráfica J2D Logo"
              className="h-8 w-8 object-contain grayscale opacity-70"
            />
            <span className="text-xl font-bold text-white">Gráfica J2D</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Gráfica J2D. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
