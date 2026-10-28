import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Nav />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
