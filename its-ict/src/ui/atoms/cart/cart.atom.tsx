import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native';
import styles from './cart.styles';
import { Ionicons } from '@expo/vector-icons';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface CartCardProps {
  cart: Cart;
  selected: boolean;
  onPress: () => void;
  onAddFavorite: () => void;
}

const CartCard = ({ cart, selected, onAddFavorite, onPress }: CartCardProps) => {
  return (
    <>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.containerHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>USER CART: {cart.userId}</Text>
          </View>
          <Ionicons
            onPress={onAddFavorite}
            name={selected ? 'heart-sharp' : 'heart-outline'}
            size={28}
            color={'#ffd700'}
          />
        </View>

        {/* Product List Section */}
        <FlatList
          data={cart.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>Price: ${item.price.toFixed(2)}</Text>
                <Text style={styles.productRating}>Rating: {item.rating.rate} ({item.rating.count} reviews)</Text>
              </View>
            </View>
          )}
        />

        {/* Summary Section */}
        <Text style={styles.genericCardText}>Cart products: {cart.totalProducts}</Text>
        <Text style={[styles.genericCardText, styles.genericCardTextSpacing]}>
          Total cost: {cart.total} $
        </Text>
      </View>

      {/* Buy Button */}
      <TouchableOpacity style={styles.buyCartButton} onPress={onPress}>
        <Text style={styles.genericCardText}>BUY CART {cart.discountedTotal} $</Text>
      </TouchableOpacity>
    </>
  );
};

export default memo(CartCard);