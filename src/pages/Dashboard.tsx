import { useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Printer, Users, DollarSign, TrendingUp, Settings as SettingsIcon } from 'lucide-react'
import useMainStore from '@/stores/useMainStore'

export default function Dashboard() {
  const location = useLocation()
  const { clients } = useMainStore()

  if (location.pathname === '/clientes') {
    return (
      <div className="p-4 md:p-8 space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Clientes</h1>
          <p className="text-slate-500">Gerencie sua base de clientes.</p>
        </div>
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Lista de Clientes</CardTitle>
            <CardDescription>Total de {clients.length} clientes cadastrados.</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>WhatsApp</TableHead>
                  <TableHead>Cidade</TableHead>
                  <TableHead>Origem</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium whitespace-nowrap">{client.nome}</TableCell>
                    <TableCell className="whitespace-nowrap">{client.email}</TableCell>
                    <TableCell className="whitespace-nowrap">{client.whatsapp}</TableCell>
                    <TableCell className="whitespace-nowrap">{client.cidade}</TableCell>
                    <TableCell className="capitalize whitespace-nowrap">{client.origem}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (location.pathname === '/pedidos') {
    return (
      <div className="p-4 md:p-8 space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Pedidos</h1>
          <p className="text-slate-500">Acompanhe os pedidos recentes.</p>
        </div>
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Histórico de Pedidos</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Serviço</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">#{1000 + i}</TableCell>
                    <TableCell className="whitespace-nowrap">Cliente Exemplo {i}</TableCell>
                    <TableCell className="whitespace-nowrap">Cartão de Visita - 1000 un</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800">
                        Concluído
                      </span>
                    </TableCell>
                    <TableCell className="text-right whitespace-nowrap">R$ 120,00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (location.pathname === '/configuracoes') {
    return (
      <div className="p-4 md:p-8 space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Configurações</h1>
          <p className="text-slate-500">Ajustes do sistema e da sua conta.</p>
        </div>
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Preferências</CardTitle>
            <CardDescription>Gerencie as configurações da sua gráfica.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg bg-slate-50">
              <SettingsIcon className="h-6 w-6 text-slate-500" />
              <div>
                <p className="font-medium text-slate-900">Configurações Gerais</p>
                <p className="text-sm text-slate-500">
                  Opções de notificação e perfil (Em desenvolvimento)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Default Dashboard content
  const stats = [
    { title: 'Pedidos no Mês', value: '142', icon: Printer, trend: '+12.5%' },
    { title: 'Novos Clientes', value: clients.length.toString(), icon: Users, trend: '+5.2%' },
    { title: 'Receita', value: 'R$ 15.420', icon: DollarSign, trend: '+18.1%' },
    { title: 'Conversão', value: '64%', icon: TrendingUp, trend: '+2.4%' },
  ]

  return (
    <div className="p-4 md:p-8 space-y-6 animate-fade-in">
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
