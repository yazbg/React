import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card';
import Button from './components/Button';
import TailwindText from './components/Text/Text';
import StaticComponent from './components/StaticComponent/StaticComponent.jsx/StaticComponent';
import Navbar from './components/Navbar/Navbar';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail.jsx';

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main className="pt-24 pb-10">
        <Routes>
          <Route path="/" element={
            <>
              <TailwindText />
              <div className="flex justify-center flex-wrap gap-8 my-10 px-4">
                {/* Tarjeta 1 (Izquierda) */}
                <Card
                  image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                  title="Desarrollo Frontend"
                  description="Domina HTML, CSS y JavaScript para construir mecánicas interactivas y dinámicas."
                  buttonText="Ver Curso"
                />

                {/* Tarjeta 2 (Centro - Original) */}
                <Card />

                {/* Tarjeta 3 (Derecha) */}
                <Card
                  image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
                  title="Seguridad Web"
                  description="Protege tus aplicaciones contra vulnerabilidades comunes y mejora la confianza del usuario."
                  buttonText="Explorar"
                />
              </div>
              <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
                <Button>Button 2</Button>
              </div>
              <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <Button blue>Button 3</Button>
              </div>
              <TailwindText />
              <StaticComponent />
              <UserList />
            </>
          } />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
