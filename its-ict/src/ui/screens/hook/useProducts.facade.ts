import { useState, useCallback, useEffect } from 'react';
import { PREFERRED_PRODUCTS} from '../../../core/storage/types';
import { storage } from '../../../core/storage/storage';

export interface Product {
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


export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);


// In useProducts hook
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setProducts(json);
      
      // Also load favorites immediately after fetching products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const loadFavorites = useCallback(async () => {
    try {
      const storedFavorites = await storage.getItem(PREFERRED_PRODUCTS);
      console.log('Stored Favorites:', storedFavorites); // Add this log
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      console.log('Parsed Favorites:', parsedFavorites); // And this
      setFavoriteIds(parsedFavorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, []);
  
  const addFavorite = useCallback(
    async (item: Product) => {
      try {
        const updatedFavorites = favoriteIds.includes(item.id)
          ? favoriteIds.filter((id) => id !== item.id)
          : [...favoriteIds, item.id];
        
        console.log('Updated Favorites:', updatedFavorites); // Log updated favorites
        
        setFavoriteIds(updatedFavorites);
        await storage.setItem(PREFERRED_PRODUCTS, JSON.stringify(updatedFavorites));
      } catch (error) {
        console.error('Error updating favorites:', error);
      }
    },
    [favoriteIds]
  );
  return {
    products,
    setProducts,
    initialProducts,
    setInitialProducts,
    favoriteIds,
    fetchProducts,
    loadFavorites,
    addFavorite,
  };
};
