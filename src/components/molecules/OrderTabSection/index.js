import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';

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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        name="Sop Bumil"
        rating={3}
        type="in-progress"
        items={3}
        price="2.000.000"
        image={FoodDummy1}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
      <ItemListFood
        name="Sop Bumil"
        rating={3}
        type="in-progress"
        items={3}
        price="2.000.000"
        image={FoodDummy2}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
      <ItemListFood
        name="Sop Bumil"
        rating={3}
        type="in-progress"
        items={3}
        price="2.000.000"
        image={FoodDummy3}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
      <ItemListFood
        name="Sop Bumil"
        rating={3}
        type="in-progress"
        items={3}
        price="2.000.000"
        image={FoodDummy4}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
    </View>
  );
};
const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        date="Jun 12, 14:00"
        name="Sop Bumil"
        rating={3}
        type="past-order"
        items={3}
        price="2.000.000"
        image={FoodDummy1}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
      <ItemListFood
        date="Jun 12, 14:00"
        status="cancel"
        name="Sop Bumil"
        rating={3}
        type="past-order"
        items={3}
        price="2.000.000"
        image={FoodDummy2}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
      <ItemListFood
        date="Jun 12, 14:00"
        name="Sop Bumil"
        rating={3}
        type="past-order"
        items={3}
        price="2.000.000"
        image={FoodDummy3}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
      <ItemListFood
        date="Jun 12, 14:00"
        status="cancel"
        name="Sop Bumil"
        rating={3}
        type="past-order"
        items={3}
        price="2.000.000"
        image={FoodDummy4}
        onPress={() => {
          navigation.navigate('OrderDetail');
        }}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};
const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'In Progress'},
    {key: 'second', title: 'Past Orders'},
  ]);
  const renderScene = SceneMap({
    first: InProgress,
    second: PastOrders,
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
