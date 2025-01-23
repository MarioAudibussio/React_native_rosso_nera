import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './home.styles';
import ProductCard from '../../atoms/product/product.atom';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../atoms/button/button.atom';
import { Product, useProducts } from '../../screens/hook/useProducts.facade';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

enum FilterType {
  initial = 'initial',
  ascendent = 'ascendent',
  descendent = 'descendent',
}

const HomeScreen = ({ navigation }: Props) => {
  const { 
    products, 
    favoriteIds, 
    fetchProducts,
    loadFavorites, 
    addFavorite 
  } = useProducts();
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterType, setFilterType] = useState<FilterType>(FilterType.initial);

  // Load favorites when component mounts
  useEffect(() => {
    const unload = navigation.addListener('focus', () => {
    loadFavorites();
  });
  return unload;
}, [navigation, loadFavorites]);

  // Fetch products when screen is focused
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProducts();
    });
    return unsubscribe;
  }, [navigation, fetchProducts]);

  // Sync filteredProducts with products
  useEffect(() => {
    setFilteredProducts(products); // Initialize with all products
  }, [products]);

  // Filter apply callback
  const onFilterApply = useCallback(
    (type: FilterType) => {
      setFilterType(type);

      if (type === FilterType.initial) {
        setFilteredProducts(products);
        return;
      }

      const sortedProducts = [...products].sort((a, b) => {
        if (type === FilterType.ascendent) {
          return a.price - b.price;
        }
        return b.price - a.price;
      });

      setFilteredProducts(sortedProducts);
    },
    [products]
  );

  // Render filter buttons
  const renderFilterButtons = useCallback(() => {
    return (
      <View style={styles.filtersContainer}>
        <Button onPress={() => onFilterApply(FilterType.descendent)}>
          <Ionicons
            name={'arrow-down'}
            size={24}
            color={filterType === FilterType.descendent ? 'green' : '#ffffff'}
          />
        </Button>
        <Button onPress={() => onFilterApply(FilterType.ascendent)}>
          <Ionicons
            name={'arrow-up'}
            size={24}
            color={filterType === FilterType.ascendent ? 'green' : '#ffffff'}
          />
        </Button>
        <Button
          onPress={() => onFilterApply(FilterType.initial)}
          disabled={filterType === FilterType.initial}>
          <Ionicons
            name={'refresh'}
            size={24}
            color={filterType !== FilterType.initial ? '#fff' : 'gray'}
          />
        </Button>
      </View>
    );
  }, [filterType, onFilterApply]);

  // Render product item
  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        product={item}
        onPress={() => {
          navigation.navigate(Screen.Detail, { product: item });
        }}
        onLike={() => addFavorite(item)}
        isLiked={favoriteIds.includes(item.id)}
      />
    ),
    [navigation, favoriteIds, addFavorite]
  );

  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  return (
    <View style={styles.container}>
      {renderFilterButtons()}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredProducts} // Use filteredProducts instead of products
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default HomeScreen;
