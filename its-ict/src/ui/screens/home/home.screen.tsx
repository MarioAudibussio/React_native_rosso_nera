import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ScrollView, View, Text } from 'react-native';
import { styles } from './home.styles';
import ProductCard from '../../atoms/product/product.atom';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../atoms/button/button.atom';
import RoundButton from '../../atoms/button/roundbutton.atom';

import { Product, useProducts } from '../../screens/hook/useProducts.facade';
import { TouchableOpacity } from 'react-native';

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

  useEffect(() => {
    const unload = navigation.addListener('focus', () => {
      loadFavorites();
    });
    return unload;
  }, [navigation, loadFavorites]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchProducts();
    });
    return unsubscribe;
  }, [navigation, fetchProducts]);

  useEffect(() => {
    filterProducts(filterType, selectedCategory);
  }, [products, filterType, selectedCategory]);

  const filterProducts = (type: FilterType, category: Category) => {
    let filtered = products;

    if (category !== Category.All) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (type === FilterType.ascendent) {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (type === FilterType.descendent) {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  const onFilterApply = useCallback(
    (type: FilterType) => {
      setFilterType(type);
      filterProducts(type, selectedCategory);
    },
    [selectedCategory, products]
  );

  const onCategoryApply = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      filterProducts(filterType, category);
    },
    [filterType, products]
  );

  const renderFilterButtons = useCallback(() => {
    return (
      <View style={styles.filtersContainer}>
        <RoundButton onPress={() => onFilterApply(FilterType.descendent)}>
          <Ionicons
            name={'arrow-down'}
            size={24}
            color={filterType === FilterType.descendent ? '#7666F1' : '#C7CACD'}
          />
        </RoundButton>
        <RoundButton onPress={() => onFilterApply(FilterType.ascendent)}
        >
          <Ionicons
            name={'arrow-up'}
            size={24}
            color={filterType === FilterType.ascendent ? '#7666F1' : '#C7CACD'}
          />
        </RoundButton>
        <RoundButton
          onPress={() => onFilterApply(FilterType.initial)}
          disabled={filterType === FilterType.initial}>
          <Ionicons
            name={'refresh'}
            size={24}
            color={filterType !== FilterType.initial ? '#7666F1' : '#C7CACD'}
          />
        </RoundButton>
      </View>
    );
  }, [filterType, onFilterApply]);

  const renderCategoryButtons = useCallback(() => {
    return (
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.categoryScrollContainer}
      >
        {Object.values(Category).map((category) => (
          <Button
            key={category}
            onPress={() => onCategoryApply(category as Category)}
            style={{
              backgroundColor: selectedCategory === category ? '#7666F1' : '#C7CACD',
              padding: 10,
              marginHorizontal: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: '#fff' }}>{category}</Text>
          </Button>
        ))}
      </ScrollView>
    );
  }, [selectedCategory, onCategoryApply]);

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
    <View style={styles.topContainer}>
      {renderCategoryButtons()}
    </View>

    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredProducts} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>

    <TouchableOpacity style={styles.lowupFilter}>
    {renderFilterButtons()}
    </TouchableOpacity>
  </View>
  );
};

export default HomeScreen;
