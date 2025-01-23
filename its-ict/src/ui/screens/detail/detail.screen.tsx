import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { styles } from './detail.styles';

interface Props {
  route: RouteProp<MainParamList, Screen.Detail>;
  navigation: NativeStackNavigationProp<MainParamList, Screen.Detail>;
}

const ProductDetails = ({ route, navigation }: Props) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#7666F1" />
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.rating}>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </Text>
      </View>
    </ScrollView>
  );
};


export default ProductDetails;
