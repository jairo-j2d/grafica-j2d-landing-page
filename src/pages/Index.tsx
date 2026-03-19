import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
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
              href="#sobre"
              className="text-sm font-medium text-slate-600 hover:text-purple-700 transition-colors"
            >
              Sobre nós
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-slate-600 hover:text-purple-700 transition-colors"
            >
              Contato
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
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Conheça nossos serviços
              </Button>
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
