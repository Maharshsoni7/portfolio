import { StyleSheet } from 'react-native';
import colors from '../../utility/colors'
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: colors.backgroundColor
    },
    networkStyle: {
        width: '100%',
        padding: 3,
        backgroundColor: '#ff422914',
        alignItems: 'center'
    },
    networkTextStyle: {
        color: colors.red,
    }
});