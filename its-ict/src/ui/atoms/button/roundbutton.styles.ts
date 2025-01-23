import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    roundbutton: {
        marginRight:8,
        height: 50,
        width:50,
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderColor: '#C7CACD',
        borderWidth: 1
      },
      roundbuttonText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
      },
});



