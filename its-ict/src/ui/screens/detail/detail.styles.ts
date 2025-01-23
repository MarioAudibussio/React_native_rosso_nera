import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
  },
  price: {
    alignContent: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
    color: '#7666F1'
  },
  category: {
    width: '100%',
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontSize: 16,
    color: '#264653',
    marginBottom: 0, // Rimosso spazio extra
  },
  description: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginBottom: 44,
    marginTop: 44, // Aggiunto margine superiore per una leggera separazione
  },
  rating: {
    fontSize: 16,
    color: '#7666F1',
    marginBottom: 16,
  },
  row: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});