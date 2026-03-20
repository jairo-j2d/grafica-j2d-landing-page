import { Outlet, Link, useNavigate } from 'react-router-dom'
import { SidebarNav } from '@/components/SidebarNav'
import { Menu, LayoutDashboard, LogIn, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { RegistrationModal } from '@/components/RegistrationModal'
import bgImg from '@/assets/geometric-5b34b.png'
import logoImg from '@/assets/logo-j2d-27bae.png'
import useMainStore from '@/stores/useMainStore'
import { useState } from 'react'

export default function Layout() {
  const { isAdmin, toggleAdmin } = useMainStore()
  const navigate = useNavigate()
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50/50 overflow-hidden font-sans">
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-cover bg-center bg-fixed mix-blend-multiply"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-violet-100 shadow-sm h-16 flex items-center justify-between px-4 md:px-6 shrink-0">
        <div className="flex items-center gap-2">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
              <SidebarNav onItemClick={() => setSheetOpen(false)} />
            </SheetContent>
          </Sheet>

          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity md:hidden"
          >
            <img src={logoImg} className="h-9 w-9 object-contain" alt="Logo Gráfica J2D" />
            <span className="font-bold text-lg text-violet-950 tracking-tight">Gráfica J2D</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          {isAdmin ? (
            <>
              <Button
                variant="outline"
                className="hidden md:flex border-violet-200 text-violet-700 hover:bg-violet-50"
                onClick={() => navigate('/dashboard')}
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                onClick={() => {
                  toggleAdmin()
                  navigate('/')
                }}
                title="Sair do modo administrador"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-500 hover:text-violet-700 hover:bg-violet-50 transition-colors"
              onClick={toggleAdmin}
              title="Acesso Restrito Admin"
            >
              <LogIn className="h-5 w-5" />
            </Button>
          )}
          <RegistrationModal />
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
