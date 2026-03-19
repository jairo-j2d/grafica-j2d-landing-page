import { Link, Outlet } from 'react-router-dom'
import { Search, Menu, User, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

const sidebarCategories = [
  { name: 'Adesivos', isNew: false },
  { name: 'Banners', isNew: false },
  { name: 'Acrílico', isNew: false },
  { name: 'MDF', isNew: false },
  { name: 'Cartões', isNew: true },
  { name: 'Brindes', isNew: true },
]

interface SidebarNavProps {
  filterText: string
  setFilterText: (text: string) => void
  filteredCategories: Array<{ name: string; isNew: boolean }>
}

function SidebarNav({ filterText, setFilterText, filteredCategories }: SidebarNavProps) {
  return (
    <div className="p-6 h-full flex flex-col">
      <Link to="/" className="flex items-center group mb-8">
        <img
          src="https://img.usecurling.com/i?q=j2d+brand+logo&shape=lineal-color&color=white"
          alt="Gráfica J2D Logo"
          className="h-10 w-auto object-contain transition-transform group-hover:scale-105 brightness-0 invert"
        />
      </Link>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
        <Input
          type="text"
          placeholder="Filtrar categorias..."
          className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30 h-10 rounded-lg"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      <div className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
        Categorias
      </div>
      <nav className="flex flex-col gap-1 overflow-y-auto custom-scrollbar">
        {filteredCategories.map((cat, i) => (
          <Link
            key={i}
            to="/"
            className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/10 text-sm font-medium transition-colors"
          >
            <span>{cat.name}</span>
            {cat.isNew && (
              <Badge className="bg-[#bef264] text-[#1a2e05] hover:bg-[#a3e635] border-none px-1.5 py-0 text-[10px] uppercase font-bold tracking-wider rounded-sm">
                Novo
              </Badge>
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default function Layout() {
  const [filterText, setFilterText] = useState('')
  const filteredCategories = sidebarCategories.filter((c) =>
    c.name.toLowerCase().includes(filterText.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-background flex-col lg:flex-row">
      <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-0 h-full bg-[#2D1B69] text-white z-50 shadow-xl">
        <SidebarNav
          filterText={filterText}
          setFilterText={setFilterText}
          filteredCategories={filteredCategories}
        />
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
                  className="w-[300px] bg-[#2D1B69] text-white border-r-[#2D1B69] p-0 [&>button]:text-white"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Menu de Navegação</SheetTitle>
                  </SheetHeader>
                  <SidebarNav
                    filterText={filterText}
                    setFilterText={setFilterText}
                    filteredCategories={filteredCategories}
                  />
                </SheetContent>
              </Sheet>
            </div>

            <div className="hidden sm:flex flex-1 max-w-xl relative group ml-2 lg:ml-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-[#2D1B69] transition-colors" />
              <Input
                type="search"
                placeholder="O que você deseja imprimir hoje?"
                className="w-full pl-10 bg-slate-100 dark:bg-muted/50 border-transparent rounded-full focus-visible:ring-[#2D1B69] focus-visible:bg-white transition-all duration-300 h-10"
              />
            </div>

            <div className="flex items-center gap-2 md:gap-4 ml-auto">
              <Button
                variant="outline"
                className="rounded-full transition-all duration-300 hover:bg-[#2D1B69] hover:text-white border-slate-200 text-slate-700 hidden md:flex h-10"
              >
                <User className="w-4 h-4 mr-2" />
                Entrar / Cadastrar
              </Button>
              <Button
                size="icon"
                className="rounded-full bg-[#bef264] text-[#1a2e05] hover:bg-[#a3e635] hover:scale-105 transition-all shadow-md h-10 w-10 flex-shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>

        <footer className="bg-white border-t py-8 dark:bg-card mt-auto">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <Link to="/" className="flex items-center">
              <img
                src="https://img.usecurling.com/i?q=j2d+brand+logo&shape=lineal-color&color=multicolor"
                alt="Gráfica J2D Logo"
                className="h-6 w-auto object-contain grayscale opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2026 Gráfica J2D. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
