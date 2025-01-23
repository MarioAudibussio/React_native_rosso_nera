import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import ProductCard from '../../atoms/product/product.atom';
import { Product, useProducts } from '../../screens/hook/useProducts.facade';
import { styles } from './favorites.styles';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Favorites>;
}

const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
  const { products, favoriteIds, addFavorite, loadFavorites, fetchProducts } = useProducts();
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  // Carica preferiti e prodotti quando la schermata viene mostrata
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavorites();
      fetchProducts();
    });
    return unsubscribe;
  }, [navigation, loadFavorites, fetchProducts]);

  // Aggiorna i prodotti preferiti quando `products` o `favoriteIds` cambiano
  useEffect(() => {
    const favorites = products.filter((product) => favoriteIds.includes(product.id));
    setFavoriteProducts(favorites);
  }, [products, favoriteIds]);
  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  // Render di un singolo prodotto
  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={() => {
        navigation.navigate(Screen.Detail, { product: item });
      }}
        onLike={() => addFavorite(item)}
      isLiked={true}
    />
  );

  // Messaggio per lista vuota
  if (favoriteProducts.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No favorite products yet</Text>
      </View>
    );
  }

  // Render principale
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={favoriteProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default FavoritesScreen;
