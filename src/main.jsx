import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const deferRender = async () => {
  let useMock = false;
  try { useMock = JSON.parse(import.meta.env.VITE_MOCK); } catch { }
  if (!useMock) return;
  const { worker } = await import('./browser/worker.ts');
  worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})

