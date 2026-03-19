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
      categories: s.categories.filter(
        (c) =>
          c.name.toLowerCase().includes(filterText.toLowerCase()) ||
          c.items.some((i) => i.name.toLowerCase().includes(filterText.toLowerCase())),
      ),
    }))
    .filter((s) => s.categories.length > 0)

  return (
    <div className="p-4 h-full flex flex-col bg-[#2D1B69]">
      <div className="mb-6 flex items-center justify-center pt-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://img.usecurling.com/i?q=j2d+brand+logo&shape=outline&color=white"
            alt="Gráfica J2D Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-bold text-xl tracking-tight text-white">Gráfica J2D</span>
        </Link>
      </div>
      <div className="relative mb-6 px-2">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
        <Input
          type="text"
          placeholder="Filtrar Menu Ex.: Cartões"
          className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 w-full rounded-md"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-3 px-4">
        Categorias
      </div>
      <div className="overflow-y-auto custom-scrollbar flex-1 -mx-2 px-2">
        <Accordion type="multiple" className="w-full">
          {filtered.map((s, idx) => (
            <AccordionItem value={s.section} key={idx} className="border-white/10">
              <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3 px-4 text-white/90 hover:text-white text-left group">
                <span className="group-hover:translate-x-1 transition-transform">{s.section}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-1 px-4">
                <Accordion type="multiple" className="w-full border-l border-white/20 ml-2 pl-2">
                  {s.categories.map((cat, i) => (
                    <AccordionItem value={cat.id} key={i} className="border-0">
                      <AccordionTrigger className="text-xs font-medium py-2 text-white/80 hover:text-white text-left hover:no-underline">
                        {cat.name}
                      </AccordionTrigger>
                      <AccordionContent className="pb-2">
                        <div className="flex flex-col gap-1 pl-2 border-l border-white/10 ml-1">
                          {cat.items.map((item, j) => (
                            <Link
                              key={j}
                              to={`/?category=${cat.id}`}
                              className="text-[11px] py-1.5 px-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors line-clamp-1"
                              title={item.name}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
        <header className="sticky top-0 z-40 w-full bg-white dark:bg-card border-b border-slate-200 dark:border-border/50 shadow-sm py-4">
          <div className="container mx-auto px-4 flex items-start justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-4 mt-1">
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

            <div className="hidden lg:flex flex-1 max-w-2xl mt-1 lg:px-8">
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

            <div className="flex items-start gap-4 lg:gap-8 shrink-0 ml-auto">
              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center gap-3 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800 w-full justify-end">
                  <User className="w-6 h-6 text-slate-400" />
                  <div className="flex flex-col leading-tight text-right">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Bem-vindo!</span>
                    <span className="text-sm font-semibold text-[#2D1B69] dark:text-[#a3e635] hover:underline cursor-pointer">
                      Entre ou cadastre-se
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 items-end pr-1">
                  {[
                    { title: 'Nichos de atuação', icon: Briefcase },
                    { title: 'Atendimento', icon: Headset },
                    { title: 'Mídia Própria', icon: MonitorPlay },
                    { title: 'Cartão de Crédito', icon: CreditCard },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#2D1B69] dark:hover:text-[#a3e635] cursor-pointer group transition-colors"
                    >
                      <span className="text-[10px] font-bold tracking-wider opacity-80 group-hover:opacity-100 uppercase">
                        {item.title}
                      </span>
                      <item.icon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden xl:flex items-center gap-3 mt-1 cursor-pointer group">
                <div className="w-8 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-400 group-hover:border-[#2D1B69] group-hover:text-[#2D1B69] dark:group-hover:border-[#a3e635] dark:group-hover:text-[#a3e635] transition-colors">
                  <span className="font-bold text-sm">i</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Sobre a Zap</span>
                  <span className="text-sm font-semibold group-hover:underline text-slate-700 dark:text-slate-200">
                    Central de ajuda
                  </span>
                </div>
              </div>

              <div className="flex lg:hidden flex-col items-end gap-2 mt-1">
                <Button size="icon" variant="outline" className="rounded-full h-10 w-10">
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              <Button
                size="icon"
                className="rounded-full bg-[#bef264] text-[#1a2e05] hover:bg-[#a3e635] shadow-md h-12 w-12 shrink-0 mt-1"
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
