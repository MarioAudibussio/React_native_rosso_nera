import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './home.styles'; // Assicura che lo stile esista
import ProductCard from '../../atoms/product/product.atom'; // Adatta il componente Card per prodotti
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../../navigation/types'; // Mantieni la tua navigazione
import { Ionicons } from '@expo/vector-icons';
import Button from '../../atoms/button/button.atom';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Screen.Home>;
}

enum FilterType {
  initial = 'initial',
  ascendent = 'ascendent',
  descendent = 'descendent',
}

// Tipo per i prodotti
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

const HomeScreen = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterType, setFilterType] = useState<FilterType>(FilterType.initial);

  // ** FETCH PRODUCTS ** //
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json); // Imposta i prodotti iniziali
      })
      .catch((error) => console.error('Errore durante il fetch dei prodotti:', error));
  }, []);

  // ** USE CALLBACK ** //
  const onFilterApply = useCallback(
    (type: FilterType) => {
      setFilterType(type);

      if (type === FilterType.initial) {
        // Resetta ai prodotti originali
        setFilteredProducts(products);
        return;
      }

      const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (type === FilterType.ascendent) {
          return a.price - b.price; // Ordina per prezzo crescente
        }
        return b.price - a.price; // Ordina per prezzo decrescente
      });

      setFilteredProducts(sortedProducts);
    },
    [filteredProducts, products]
  );

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

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        product={item}
        onPress={() => {
          navigation.navigate(Screen.Detail, { product: item }); 
        }}
      />
    ),
    [navigation]
  );

  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator}></View>, []);

  return (
    <View style={styles.container}>
      {renderFilterButtons()}

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
