import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../../screens/hook/useProducts.facade';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onLike: () => void;
  isLiked: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onPress, 
  onLike, 
  isLiked 
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={(e) => {
        e.stopPropagation(); // Prevent onPress from triggering when like is clicked
        onLike();
      }}>
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    marginLeft: 10,
  },
});

export default ProductCard;