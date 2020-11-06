import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import mockData from '../../../assets/products.json';
import Product from '../../components/Product';

const Market = () => {
  const sortedList = genSortedList(mockData);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.heading}>Order 1</Text>
        <FlatList
          data={sortedList[0]}
          horizontal
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={{ height: 5 }} />
        <Text style={styles.heading}>Order 2</Text>
        <FlatList
          data={sortedList[1]}
          horizontal
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={{ height: 5 }} />
        <Text style={styles.heading}>Order 3</Text>
        <FlatList
          data={sortedList[2]}
          horizontal
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const genSortedList = (rawData) => {
  var sortedList = {};

  for (var i = 0; i < rawData.length; i += 1) {
    if (!sortedList[rawData[i].order]) {
      sortedList[rawData[i].order] = [];
    }
    sortedList[rawData[i].order].push(rawData[i]);
  }

  return sortedList;
};

const renderItem = (item) => {
  return <Product data={item} />;
};

const styles = StyleSheet.create({
  heading: {
    paddingStart: 5,
  },
});

export default Market;
