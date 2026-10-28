import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
