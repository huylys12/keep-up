import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
