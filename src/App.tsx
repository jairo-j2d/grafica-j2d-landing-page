import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import { Toaster } from './components/ui/toaster'
import { MainStoreProvider } from './stores/useMainStore'

function App() {
  return (
    <MainStoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pedidos" element={<Dashboard />} />
            <Route path="/clientes" element={<Dashboard />} />
            <Route path="/configuracoes" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </MainStoreProvider>
  )
}
export default App
