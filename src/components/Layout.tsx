import { Link, Outlet } from 'react-router-dom'
import { Search, Menu, User, ShoppingBag, Printer, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b shadow-sm py-3'
            : 'bg-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Printer className="w-6 h-6" />
            </div>
            <span
              className={cn(
                'text-xl font-extrabold tracking-tight transition-colors',
                isScrolled ? 'text-foreground' : 'text-white md:text-foreground', // White on hero for mobile, otherwise default
              )}
            >
              Gráfica J2D
            </span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-xl mx-auto relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              type="search"
              placeholder="O que você deseja imprimir hoje?"
              className="w-full pl-10 bg-muted/50 border-transparent rounded-full focus-visible:ring-primary focus-visible:bg-background transition-all duration-300 h-11"
            />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className={cn(
                'hidden lg:flex transition-colors',
                !isScrolled && 'md:text-white/90 hover:text-white hover:bg-white/10',
              )}
            >
              Ajuda
            </Button>
            <Button
              variant="outline"
              className={cn(
                'rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground',
                !isScrolled &&
                  'md:border-white/30 md:text-white md:hover:bg-white md:hover:text-primary',
              )}
            >
              <User className="w-4 h-4 mr-2" />
              Entrar / Cadastrar
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-[#bef264] text-black hover:bg-[#a3e635] hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button size="icon" variant="ghost" className={!isScrolled ? 'text-white' : ''}>
              <Search className="w-5 h-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className={!isScrolled ? 'text-white' : ''}>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2">
                    <Printer className="w-5 h-5 text-primary" />
                    Gráfica J2D
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Button variant="outline" className="w-full justify-start rounded-full">
                    <User className="w-4 h-4 mr-2" /> Entrar na minha conta
                  </Button>
                  <div className="py-4 border-t border-b border-border/50 flex flex-col gap-2">
                    {['Adesivos', 'Banners', 'Acrílico', 'MDF', 'Cartões de Visita'].map((item) => (
                      <Link
                        key={item}
                        to="/"
                        className="flex items-center justify-between py-2 text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item} <ChevronRight className="w-4 h-4 opacity-50" />
                      </Link>
                    ))}
                  </div>
                  <Button className="w-full rounded-full bg-[#bef264] text-black hover:bg-[#a3e635]">
                    Ver Carrinho
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t py-12 md:py-16 dark:bg-card">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Printer className="w-6 h-6 text-primary" />
              <span className="text-xl font-extrabold tracking-tight">Gráfica J2D</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Adesivos, banners, acrílico, MDF e muito mais — do pedido à entrega, sem complicação.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Adesivos Personalizados
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Banners e Lonas
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Cortes em Acrílico
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Peças em MDF
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Papelaria Corporativa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Institucional</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Prazos e Entregas
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Atendimento</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 08h às 18h</li>
              <li>Sábados: 09h às 13h</li>
              <li className="pt-2 font-medium text-primary">contato@j2d.com.br</li>
              <li className="font-medium text-primary">(11) 99999-9999</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Gráfica J2D. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
