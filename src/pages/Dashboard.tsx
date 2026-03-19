import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Printer, Users, DollarSign, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    { title: 'Pedidos no Mês', value: '142', icon: Printer, trend: '+12.5%' },
    { title: 'Novos Clientes', value: '28', icon: Users, trend: '+5.2%' },
    { title: 'Receita', value: 'R$ 15.420', icon: DollarSign, trend: '+18.1%' },
    { title: 'Conversão', value: '64%', icon: TrendingUp, trend: '+2.4%' },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Bem-vindo ao painel de controle da Gráfica J2D.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-slate-200 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-purple-700" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center">
                {stat.trend}{' '}
                <span className="text-slate-500 font-normal ml-1">vs mês anterior</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4 border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
            <CardDescription>Desempenho de vendas nos últimos 7 dias.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center text-slate-400 border-t border-slate-100 bg-slate-50/50 m-6 rounded-lg border-dashed">
            Gráfico de Desempenho
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3 border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Pedidos Recentes</CardTitle>
            <CardDescription>Últimos pedidos recebidos.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">
                    #{1000 + i}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none text-slate-900">
                      Cliente Exemplo {i}
                    </p>
                    <p className="text-xs text-slate-500">Cartão de Visita - 1000 un</p>
                  </div>
                  <div className="text-sm font-medium text-slate-900">R$ 120,00</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
