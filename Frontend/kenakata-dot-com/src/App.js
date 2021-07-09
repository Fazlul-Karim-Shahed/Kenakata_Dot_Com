import React from 'react'
import MainComponent from './Components/MainComponent'

function App() {

  console.log(process.env.REACT_APP_DEMO)

  return (
    <div>
      <MainComponent />
    </div>
  )
}

export default App
