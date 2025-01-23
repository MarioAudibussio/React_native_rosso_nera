import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 16,
    width: 'auto',
    height: '100%'
  },

  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    padding: 10,
    alignItems: 'center',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', // Aggiunto per distribuire i bottoni
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  itemSeparator: {
    height: 18,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
  },
  containerProduct: {
    width: '90%',
  },
  categoryScrollContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  lowupFilter:{
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: 'auto',
    height: 40,
    justifyContent: 'space-between'
  }
});
