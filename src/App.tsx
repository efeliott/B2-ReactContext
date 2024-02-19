import Header from './components/header'
import ItemScreen from './components/itemScreen'
import { UserContextProvider } from './userContext'
import { useState } from 'react'
import { CheeseContext } from './cheeseContext'
import './App.css'
import React from 'react'
import Footer from './components/footer'

const cheeses = [
  {
    name: 'Cheddar',
    photo: '../cheese.jpg',
    isAdmin: false
  },
  {
    name: 'Emental',
    photo: '../cheese.jpg',
    isAdmin: true
  },
  {
    name: 'Babibel',
    photo: '../cheese.jpg',
    isAdmin: false
  }
]

function App() {
  const [ isSelected, setIsSelected ] = useState(false);

  const value = {cheeses, isSelected};

  return (
    <React.Fragment>
      <CheeseContext.Provider value={value}>
        <UserContextProvider>
          <div className="container">
            <Header/>
            <ItemScreen/>
          </div>
        </UserContextProvider>
        <Footer onClick={() => setIsSelected(true)} />
      </CheeseContext.Provider>
    </React.Fragment>
  )
}

export default App
