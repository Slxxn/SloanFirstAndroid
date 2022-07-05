import { View, Text } from 'react-native'
import React from 'react'

const Welcome = ({name,prenom} = props) => {
  return (
    <View>
      <Text>Bonjour, {name} {prenom} </Text>
    </View>
  )
}

export default Welcome