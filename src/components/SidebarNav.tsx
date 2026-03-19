import { Link, useSearchParams } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { catalog, usefulLinks } from '@/lib/catalog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function SidebarNav() {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category')
  const currentInfo = searchParams.get('info')

  return (
    <div className="w-full md:w-72 border-r border-violet-100 bg-white/60 backdrop-blur-md flex flex-col h-full shadow-[2px_0_15px_-3px_rgba(0,0,0,0.05)]">
      <ScrollArea className="flex-1 py-6">
        <div className="space-y-8 px-4 flex flex-col h-full">
          <div>
            <h3 className="mb-3 px-2 text-xs font-bold uppercase tracking-widest text-violet-400">
              Catálogo de Produtos
            </h3>
            <nav className="space-y-1.5">
              {catalog.map((item) => {
                const isActive = currentCategory === item.id
                return (
                  <Link
                    key={item.id}
                    to={`/?category=${item.id}`}
                    className={cn(
                      'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20 translate-x-1'
                        : 'text-slate-600 hover:bg-violet-50 hover:text-violet-900 hover:translate-x-1',
                    )}
                  >
                    <item.icon
                      className={cn('h-4 w-4', isActive ? 'text-violet-100' : 'text-violet-400')}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <Separator className="bg-violet-100/50" />

          <div className="mt-auto">
            <h3 className="mb-3 px-2 text-xs font-bold uppercase tracking-widest text-violet-400">
              Informações Úteis
            </h3>
            <div className="flex flex-wrap gap-2 px-1">
              {usefulLinks.map((link) => {
                const isActive = currentInfo === link.id
                return (
                  <Link
                    key={link.id}
                    to={`/?info=${link.id}`}
                    className={cn(
                      'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors shadow-sm',
                      isActive
                        ? 'bg-violet-100 border-violet-200 text-violet-900'
                        : 'bg-white border-violet-100 text-slate-600 hover:bg-violet-50 hover:text-violet-900',
                    )}
                  >
                    <link.icon
                      className={cn('h-3 w-3', isActive ? 'text-violet-600' : 'text-violet-400')}
                    />
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
