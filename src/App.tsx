import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'
import { Toaster } from '@/components/ui/toaster'
import { MainStoreProvider } from '@/stores/useMainStore'

export default function App() {
  return (
    <MainStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </MainStoreProvider>
  )
}
