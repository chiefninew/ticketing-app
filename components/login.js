import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native'
import { updateUser } from '../actions/user'

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
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user.email) {
      navigate('/home');
    }
  }, [user]);

  const onLogin = useCallback(() => {
    console.log('CALLED')
    dispatch(updateUser({
      email: email,
      name: 'test'
    }))
  });

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
        <TouchableOpacity onPress={onLogin}>
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