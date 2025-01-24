import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 22,
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%'
      },
      image: {
        width: 80,
        height: 80,
        marginRight: 10,
        resizeMode: 'contain'
      },
      content: {
        flex: 1,
        justifyContent: 'center',
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
      },
      description: {
        marginTop: 4,
        marginBottom: 4,

        fontSize: 14,
        fontWeight: '400',
        color: '#000'
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      price: {
        fontSize: 14,
        color: '#7666F1',
        fontWeight: 'bold',
        marginTop: 8,
      },
      icon: {
        marginLeft: 10,
      },
      rate: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
      },
    });