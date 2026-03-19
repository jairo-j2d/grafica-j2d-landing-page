import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, Bell } from 'lucide-react'
import logoImg from '@/assets/logo-j2d-27bae.png'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'
import { SidebarNav } from './SidebarNav'

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-col md:flex shrink-0">
        <SidebarNav />
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
          <div className="flex items-center md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 text-slate-600">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SidebarNav onItemClick={() => setIsMobileMenuOpen(false)} />
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Gráfica J2D Logo" className="h-6 w-6 object-contain" />
              <span className="font-bold text-purple-900">Gráfica J2D</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1" />

          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-slate-500 hover:text-purple-700">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
