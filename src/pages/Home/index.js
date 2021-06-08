import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
              <FoodCard image={FoodDummy4} />
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
