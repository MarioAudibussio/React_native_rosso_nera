import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#F6F7F9',
    padding: 10,
    alignItems: 'center'
  },
  topContainer:{
    width:'100%',
    flexDirection: 'row'
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 16,
    width: 'auto',
    height: '100%'
  },
  itemSeparator: {
    height: 18, 
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'

  },
  containerProduct: {
    width: '90%',
  }
});
