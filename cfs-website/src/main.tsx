import { createRoot } from 'react-dom/client'
import HeaderNavbar from './components/HeaderNavbar.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <HeaderNavbar />
    <h1>Welcome!</h1>
  </>
)
