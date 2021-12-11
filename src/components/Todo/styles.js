import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        // paddingVertical: 4,
    },
    leftContainer: {
        width: '12%',
        alignItems: 'center',
    },
    checkbox: {
        height: 32,
        width: 32,
        borderColor: '#DADADA',
        borderWidth: 2,
        borderRadius: 32
    },
    checkboxCompleted: {
        borderWidth: 0,
        backgroundColor: '#006CFF'
    },
    rightContainer: {
        width: '88%',
        borderColor: '#DADADA',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        paddingVertical: 16,
    },
    circle: {
        height: 10,
        width: 10,
        borderRadius: 10,
        marginRight: 10,
    }
});
