import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a', // Colore di sfondo scuro
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerHeader: {
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
  },
  titleStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: '#ffffff', // Testo bianco per contrasto
  },
  containerImage: {
    paddingTop: 36,
    alignItems: 'flex-end',
  },
  imageStyle: {
    width: 54,
    height: 54,
  },
  genericCardTextSpacing: {
    marginTop: 8,
  },
  genericCardText: {
    fontSize: 16,
    color: '#ffffff', // Testo bianco per contrasto
  },
  buyCartButton: {
    marginTop: 4,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#8b0000', // Rosso più scuro per il bottone
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 4,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // Testo bianco per contrasto
  },
  productPrice: {
    fontSize: 14,
    color: '#c0c0c0', // Grigio chiaro per il prezzo
  },
  productRating: {
    fontSize: 12,
    color: '#a9a9a9', // Grigio ancora più chiaro per il rating
  },
});

export default styles;