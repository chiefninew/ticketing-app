import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SvgQRCode from 'react-native-qrcode-svg';
// import Barcode from '@kichiyaki/react-native-barcode-generator';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingBottom: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  circleCutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -15,
  },
  circleCutLeft: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#F2F2F2',
    bottom: -25,
    left: -40,
    zIndex: 9999
  },
  circleCutRight: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#F2F2F2',
    bottom: -25,
    right: -40,
    zIndex: 9999
  },
  qrcodeContainer: {
    padding: 30,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: -15,
    borderTopWidth: 2,
    borderTopColor: 'grey',
    borderStyle: 'dashed',
  },
  barcode: {
    height: 75,
    flex: 1,
    backgroundColor: 'grey'
  },
  title: {
    fontSize: 22
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
  }
})

const Ticket = ({ title, price, cutoutColor = '#F2F2F2' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.circleCutContainer}>
        <View style={[styles.circleCutLeft, { backgroundColor: cutoutColor }]} />
        <View style={[styles.circleCutRight, { backgroundColor: cutoutColor }]} />
      </View>
      <View style={styles.qrcodeContainer}>
        <SvgQRCode size={75} value="Just some string value" />
        <View style={{ width: 40 }} />
        {/* <Barcode
          format="CODE128B"
          value="0000002021954Q"
          text="0000002021954Q"
          height={75}
          maxWidth={175}
        /> */}
      </View>
    </View>
  )
}

export default Ticket