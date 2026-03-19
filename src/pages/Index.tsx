import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
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

  useEffect(() => {
    if (activeCategory) {
      setTimeout(() => {
        document
          .getElementById(`category-${activeCategory}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 150)
    }
  }, [activeCategory])

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] dark:bg-background pb-20">
      <div className="w-full px-4 md:px-8 py-8 md:py-12 bg-white dark:bg-card border-b border-slate-200 dark:border-border/50">
        <section className="w-full max-w-[1400px] mx-auto relative bg-gradient-to-r from-[#2D1B69] to-[#51369c] rounded-[2rem] overflow-hidden shadow-2xl h-[350px] md:h-[450px] flex items-center">
          <div className="absolute inset-0 opacity-10 bg-[url('https://img.usecurling.com/p/1200/600?q=halftone+dots&color=white')] mix-blend-overlay"></div>
          <img
            src="https://img.usecurling.com/p/800/800?q=students+smiling&color=purple"
            alt="Banner"
            className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-left opacity-90 z-0 hidden lg:block"
          />

          <div className="relative z-10 px-8 md:px-16 max-w-2xl">
            <div className="inline-block bg-[#bef264] text-[#1a2e05] font-black px-5 py-1.5 rounded-full text-sm md:text-base mb-6 -rotate-2 shadow-xl border-2 border-white/20">
              Produtos a partir de R$ 5,25
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight drop-shadow-md">
              Toda turma quer
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bef264] to-[#a3e635]">
                deixar sua marca.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-medium max-w-lg">
              Personalizados que fazem sucesso no{' '}
              <span className="font-bold border-b-2 border-[#bef264] pb-1">terceirão.</span>
            </p>
            <Button className="bg-[#bef264] hover:bg-[#a3e635] text-[#1a2e05] font-extrabold text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              QUERO CONFERIR
            </Button>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-[1400px] mx-auto">
          {catalogData.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-8 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h2 className="text-4xl font-light text-slate-800 dark:text-slate-100 text-center tracking-tight">
                Linha <span className="font-semibold">{section.section}</span>
              </h2>

              <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800 p-6 md:p-8 flex flex-col h-full">
                <div className="w-full h-[280px] md:h-[350px] bg-slate-100 dark:bg-slate-800 rounded-t-[150px] overflow-hidden mb-8 relative group cursor-pointer shadow-inner shrink-0">
                  <img
                    src={
                      section.categories[0]?.items[0]?.img ||
                      `https://img.usecurling.com/p/600/600?q=${encodeURIComponent(section.section)}`
                    }
                    alt={section.section}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B69]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <span className="text-white font-bold tracking-widest uppercase text-sm bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
                      Ver destaques
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full px-2"
                    defaultValue={
                      activeCategory && section.categories.some((c) => c.id === activeCategory)
                        ? activeCategory
                        : undefined
                    }
                  >
                    {section.categories.map((cat, cIdx) => (
                      <AccordionItem
                        value={cat.id}
                        key={cIdx}
                        id={`category-${cat.id}`}
                        className="border-b border-slate-100 dark:border-slate-800 last:border-0 scroll-m-32"
                      >
                        <AccordionTrigger className="hover:no-underline py-5 text-xl font-semibold text-slate-700 dark:text-slate-200 group">
                          <span className="group-hover:text-[#2D1B69] dark:group-hover:text-[#a3e635] transition-colors">
                            {cat.name}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                          <div className="grid gap-3 pt-2">
                            {cat.items.map((item, iIdx) => (
                              <div
                                key={iIdx}
                                className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group/item cursor-pointer"
                              >
                                <div className="flex items-center gap-4">
                                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 shadow-sm">
                                    <img
                                      src={item.img}
                                      alt={item.name}
                                      className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-[#2D1B69] dark:group-hover/item:text-[#a3e635] text-base">
                                    {item.name}
                                  </span>
                                </div>
                                <div className="flex flex-col items-end pr-2">
                                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-0.5">
                                    A partir de
                                  </span>
                                  <span className="text-base font-bold text-[#2D1B69] dark:text-[#a3e635]">
                                    R$ {item.price}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
