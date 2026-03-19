import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { catalogData } from '@/lib/catalog'

export interface SidebarNavProps {
  filterText: string
  setFilterText: (text: string) => void
}

export function SidebarNav({ filterText, setFilterText }: SidebarNavProps) {
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
