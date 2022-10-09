import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    width: 120,
  },
  button: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: 5
  }
})

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChange={setEmail}
          placeholder='Email Address'
          autoCompleteType='email'
          underlineColorAndroid='transparent'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChange={setPassword}
          placeholder='Password'
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity onPress={() => navigate('/home')}>
          <View style={styles.button}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('/registration')}>
          <View style={styles.button}>
            <Text>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login