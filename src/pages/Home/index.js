import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
    <ScrollView style={styles.page}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              {food.map((itemFood) => {
                return (
                  <FoodCard
                    name={itemFood.name}
                    image={{uri: itemFood.picturePath}}
                    rating={itemFood.rate}
                    key={itemFood.id}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  tabContainer: {flex: 1},
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 12},
});
