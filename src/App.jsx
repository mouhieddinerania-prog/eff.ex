import { useState } from 'react'
import Formulaire from './Formulaire.jsx'
import Experts1 from './Experts1.jsx'
import Evenements from './Evenements.jsx'
import { evenementsData } from './data.js'


function App() {
  
  return (
    <div>
      <h1>Application de gestion d'événements</h1>
      <Evenements evenements={evenementsData} />
      <hr />  
      <Formulaire />
      <Experts1 />
    </div>
  )

}

export default App
