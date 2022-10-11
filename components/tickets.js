import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import TicketItem from './ticket-item';
import data from '../data.json';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(data);
  }, []);

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