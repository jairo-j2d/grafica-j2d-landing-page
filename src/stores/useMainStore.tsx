import { createContext, useContext, useState, ReactNode } from 'react'

export type Client = {
  id: string
  nome: string
  email: string
  whatsapp: string
  cidade: string
  origem: string
  preferences: string[]
}

type MainStore = {
  isAdmin: boolean
  toggleAdmin: () => void
  clients: Client[]
  addClient: (client: Omit<Client, 'id'>) => void
}

const MainContext = createContext<MainStore | undefined>(undefined)

const initialClients: Client[] = [
  {
    id: '1',
    nome: 'João Silva',
    email: 'joao@email.com',
    whatsapp: '11999999999',
    cidade: 'São Paulo',
    origem: 'google',
    preferences: ['Adesivos', 'Banners'],
  },
  {
    id: '2',
    nome: 'Maria Santos',
    email: 'maria@email.com',
    whatsapp: '11888888888',
    cidade: 'Rio de Janeiro',
    origem: 'instagram',
    preferences: ['Brindes'],
  },
  {
    id: '3',
    nome: 'Carlos Souza',
    email: 'carlos@email.com',
    whatsapp: '11777777777',
    cidade: 'Curitiba',
    origem: 'facebook',
    preferences: ['Acrílico', 'MDF'],
  },
  {
    id: '4',
    nome: 'Ana Costa',
    email: 'ana@email.com',
    whatsapp: '11666666666',
    cidade: 'Belo Horizonte',
    origem: 'indicacao',
    preferences: ['Adesivos', 'Brindes'],
  },
]

export function MainStoreProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [clients, setClients] = useState<Client[]>(initialClients)

  const toggleAdmin = () => setIsAdmin(!isAdmin)
  const addClient = (client: Omit<Client, 'id'>) => {
    setClients((prev) => [{ ...client, id: Math.random().toString() }, ...prev])
  }

  return (
    <MainContext.Provider value={{ isAdmin, toggleAdmin, clients, addClient }}>
      {children}
    </MainContext.Provider>
  )
}

export default function useMainStore() {
  const context = useContext(MainContext)
  if (!context) throw new Error('useMainStore must be used within MainStoreProvider')
  return context
}
