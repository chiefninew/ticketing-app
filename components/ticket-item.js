import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { Octicons } from '@expo/vector-icons'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 30,
  },
  imageBackground: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  info: {
    padding: 15,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: 16,
    color: 'white'
  },
  button: {
    height: 45,
    width: 45,
    backgroundColor: 'white',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const TicketItem = ({ item, onPress = () => {} }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: item.photo }}
        borderRadius={10}
        style={styles.imageBackground}
      >
        <View style={styles.info}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>P{item.price} • {item.date}</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.button}>
                <Octicons name='chevron-right' size={24} color='#6548B8' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default TicketItem