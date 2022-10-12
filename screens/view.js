import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useNavigate } from 'react-router-native'
import Ticket from '../components/ticket'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    padding: 15,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  body: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 15,
    paddingTop: 30,
    top: -30,
    backgroundColor: '#F2F2F2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 14,
    color: '#6548B8'
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,    
  },
  details: {
    fontSize: 16,
    color: '#6548B8'
  },
  description: {
    fontSize: 16,
    marginTop: 10
  },
  counterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3B'
  },
  button: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#6548B8'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

const TicketView = () => {
  const navigate = useNavigate();
  const selectedTicket = useSelector(state => state.ticket);
  const [counter, setCounter] = useState(1);

  const onAdd = () => {
    if (counter < selectedTicket.availableTicket) {
      setCounter(counter + 1);
    }
  }

  const onMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  const onBookNow = () => {
    navigate('success');
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <ImageBackground source={{ uri: selectedTicket.photo }} style={{ width: '100%', height: 250 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigate(-1)}>
              <AntDesign name='arrowleft' color={'white'} size={24} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.body}>
          <Text style={styles.title}>{selectedTicket.title}</Text>
          <Text style={styles.subTitle}>P{selectedTicket.price} • {selectedTicket.date}</Text>
        </View>
        <Ticket title={'Single Admission'} price={`Php${selectedTicket.price}`} />
        <View style={{ padding: 15 }}>
          <Text style={styles.details}>Details</Text>
          <Text style={styles.description}>{selectedTicket.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={onMinus}>
            <Feather name='minus-circle' size={30} color={'#6548B8'} />
          </TouchableOpacity>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.counterText}>{counter}</Text>
          </View>
          <TouchableOpacity onPress={onAdd}>
            <Feather name='plus-circle' size={30} color={'#6548B8'} />
          </TouchableOpacity>
        </View>
        <View style={{ width: 60 }} />
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={onBookNow}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Book Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default TicketView