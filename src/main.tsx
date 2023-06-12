import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { loadTinyFaceDetectorModel } from 'face-api.js'

const loadApp = async () => {
  const root = (document.querySelector('#root') as HTMLElement)
  await loadTinyFaceDetectorModel('./models');
  createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
  
  loadApp();
    


