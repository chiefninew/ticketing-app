import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tickets from './tickets';
import MyTickets from './my-tickets';
import { useNavigate } from 'react-router-native';

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
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tickets', title: 'Tickets' },
    { key: 'myTickets', title: 'My Tickets' },
  ]);

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 15, paddingTop: StatusBar.currentHeight, paddingBottom: 10, backgroundColor: 'red' }}>
        <View style={{ alignSelf: 'flex-end' }}>
          <TouchableOpacity onPress={() => navigation('/')}>
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