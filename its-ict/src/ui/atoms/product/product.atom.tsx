import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usa react-native-vector-icons
import { Product } from '../../screens/hook/useCarts.facade';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onLike: () => void; // Nuova funzione per gestire "Mi piace"
  isLiked: boolean;  // Stato per il "Mi piace"
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, onLike, isLiked }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={onLike}>
        <Icon
          name={isLiked ? 'favorite' : 'favorite-border'}
          size={24}
          color={isLiked ? 'red' : 'gray'}
          style={styles.icon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  icon: {
    marginLeft: 10,
  },
});

export default ProductCard;
