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
});

export default styles;