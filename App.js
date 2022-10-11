import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './components/home';
import Login from './components/login';
import Registration from './components/registration';
import TicketView from './components/ticket-view';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './reducers/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NativeRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/home/ticketview" element={<TicketView />} />
            </Routes>
          </NativeRouter>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
