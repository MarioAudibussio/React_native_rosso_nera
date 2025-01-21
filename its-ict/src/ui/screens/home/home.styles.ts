import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
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
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-around',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  productRating: {
    fontSize: 12,
    color: '#666',
  },
  filtersContainer: {
    flexDirection: 'row', // Disposizione orizzontale dei pulsanti
    justifyContent: 'space-between', // Spazio tra i pulsanti
    marginBottom: 16, // Spazio sotto i filtri
  },
  itemSeparator: {
    height: 8, // Spaziatura verticale tra gli elementi
  },
});
