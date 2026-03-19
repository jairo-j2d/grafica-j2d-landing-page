import React, { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { catalogData } from '@/lib/catalog'

const heroSlides = [
  {
    tag: 'Produtos a partir de R$ 5,25',
    title: 'Toda turma quer\ndeixar sua marca.',
    highlight: 'terceirão.',
    desc: 'Personalizados que fazem sucesso no ',
    img: 'https://img.usecurling.com/p/800/800?q=students+smiling&color=purple',
    bg: 'from-[#2D1B69] to-[#51369c]',
    btn: 'QUERO CONFERIR',
  },
  {
    tag: 'Qualidade Premium',
    title: 'Impressão Digital\nde Alta Resolução.',
    highlight: 'impacto.',
    desc: 'Banners e adesivos que geram ',
    img: 'https://img.usecurling.com/p/800/800?q=large+format+printing&color=blue',
    bg: 'from-[#1e3a8a] to-[#3b82f6]',
    btn: 'VER PRODUTOS',
  },
  {
    tag: 'Precisão Milimétrica',
    title: 'Corte e Gravação\na Laser.',
    highlight: 'perfeição.',
    desc: 'Acrílico e MDF cortados com ',
    img: 'https://img.usecurling.com/p/800/800?q=laser+cutting+machine&color=cyan',
    bg: 'from-[#0891b2] to-[#06b6d4]',
    btn: 'CONHEÇA A LINHA',
  },
]

export default function Index() {
  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get('category')
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

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
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[1400px] mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroSlides.map((slide, idx) => (
              <CarouselItem key={idx}>
                <section
                  className={`w-full relative bg-gradient-to-r ${slide.bg} h-[350px] md:h-[450px] flex items-center`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[url('https://img.usecurling.com/p/1200/600?q=halftone+dots&color=white')] mix-blend-overlay"></div>
                  <img
                    src={slide.img}
                    alt="Banner"
                    className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-left opacity-90 z-0 hidden lg:block"
                  />
                  <div className="relative z-10 px-8 md:px-16 max-w-2xl">
                    <div className="inline-block bg-[#bef264] text-[#1a2e05] font-black px-5 py-1.5 rounded-full text-sm md:text-base mb-6 -rotate-2 shadow-xl border-2 border-white/20">
                      {slide.tag}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight drop-shadow-md whitespace-pre-line">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 font-medium max-w-lg">
                      {slide.desc}
                      <span className="font-bold border-b-2 border-[#bef264] pb-1">
                        {slide.highlight}
                      </span>
                    </p>
                    <Button className="bg-[#bef264] hover:bg-[#a3e635] text-[#1a2e05] font-extrabold text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                      {slide.btn}
                    </Button>
                  </div>
                </section>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 hidden md:flex border-none bg-white/20 hover:bg-white/40 text-white" />
          <CarouselNext className="right-4 hidden md:flex border-none bg-white/20 hover:bg-white/40 text-white" />
        </Carousel>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 dark:text-slate-100 tracking-tight">
              Catálogo de{' '}
              <span className="font-semibold text-[#2D1B69] dark:text-[#a3e635]">Produtos</span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Navegue pelas nossas seções para encontrar as melhores opções de impressão e
              personalização.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {catalogData.map((section, idx) => (
              <AccordionItem
                value={section.section}
                key={idx}
                className="bg-white dark:bg-card border border-slate-200 dark:border-slate-800 rounded-2xl px-6 md:px-8 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 group">
                  <span className="group-hover:text-[#2D1B69] dark:group-hover:text-[#a3e635] transition-colors">
                    {section.section}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-3"
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
                        className="border border-slate-100 dark:border-slate-800/60 rounded-xl px-5 bg-slate-50/50 dark:bg-slate-900/20 scroll-m-32"
                      >
                        <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium text-slate-700 dark:text-slate-300">
                          {cat.name}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            {cat.items.map((item, iIdx) => (
                              <div
                                key={iIdx}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 hover:border-[#2D1B69]/30 dark:hover:border-[#a3e635]/50 transition-colors cursor-pointer group shadow-sm"
                              >
                                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-900">
                                  <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm md:text-base truncate group-hover:text-[#2D1B69] dark:group-hover:text-[#a3e635] transition-colors">
                                    {item.name}
                                  </h4>
                                  <div className="flex flex-col mt-1">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                                      A partir de
                                    </span>
                                    <span className="font-bold text-[#2D1B69] dark:text-[#a3e635]">
                                      R$ {item.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
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
    </div>
  )
}
