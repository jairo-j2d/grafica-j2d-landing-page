import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import useMainStore from '@/stores/useMainStore'
import { Users, CreditCard, Banknote, QrCode, TrendingUp, Package } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { Badge } from '@/components/ui/badge'

export default function Dashboard() {
  const { isAdmin, clients } = useMainStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) {
      navigate('/')
    }
  }, [isAdmin, navigate])

  const chartData = useMemo(() => {
    const counts: Record<string, number> = {}
    clients.forEach((c) => {
      c.preferences.forEach((p) => {
        counts[p] = (counts[p] || 0) + 1
      })
    })
    return Object.entries(counts)
      .map(([name, consultas]) => ({ name, consultas }))
      .sort((a, b) => b.consultas - a.consultas)
  }, [clients])

  const chartConfig = {
    consultas: {
      label: 'Consultas',
      color: 'hsl(var(--primary))',
    },
  }

  if (!isAdmin) return null

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-violet-950 tracking-tight">
          Dashboard Administrativo
        </h1>
        <p className="text-slate-500 mt-2">Visão geral do negócio, clientes e preferências.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-violet-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total de Clientes Cadastrados
            </CardTitle>
            <Users className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-violet-950">{clients.length}</div>
            <p className="text-xs text-slate-500 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
              Atualizado em tempo real
            </p>
          </CardContent>
        </Card>

        {/* Payment Methods Cards */}
        <Card className="border-violet-100 shadow-sm bg-gradient-to-br from-violet-600 to-violet-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-violet-100">Pix</CardTitle>
            <QrCode className="h-4 w-4 text-violet-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Aceito</div>
            <p className="text-xs text-violet-200 mt-1">Aprovação imediata</p>
          </CardContent>
        </Card>

        <Card className="border-violet-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-600">Cartão até 6x</CardTitle>
            <CreditCard className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-violet-950">Sem juros</div>
            <p className="text-xs text-slate-500 mt-1">Visa, Mastercard, Elo</p>
          </CardContent>
        </Card>

        <Card className="border-violet-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-slate-600">Boleto</CardTitle>
            <Banknote className="h-4 w-4 text-violet-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-violet-950">Faturado</div>
            <p className="text-xs text-slate-500 mt-1">Para clientes PJ sob análise</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 lg:col-span-2 border-violet-100 shadow-sm flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg text-violet-950 flex items-center gap-2">
              <Package className="h-5 w-5 text-violet-600" />
              Produtos Mais Consultados
            </CardTitle>
            <CardDescription>
              Interesse por categoria baseado nas preferências dos clientes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="h-[300px] w-full">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                    <Tooltip
                      content={<ChartTooltipContent />}
                      cursor={{ fill: 'var(--color-violet-50)' }}
                    />
                    <Bar
                      dataKey="consultas"
                      fill={chartConfig.consultas.color}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 border-violet-100 shadow-sm flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg text-violet-950 flex items-center gap-2">
              Formas de Pagamento Aceitas
            </CardTitle>
            <CardDescription>Resumo das modalidades ativas na plataforma</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-4">
            <div className="p-4 rounded-xl border border-violet-100 bg-violet-50/50 flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-violet-100">
                <QrCode className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <h4 className="font-semibold text-violet-950">PIX</h4>
                <p className="text-sm text-slate-500">Chave CNPJ ou QR Code na fatura.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-violet-100 bg-violet-50/50 flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-violet-100">
                <CreditCard className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <h4 className="font-semibold text-violet-950">Cartão de Crédito</h4>
                <p className="text-sm text-slate-500">Até 6x sem juros ou 12x com acréscimo.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-violet-100 bg-violet-50/50 flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-violet-100">
                <Banknote className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <h4 className="font-semibold text-violet-950">Boleto Bancário</h4>
                <p className="text-sm text-slate-500">
                  À vista ou faturado sob análise de crédito.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-violet-100 shadow-sm overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg text-violet-950">Lista de Clientes Recentes</CardTitle>
          <CardDescription>Últimos cadastros realizados e suas preferências</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/80">
              <TableRow className="border-violet-100 hover:bg-slate-50/80">
                <TableHead className="text-slate-600 font-semibold px-6">Nome</TableHead>
                <TableHead className="text-slate-600 font-semibold px-6">Cidade</TableHead>
                <TableHead className="text-slate-600 font-semibold px-6 text-right">
                  Produto Preferido
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-slate-500">
                    Nenhum cliente cadastrado.
                  </TableCell>
                </TableRow>
              ) : (
                clients.slice(0, 5).map((client) => (
                  <TableRow
                    key={client.id}
                    className="border-violet-100 hover:bg-violet-50/50 transition-colors"
                  >
                    <TableCell className="font-medium text-slate-800 px-6 py-4">
                      {client.nome}
                    </TableCell>
                    <TableCell className="text-slate-600 px-6 py-4">{client.cidade}</TableCell>
                    <TableCell className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 flex-wrap">
                        {client.preferences.length > 0 ? (
                          client.preferences.slice(0, 2).map((pref, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-violet-100 text-violet-700 hover:bg-violet-200"
                            >
                              {pref}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-slate-400 text-sm">-</span>
                        )}
                        {client.preferences.length > 2 && (
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                            +{client.preferences.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
