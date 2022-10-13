import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './screens/home';
import Login from './screens/login';
import Registration from './screens/registration';
import TicketView from './screens/view';
import Success from './screens/success';
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
              <Route path="/home/ticketview/success" element={<Success />} />
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
