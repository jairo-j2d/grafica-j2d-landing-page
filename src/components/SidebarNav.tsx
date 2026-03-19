import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Settings, ShoppingCart, Users, LogOut } from 'lucide-react'
import logoImg from '@/assets/logo-j2d-27bae.png'

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  onItemClick?: () => void
}

export function SidebarNav({ className, onItemClick, ...props }: SidebarNavProps) {
  const location = useLocation()

  const navItems = [
    { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { title: 'Pedidos', href: '/pedidos', icon: ShoppingCart },
    { title: 'Clientes', href: '/clientes', icon: Users },
    { title: 'Configurações', href: '/configuracoes', icon: Settings },
  ]

  return (
    <div
      className={cn('flex h-full flex-col bg-slate-50 border-r border-slate-200', className)}
      {...props}
    >
      <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-6 shrink-0">
        <img src={logoImg} alt="Gráfica J2D Logo" className="h-8 w-8 object-contain" />
        <span className="text-lg font-bold text-purple-900 truncate">Gráfica J2D</span>
      </div>
      <div className="flex-1 overflow-auto py-6">
        <nav className="grid gap-2 px-4">
          {navItems.map((item, index) => {
            const isActive =
              location.pathname === item.href ||
              (location.pathname === '/' && item.href === '/dashboard')
            return (
              <Link
                key={index}
                to={item.href}
                onClick={onItemClick}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-purple-100 text-purple-900'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                )}
              >
                <item.icon
                  className={cn('h-5 w-5', isActive ? 'text-purple-700' : 'text-slate-400')}
                />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="border-t border-slate-200 p-4 shrink-0">
        <Link to="/">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-slate-600 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            Sair
          </Button>
        </Link>
      </div>
    </div>
  )
}
