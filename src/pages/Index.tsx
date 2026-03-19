import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Briefcase, Headset, MonitorPlay, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { catalogData } from '@/lib/catalog'

export default function Index() {
  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get('category')
  const [openItems, setOpenItems] = useState<string[]>([])

  useEffect(() => {
    if (activeCategory) {
      setOpenItems((prev) => (prev.includes(activeCategory) ? prev : [...prev, activeCategory]))
      setTimeout(() => {
        document
          .getElementById(`category-${activeCategory}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    } else if (openItems.length === 0 && catalogData[0]?.categories[0]) {
      setOpenItems([catalogData[0].categories[0].id])
    }
  }, [activeCategory])

  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-50 dark:bg-card border-b border-slate-200 dark:border-border/50 py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { title: 'Nichos', icon: Briefcase },
            { title: 'Atendimento', icon: Headset },
            { title: 'Mídia', icon: MonitorPlay },
            { title: 'Pagamento', icon: CreditCard },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <item.icon className="w-4 h-4 text-[#2D1B69] dark:text-[#a3e635]" />
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white dark:bg-card border-b border-slate-200 dark:border-border/50 py-12 md:py-20 flex justify-center items-center">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1B69] dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Personalize. Peça. Receba. <br className="hidden sm:block" />
            <span className="text-slate-600 dark:text-slate-300 font-medium text-2xl md:text-3xl mt-3 block">
              A Gráfica J2D faz para você.
            </span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex flex-col gap-12 bg-transparent">
        {catalogData.map((section, idx) => {
          const sectionIds = section.categories.map((c) => c.id)
          const sectionOpenItems = openItems.filter((id) => sectionIds.includes(id))

          return (
            <section
              key={idx}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                {section.section}
              </h2>
              <Accordion
                type="multiple"
                value={sectionOpenItems}
                onValueChange={(newValues) => {
                  setOpenItems([
                    ...openItems.filter((id) => !sectionIds.includes(id)),
                    ...newValues,
                  ])
                }}
                className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {section.categories.map((cat, cIdx) => (
                  <AccordionItem
                    key={cIdx}
                    value={cat.id}
                    id={`category-${cat.id}`}
                    className="border-b border-slate-100 dark:border-slate-800 last:border-0 px-4 md:px-6 scroll-m-24"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-semibold text-slate-700 dark:text-slate-200">
                      {cat.name}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-6">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cat.items.map((item, iIdx) => (
                          <Card
                            key={iIdx}
                            className="group overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl flex flex-col"
                          >
                            <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                              <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <CardContent className="p-5 flex flex-col flex-1">
                              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium mt-auto pt-2">
                                a partir de R$ {item.price}
                              </p>
                              <Button className="w-full bg-[#2D1B69] hover:bg-[#43238a] text-white transition-colors">
                                Ver mais
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )
        })}
      </div>
    </div>
  )
}
