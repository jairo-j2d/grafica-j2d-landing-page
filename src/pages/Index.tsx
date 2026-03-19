import { useSearchParams, useNavigate } from 'react-router-dom'
import { catalog, usefulLinks } from '@/lib/catalog'
import { ArrowLeft, Info, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Index() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const categoryId = searchParams.get('category')
  const infoId = searchParams.get('info')

  const category = catalog.find((c) => c.id === categoryId)
  const info = usefulLinks.find((i) => i.id === infoId)

  if (infoId && info) {
    return (
      <div className="p-6 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 -ml-4 text-violet-700 hover:text-violet-900 hover:bg-violet-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
        </Button>
        <div className="bg-white rounded-3xl shadow-xl shadow-violet-900/5 border border-violet-100 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-100 mb-6 shadow-inner border border-violet-200">
              <info.icon className="h-10 w-10 text-violet-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-violet-950 mb-4 tracking-tight">
              {info.name}
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Bem-vindo à seção dedicada a {info.name.toLowerCase()}. Nossa equipe da Gráfica J2D
              está pronta para oferecer as melhores soluções para as suas necessidades de impressão
              e acabamento.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!category) {
    return (
      <div className="p-6 md:p-12 max-w-7xl mx-auto animate-fade-in">
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-violet-950 tracking-tight">
            Produção{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Gráfica J2D
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Explore nossa linha completa de produtos impressos. Qualidade excepcional, prazos
            rigorosos e atendimento especializado para sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {catalog.map((cat, idx) => (
            <Card
              key={cat.id}
              className="group cursor-pointer overflow-hidden border-violet-100 bg-white/80 backdrop-blur shadow-sm hover:shadow-2xl hover:shadow-violet-900/10 hover:border-violet-300 transition-all duration-500 rounded-3xl"
              onClick={() => navigate(`/?category=${cat.id}`)}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-violet-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-8 relative bg-white">
                <div className="absolute -top-8 right-8 h-16 w-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-violet-100 rotate-3 group-hover:rotate-12 transition-transform duration-500">
                  <cat.icon className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-violet-950 mb-3 group-hover:text-violet-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-base text-slate-600 line-clamp-2">{cat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full animate-fade-in">
      <div className="relative h-[45vh] min-h-[350px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-12 lg:px-20 text-white max-w-7xl mx-auto w-full">
          <Button
            variant="ghost"
            className="w-fit text-white/80 hover:text-white hover:bg-white/20 mb-6 -ml-4 rounded-full"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
              <category.icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              {category.name}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl font-medium">
            {category.description}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-12 lg:px-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-2 bg-violet-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-violet-950 flex items-center gap-2">
              Modelos e Especificações
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {category.subcategories.map((sub) => (
              <AccordionItem
                key={sub.id}
                value={sub.id}
                className="bg-white border border-violet-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow px-2 md:px-4"
              >
                <AccordionTrigger className="hover:no-underline py-5 group">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-left w-full pr-4">
                    <div className="h-24 w-36 md:h-20 md:w-32 shrink-0 rounded-xl overflow-hidden border border-slate-100 shadow-inner">
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-violet-700 transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-base text-slate-500 mt-1 line-clamp-1">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2 md:pl-[10.5rem]">
                  <div className="px-4 md:px-0">
                    <p className="text-slate-600 mb-6 text-base leading-relaxed">
                      {sub.description}
                    </p>

                    <div className="bg-violet-50/70 rounded-2xl p-6 border border-violet-100">
                      <h4 className="text-sm font-bold text-violet-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                        <Info className="h-4 w-4" /> Detalhes & Opções
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sub.dependencies.map((dep, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="h-5 w-5 text-violet-500 shrink-0 mt-0.5" />
                            <span>{dep}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
