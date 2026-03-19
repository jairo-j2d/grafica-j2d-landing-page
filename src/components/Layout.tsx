import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  Search,
  Menu,
  User,
  ShoppingBag,
  Briefcase,
  Headset,
  MonitorPlay,
  CreditCard,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { SidebarNav } from './SidebarNav'

export default function Layout() {
  const [filterText, setFilterText] = useState('')

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-background flex-col lg:flex-row">
      <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-0 h-full bg-[#2D1B69] text-white z-50 shadow-xl">
        <SidebarNav filterText={filterText} setFilterText={setFilterText} />
      </aside>

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen relative w-full lg:w-[calc(100%-16rem)]">
        {/* Horizontal Utility Navigation */}
        <div className="hidden lg:flex bg-slate-100 dark:bg-slate-900/50 py-1.5 px-4 lg:px-8 border-b border-slate-200 dark:border-border/50 justify-end">
          <div className="flex items-center gap-6">
            {[
              { title: 'Nichos de atuação', icon: Briefcase },
              { title: 'Atendimento', icon: Headset },
              { title: 'Mídia Própria', icon: MonitorPlay },
              { title: 'Cartão de Crédito', icon: CreditCard },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-[#2D1B69] dark:hover:text-[#a3e635] cursor-pointer transition-colors group"
              >
                <item.icon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80 group-hover:opacity-100">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <header className="sticky top-0 z-40 w-full bg-white dark:bg-card border-b border-slate-200 dark:border-border/50 shadow-sm py-4">
          <div className="container mx-auto px-4 flex items-center justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex lg:hidden items-center">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <Menu className="w-6 h-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] bg-[#2D1B69] text-white p-0">
                    <SheetHeader className="sr-only">
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <SidebarNav filterText={filterText} setFilterText={setFilterText} />
                  </SheetContent>
                </Sheet>
              </div>
              <Link to="/" className="flex items-center gap-2 md:gap-3">
                <img
                  src="https://img.usecurling.com/i?q=j2d+brand+logo&shape=outline&color=green"
                  alt="Gráfica J2D Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="font-bold text-xl md:text-2xl tracking-tight text-slate-800 dark:text-white hidden sm:block">
                  Gráfica J2D
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex flex-1 max-w-2xl px-4 xl:px-8">
              <div className="relative w-full group">
                <Input
                  type="search"
                  placeholder="Digite aqui o que está procurando..."
                  className="w-full pl-5 pr-12 border-2 border-slate-200 dark:border-slate-700 rounded-full focus-visible:ring-0 focus-visible:border-[#2D1B69] dark:focus-visible:border-[#a3e635] transition-all h-12 text-base shadow-sm"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 bottom-1 h-10 w-10 rounded-full bg-[#2D1B69] hover:bg-[#43238a] text-white shadow-md"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-8 shrink-0 ml-auto">
              <div className="hidden lg:flex items-center gap-3">
                <User className="w-8 h-8 text-slate-400 p-1 border-2 border-slate-200 rounded-full" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Bem-vindo!</span>
                  <span className="text-sm font-semibold text-[#2D1B69] dark:text-[#a3e635] hover:underline cursor-pointer">
                    Entre ou cadastre-se
                  </span>
                </div>
              </div>

              <div className="hidden xl:flex items-center gap-3 cursor-pointer group">
                <div className="w-8 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-400 group-hover:border-[#2D1B69] group-hover:text-[#2D1B69] transition-colors">
                  <span className="font-bold text-sm">i</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Sobre a J2D</span>
                  <span className="text-sm font-semibold group-hover:underline text-slate-700 dark:text-slate-200">
                    Central de ajuda
                  </span>
                </div>
              </div>

              <div className="flex lg:hidden">
                <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              <Button
                size="icon"
                className="rounded-full bg-[#bef264] text-[#1a2e05] hover:bg-[#a3e635] shadow-md h-12 w-12 shrink-0"
              >
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>

        <footer className="bg-white border-t py-10 dark:bg-card mt-auto">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="https://img.usecurling.com/i?q=j2d+brand+logo&shape=outline&color=black"
                  alt="Gráfica J2D Logo"
                  className="h-8 w-8 object-contain dark:invert"
                />
                <span className="font-bold text-xl text-slate-800 dark:text-white">
                  Gráfica J2D
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Transformando suas ideias em impressões de alta qualidade com agilidade e
                compromisso.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Contato</h4>
              <p>CNPJ: 00.000.000/0001-00</p>
              <p>contato@graficaj2d.com.br</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 pt-6 border-t border-slate-100 dark:border-border/50 text-center text-sm text-muted-foreground">
            © 2026 Gráfica J2D. Todos os direitos reservados.
          </div>
        </footer>
      </div>
    </div>
  )
}
