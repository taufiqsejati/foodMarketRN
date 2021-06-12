import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

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

const NewTaste = () => {
  const navigation = useNavigation();
  const {newTaste} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {newTaste.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => {
              navigation.navigate('FoodDetail', item);
            }}
          />
        );
      })}
    </View>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  const {popular} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {popular.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => {
              navigation.navigate('FoodDetail', item);
            }}
          />
        );
      })}
    </View>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  const {recommended} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {recommended.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => {
              navigation.navigate('FoodDetail', item);
            }}
          />
        );
      })}
    </View>
  );
};

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
