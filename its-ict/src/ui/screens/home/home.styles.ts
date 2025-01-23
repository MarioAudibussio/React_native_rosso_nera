import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001945',
    padding: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 16, 
  },
  itemSeparator: {
    height: 8, 
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 16,
  },
});