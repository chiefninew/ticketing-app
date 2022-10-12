import React, { useCallback, useState } from 'react';
import { View, useWindowDimensions, StyleSheet, StatusBar, Text, TouchableOpacity, TextInput } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch } from 'react-redux';
import Tickets from '../components/tickets';
import MyTickets from '../components/my-tickets';
import { useNavigate } from 'react-router-native';
import { setUser } from '../reducers/user/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 15,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 0,
    flexDirection: 'row'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  indicatorStyle: {
    backgroundColor: '#6548B8',
    height: 5,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderColor: 'white'
  },
  input: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#EFF0F7',
    borderRadius: 15,
    fontSize: 16
  },
})

const renderScene = SceneMap({
  tickets: Tickets,
  myTickets: MyTickets,
});

export default function TabViewExample() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [routes] = useState([
    { key: 'tickets', title: 'Tickets' },
    { key: 'myTickets', title: 'My Tickets' },
  ]);

  const onLogout = useCallback(() => {
    dispatch(setUser({}));
    navigation('/')
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      activeColor={'#6548B8'}
      inactiveColor={'#4A4A4A'}
      labelStyle={{ fontWeight: '600', fontSize: 18 }}
      style={{ backgroundColor: 'white' }}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={setSearch}
            placeholder='Search Ticket'
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={{ alignSelf: 'center', marginLeft: 15 }}>
          <TouchableOpacity onPress={onLogout}>
            <Text style={styles.title}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}