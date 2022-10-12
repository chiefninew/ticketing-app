import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-native'
import Ticket from '../components/ticket'
import { useSelector } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5033A3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 14,
    color: 'white'
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
})

const Success = () => {
  const navigate = useNavigate();
  const selectedTicket = useSelector(state => state.ticket);

  const onGoToTickets = () => {
    navigate('/home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you!</Text>
      <Text style={styles.subTitle}>You have purchased your ticket successfully</Text>
      <View style={{ marginVertical: 30, width: '100%' }}>
        <Ticket title={'Single Admission'} price={`Php${selectedTicket.price}`} cutoutColor={'#5033A3'} />
      </View>
      <TouchableOpacity onPress={onGoToTickets}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go to My Tickets</Text>
        </View>
      </TouchableOpacity>
    </View> 
  )
}

export default Success