import React from 'react'
import Header from "./components/Header";
import { Container } from 'react-bootstrap';

const App = () => {
  return (    
    <>
      <Header/>
      <main className='py-3 px-3'>
        <Container>
                Welcome
        </Container>
      </main>
    </>
  )
}

export default App
