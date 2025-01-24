import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../../screens/hook/useProducts.facade';
import { styles } from './product.styles';


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
        <Text style={styles.description} numberOfLines={2}>{product.description}</Text>
        <View style={styles.row}>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.rate}>Valutazione media: {product.rating.rate}</Text>
</View>
      </View>
      <TouchableOpacity onPress={(e) => {
        e.stopPropagation(); 
        onLike();
      }}>
        <Icon
          name={isLiked ? 'favorite' : 'favorite-border'}
          size={24}
          color={isLiked ? '#7666F1' : '#C7CACD'}
          style={styles.icon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


export default ProductCard;