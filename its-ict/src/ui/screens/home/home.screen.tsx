import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
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

enum Category {
  All = 'All',
  Men = "men's clothing",
  Women = "women's clothing",
  Jewelry = 'jewelery',
  Electronics = 'electronics',
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
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.All);

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
    filterProducts(filterType, selectedCategory);
  }, [products, filterType, selectedCategory]);

  // Filter products by price and category
  const filterProducts = (type: FilterType, category: Category) => {
    let filtered = products;

    // Filter by category
    if (category !== Category.All) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Sort by price
    if (type === FilterType.ascendent) {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (type === FilterType.descendent) {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  // Apply filter callback
  const onFilterApply = useCallback(
    (type: FilterType) => {
      setFilterType(type);
      filterProducts(type, selectedCategory);
    },
    [selectedCategory, products]
  );

  // Apply category filter callback
  const onCategoryApply = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      filterProducts(filterType, category);
    },
    [filterType, products]
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

  // Render category buttons
  const renderCategoryButtons = useCallback(() => {
    return (
      <View style={styles.categoryContainer}>
        {Object.values(Category).map((category) => (
          <Button
            key={category}
            onPress={() => onCategoryApply(category as Category)}
            style={{
              backgroundColor: selectedCategory === category ? 'green' : 'gray',
              padding: 10,
              marginHorizontal: 5,
              borderRadius: 5,
            }}>
            <Text style={{ color: '#fff' }}>{category}</Text>
          </Button>
        ))}
      </View>
    );
  }, [selectedCategory, onCategoryApply]);

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
      {renderCategoryButtons()}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredProducts} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default HomeScreen;
