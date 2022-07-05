import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './component/Welcome'

const App = () => {

  const stagiaires = [
    {key:1, name:"Delivert",prenom:"Lita"},
    {key:2,name:"Desloriez",prenom:"Sloan"},
    {key:3,name:"Emmanuel",prenom:"Nicolas"},
    {key:4,name:"Jean-Alexis",prenom:"Stéphen"},
  ]

  return (
    <View>
      {
        stagiaires.map((stagiaire)=><Welcome key={stagiaire.key} name={stagiaire.name} prenom={stagiaire.prenom}/>)
      }
      

    </View>
  )
}

export default App