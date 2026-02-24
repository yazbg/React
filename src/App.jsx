import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card';
import Button from './components/Button';
import TailwindText from './components/Text/Text';

function App() {

  return (
    <>
      <Card />
      <div style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
        <Button>Button 2</Button>
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <Button blue>Button 3</Button>
      </div>
      <TailwindText />
    </>
  )
}

export default App
