import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
      navigation.reset({index: 0, routes: [{name: 'AuthApp'}]});
    });
  };
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListMenu text="Edit Profile" />
      <ItemListMenu text="Home Address" />
      <ItemListMenu text="Security" />
      <ItemListMenu text="Payments" />
      <ItemListMenu text="Sign Out" onPress={signOut} />
    </View>
  );
};
const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListMenu text="Rate App" />
      <ItemListMenu text="Help Center" />
      <ItemListMenu text="Privacy & Policy" />
      <ItemListMenu text="Terms & Conditions" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};
const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Account'},
    {key: 'second', title: 'FoodMarket'},
  ]);
  const renderScene = SceneMap({
    first: Account,
    second: FoodMarket,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  tabStyle: {width: 'auto'},
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  indicator: {
    backgroundColor: colors.black,
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabText: (focused) => ({
    fontFamily: fonts.primary[500],
    color: focused ? colors.text.primary : colors.text.secondary,
  }),
});
