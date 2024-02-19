import Header from './components/header'
import ItemScreen from './components/itemScreen'
import { UserContextProvider } from './userContext'
import { useState } from 'react'
import { CheeseContext } from './cheeseContext'
import './App.css'

const cheeses = [
  {
    name: 'Cheddar',
    photo: '.\src\assets\cheese.jpg',
    isAdmin: false
  },
  {
    name: 'Emental',
    photo: 'src\assets\cheese.jpg',
    isAdmin: true
  },
  {
    name: 'Babibel',
    photo: 'src\assets\cheese.jpg',
    isAdmin: false
  }
]

function App() {
  const [ isSelected, setIsSelected ] = useState(false);

  const value = {cheeses, isSelected};

  return (
    <CheeseContext.Provider value={value}>
      <UserContextProvider>
        <div>
          <Header />
          <ItemScreen  />
        </div>
      </UserContextProvider>
    </CheeseContext.Provider>
  )
}

export default App
