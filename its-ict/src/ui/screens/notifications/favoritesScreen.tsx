import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../../atoms/product/product.atom'; // Importa la card
import { Product } from '../../screens/hook/useCarts.facade';

const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const handleLike = (product: Product) => {
    const isAlreadyLiked = favorites.some(fav => fav.id === product.id);
    if (isAlreadyLiked) {
      setFavorites(favorites.filter(fav => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={() => console.log('Navigate to details')}
      onLike={() => handleLike(item)}
      isLiked={favorites.some(fav => fav.id === item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});

export default Favorite;
