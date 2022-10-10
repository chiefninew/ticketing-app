import React, { useCallback } from 'react';
import { View, useWindowDimensions, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useDispatch } from 'react-redux';
import Tickets from './tickets';
import MyTickets from './my-tickets';
import { useNavigate } from 'react-router-native';
import { updateUser } from '../actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1
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

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 15, paddingTop: StatusBar.currentHeight, paddingBottom: 10, backgroundColor: 'red' }}>
        <View style={{ alignSelf: 'flex-end' }}>
          <TouchableOpacity onPress={onLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        tabBarPosition='bottom'
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}