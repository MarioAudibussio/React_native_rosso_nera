import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
      },
      image: {
        width: 80,
        height: 80,
        marginRight: 10,
      },
      content: {
        flex: 1,
        justifyContent: 'center',
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 14,
        color: 'gray',
      },
      icon: {
        marginLeft: 10,
      },
    });