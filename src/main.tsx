import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as faceapi from 'face-api.js';


// faceapi.nets.tinyYolov2.loadFromUri('/models');

faceapi.nets.mtcnn.loadFromUri('/models');

Promise.all([
  // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  // faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  // faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  // faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});

