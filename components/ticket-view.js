import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const TicketView = () => {
  const selectedTicket = useSelector(state => state.ticket);

  return (
    <View>
      <Text>{selectedTicket.title}</Text>
    </View>
  )
}

export default TicketView