import { Link, Outlet } from 'react-router-dom'
import { Search, Menu, User, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { catalogData } from '@/lib/catalog'

interface SidebarNavProps {
  filterText: string
  setFilterText: (text: string) => void
}

function SidebarNav({ filterText, setFilterText }: SidebarNavProps) {
  const filtered = catalogData
    .map((s) => ({
      ...s,
      categories: s.categories.filter((c) =>
        c.name.toLowerCase().includes(filterText.toLowerCase()),
      ),
    }))
    .filter((s) => s.categories.length > 0)

  return (
    <div className="p-6 h-full flex flex-col">
      <Link to="/" className="flex items-center gap-3 mb-8 px-2">
        <img
          src="https://img.usecurling.com/i?q=j2d+brand+logo&shape=outline&color=white"
          alt="Gráfica J2D Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="font-bold text-xl tracking-tight text-white">Gráfica J2D</span>
      </Link>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
        <Input
          type="text"
          placeholder="Filtrar categorias..."
          className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-2">
        Catálogo
      </div>
      <div className="overflow-y-auto custom-scrollbar flex-1 -mx-2 px-2">
        <Accordion type="multiple" className="w-full">
          {filtered.map((s, idx) => (
            <AccordionItem value={s.section} key={idx} className="border-white/10">
              <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3 text-white/90 hover:text-white text-left">
                {s.section}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1 pl-3 pb-2">
                  {s.categories.map((cat, i) => (
                    <Link
                      key={i}
                      to={`/?category=${cat.id}`}
                      className="text-sm py-2 px-3 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default function Layout() {
  const [filterText, setFilterText] = useState('')

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-background flex-col lg:flex-row">
      <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-0 h-full bg-[#2D1B69] text-white z-50 shadow-xl">
        <SidebarNav filterText={filterText} setFilterText={setFilterText} />
      </aside>

      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen relative w-full lg:w-[calc(100%-16rem)]">
        <header className="sticky top-0 z-40 w-full bg-white dark:bg-card border-b border-border/50 shadow-sm py-3">
          <div className="container mx-auto px-4 flex items-center justify-between gap-4">
            <div className="flex lg:hidden items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] bg-[#2D1B69] text-white border-r-[#2D1B69] p-0"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <SidebarNav filterText={filterText} setFilterText={setFilterText} />
                </SheetContent>
              </Sheet>
            </div>

            <div className="hidden sm:flex flex-1 max-w-xl relative group ml-2 lg:ml-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-[#2D1B69] transition-colors" />
              <Input
                type="search"
                placeholder="O que você deseja imprimir hoje?"
                className="w-full pl-10 bg-slate-100 dark:bg-muted/50 border-transparent rounded-full focus-visible:ring-[#2D1B69] focus-visible:bg-white transition-all h-10"
              />
            </div>

            <div className="flex items-center gap-2 md:gap-4 ml-auto">
              <Button
                variant="outline"
                className="rounded-full hover:bg-[#2D1B69] hover:text-white border-slate-200 hidden md:flex h-10"
              >
                <User className="w-4 h-4 mr-2" /> Entrar / Cadastrar
              </Button>
              <Button
                size="icon"
                className="rounded-full bg-[#bef264] text-[#1a2e05] hover:bg-[#a3e635] shadow-md h-10 w-10 shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
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
