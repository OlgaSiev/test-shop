import React from 'react'
import Header from './compositions/Header/Header';
import Container from './layout/Container/Container';
import Footer from './compositions/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

import './App.css'

function App() {
  return (
    <div className="g-app">
      <Header />
        <main className="g-content">
          <Container>
            <HomePage />
          </Container>
        </main>
      <Footer/>
    </div>
  )
}

export default App;
