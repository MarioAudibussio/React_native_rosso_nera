import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';

interface Props {
  route: RouteProp<MainParamList, Screen.Detail>;
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
}

const ProductDetails = ({ route, navigation }: Props) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#2a9d8f',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#264653',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    color: '#e76f51',
    marginBottom: 16,
  },
});

export default ProductDetails;
