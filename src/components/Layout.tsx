import { Outlet } from 'react-router-dom'
import { SidebarNav } from '@/components/SidebarNav'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import bgImg from '@/assets/geometric-5b34b.png'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50/50 overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-cover bg-center bg-fixed mix-blend-multiply"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-violet-100 shadow-sm h-16 flex items-center px-4 md:px-6 shrink-0">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-violet-900 mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-0 w-72 bg-white/95 backdrop-blur-md border-r-violet-100"
            >
              <div className="sr-only">
                <SheetTitle>Menu de Navegação</SheetTitle>
              </div>
              <SidebarNav />
            </SheetContent>
          </Sheet>

          <img
            src="https://img.usecurling.com/i?q=printing+logo&color=violet&shape=fill"
            className="h-8 w-8 object-contain"
            alt="Logo Gráfica J2D"
          />
          <span className="font-bold text-xl text-violet-950 tracking-tight">Gráfica J2D</span>
        </div>
      </header>

      <div className="flex flex-1 relative z-10 overflow-hidden">
        <div className="hidden md:block h-full shrink-0">
          <SidebarNav />
        </div>
        <main className="flex-1 overflow-y-auto w-full relative">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
