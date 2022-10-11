import { View, Text } from 'react-native'
import React from 'react'

const TicketItem = ({ item }) => {
  return (
    <View style={{ padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 1, marginVertical: 5 }}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  )
}

export default TicketItem