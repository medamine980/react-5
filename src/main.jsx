import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './configs/i18n'

const deferRender = async () => {
  let useMock = false;
  try { useMock = JSON.parse(import.meta.env.VITE_MOCK); } catch { }
  if (!useMock) return;
  const { worker } = await import('./browser/worker.js');
  worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  )
})

