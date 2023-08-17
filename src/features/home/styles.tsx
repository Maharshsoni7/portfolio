import { StyleSheet } from 'react-native';
import colors from '../../utility/colors'
import Fonts from '../../utility/fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBackground
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    headerText: {
        color: colors.HeadersText,
        fontSize: 50,
        fontFamily: Fonts.Dmsans_Medium
    },
    headerSubText: {
        textAlign: 'center',
        // textAlignVertical: 'center',
        fontSize: 15,
        color: colors.gray89,
        fontFamily: Fonts.Dmsans_Medium
    },
    HeaderSubTitle: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexWrap: 'wrap',
    },
    subHederView: {
        alignItems: 'center'
    },
    subHederText: {
        color: colors.HeadersText,
        fontSize: 40,
        fontFamily: Fonts.Dmsans_Medium
    },
    subHederSubtitle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    LatesHeader: {
        paddingVertical: 30,
        alignItems: 'center'
    },
    workCard: {
        // flex: 1,
        width: 150,
        height: 150, // Adjust the height as needed
        borderRadius: 10,
        overflow: 'hidden',
        // backgroundColor: 'red',
        margin: 15

    },
    backgroundImage: {
        flex: 1,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: 0.2,
    },
    backgroundImageStyle: {
        flex: 1,
        // opacity: , // Adjust the opacity if needed
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the background color and opacity
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    flatList: {
        margin: 10
    }
});