import React, { useCallback } from 'react';
import { View, useWindowDimensions, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch } from 'react-redux';
import Tickets from './tickets';
import MyTickets from './my-tickets';
import { useNavigate } from 'react-router-native';
import { updateUser } from '../actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 15,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  }
})

const renderScene = SceneMap({
  tickets: Tickets,
  myTickets: MyTickets,
});

export default function TabViewExample() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tickets', title: 'Tickets' },
    { key: 'myTickets', title: 'My Tickets' },
  ]);

  const onLogout = useCallback(() => {
    dispatch(updateUser({}));
    navigation('/')
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#6548B8', height: 3 }}
      activeColor={'#6548B8'}
      inactiveColor={'#4A4A4A'}
      labelStyle={{ fontWeight: 'bold' }}
      style={{ backgroundColor: 'white' }}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={{ alignSelf: 'flex-end' }}>
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