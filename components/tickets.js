import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'

const TicketItem = ({ item }) => {
  return (
    <View style={{ padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 1, marginVertical: 5 }}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  )
}

const Tickets = () => {
  const [tickets, setTickets] = useState([{
    _id: '1',
    title: 'Test 1',
    description: 'Description 1',
  }, {
    _id: '2',
    title: 'Test 2',
    description: 'Description 2',
  }, {
    _id: '3',
    title: 'Test 3',
    description: 'Description 3',
  }, {
    _id: '4',
    title: 'Test 4',
    description: 'Description 4',
  }, {
    _id: '5',
    title: 'Test 5',
    description: 'Description 5',
  }]);

  return (
    <View>
      <FlatList
        data={tickets}
        renderItem={TicketItem}
      />
    </View>
  )
}

export default Tickets