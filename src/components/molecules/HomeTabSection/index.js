import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {colors, fonts} from '../../../utils';

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

const NewTaste = () => (
  <View style={{paddingTop: 8}}>
    <ItemListFood image={FoodDummy1} />
    <ItemListFood image={FoodDummy2} />
    <ItemListFood image={FoodDummy3} />
    <ItemListFood image={FoodDummy4} />
  </View>
);
const Popular = () => (
  <View style={{paddingTop: 8}}>
    <ItemListFood image={FoodDummy1} />
    <ItemListFood image={FoodDummy2} />
    <ItemListFood image={FoodDummy3} />
    <ItemListFood image={FoodDummy4} />
  </View>
);
const Recommended = () => (
  <View style={{paddingTop: 8}}>
    <ItemListFood image={FoodDummy1} />
    <ItemListFood image={FoodDummy2} />
    <ItemListFood image={FoodDummy3} />
    <ItemListFood image={FoodDummy4} />
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};
const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);
  const renderScene = SceneMap({
    first: NewTaste,
    second: Popular,
    third: Recommended,
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

export default HomeTabSection;

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
