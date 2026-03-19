import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/hooks/use-toast'
import useMainStore from '@/stores/useMainStore'

const PRODUCTS = ['Adesivos', 'Banners', 'Acrílico', 'MDF', 'Brindes']

export function RegistrationModal() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const { addClient } = useMainStore()

  const [preferences, setPreferences] = useState<string[]>([])
  const [origem, setOrigem] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      nome: { value: string }
      email: { value: string }
      whatsapp: { value: string }
      cidade: { value: string }
    }

    addClient({
      nome: target.nome.value,
      email: target.email.value,
      whatsapp: target.whatsapp.value,
      cidade: target.cidade.value,
      origem: origem || 'outros',
      preferences,
    })

    toast({
      title: 'Cadastro realizado!',
      description: 'Suas informações foram salvas com sucesso.',
    })
    setOpen(false)
    setPreferences([])
    setOrigem('')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-violet-700 hover:bg-violet-800 text-white rounded-full px-6 transition-all duration-300 shadow-md hover:shadow-lg">
          Cadastrar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] border-violet-100 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-violet-950">
            Cadastro de Cliente
          </DialogTitle>
          <DialogDescription className="text-slate-500">
            Preencha seus dados para receber novidades e ofertas exclusivas da Gráfica J2D.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-violet-900 font-semibold">
              Nome completo
            </Label>
            <Input
              id="nome"
              required
              placeholder="Seu nome completo"
              className="border-violet-200 focus-visible:ring-violet-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-violet-900 font-semibold">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="border-violet-200 focus-visible:ring-violet-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-violet-900 font-semibold">
                WhatsApp
              </Label>
              <Input
                id="whatsapp"
                required
                placeholder="(00) 00000-0000"
                className="border-violet-200 focus-visible:ring-violet-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cidade" className="text-violet-900 font-semibold">
                Cidade
              </Label>
              <Input
                id="cidade"
                required
                placeholder="Sua cidade"
                className="border-violet-200 focus-visible:ring-violet-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="origem" className="text-violet-900 font-semibold">
                Como chegou até nós?
              </Label>
              <Select required value={origem} onValueChange={setOrigem}>
                <SelectTrigger id="origem" className="border-violet-200 focus:ring-violet-500">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="indicacao">Indicação</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <Label className="text-violet-900 font-semibold">Preferências de produto</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-violet-50/50 p-4 rounded-xl border border-violet-100">
              {PRODUCTS.map((prod) => (
                <div key={prod} className="flex items-center space-x-2">
                  <Checkbox
                    id={`pref-${prod}`}
                    checked={preferences.includes(prod)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setPreferences([...preferences, prod])
                      } else {
                        setPreferences(preferences.filter((p) => p !== prod))
                      }
                    }}
                    className="border-violet-300 text-violet-700 data-[state=checked]:bg-violet-700 data-[state=checked]:border-violet-700"
                  />
                  <label
                    htmlFor={`pref-${prod}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 cursor-pointer"
                  >
                    {prod}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <Button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white w-full sm:w-auto px-8 transition-colors"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
