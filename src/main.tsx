import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <MTThemeProvider>
                <App />
            </MTThemeProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
