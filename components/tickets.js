import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import TicketItem from '../components/ticket-item';
import data from '../data.json';
import { selectTicket } from '../reducers/ticket/actions'
import { useNavigate } from 'react-router-native'
import { useDispatch } from 'react-redux'

const Tickets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(data);
  }, []);

  const onSelectTicket = (item) => {
    dispatch(selectTicket(item));
    navigate('ticketview');
  }

  return (
    <View>
      <FlatList
        data={tickets}
        renderItem={({ item }) => <TicketItem item={item} onPress={() => onSelectTicket(item)} />}
        ListHeaderComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  )
}

export default Tickets