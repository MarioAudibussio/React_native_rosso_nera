import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
  },
});