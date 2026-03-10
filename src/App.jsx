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
import SearchPosts from './components/SearchPosts/SearchPosts';
import Counter from './components/Counter/Counter';
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      }}>
      {theme === 'light' ? 'Dark ' : 'Light '}
      Cambiar Tema
    </button>
  );
}

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main className="pt-24 pb-10">
        <Routes>
          <Route path="/" element={
            <>
              <TailwindText />
              <ThemeProvider>
                <ThemeButton />
              </ThemeProvider>
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
              <SearchPosts />
              <Counter />
            </>
          } />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
