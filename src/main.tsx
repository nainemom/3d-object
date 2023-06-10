import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadTinyFaceDetectorModel } from 'face-api.js'

const loadApp = async () => {
  await loadTinyFaceDetectorModel('./models');
  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

loadApp();

