import { StyleSheet } from 'react-native';
import colors from '../../utility/colors'
import Fonts from '../../utility/fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    headerText: {
        color: colors.white,
        fontSize: 50,
        fontFamily: Fonts.Dmsans_Medium
    },
    headerSubText: {
        textAlign: 'center',
        fontSize: 15,
        color: colors.dmsGray,
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
        color: colors.white,
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
    vector: {
        width: 700, // Set the desired width of the image
        height: 500,

    },
    workCard: {
        borderRadius: 8,
        overflow: 'hidden', // To ensure border radius is applied correctly
        margin: 15,
        backgroundColor: '#fff', // Set your desired background color
    },
    backgroundImage: {
        width: 170,
        height: 170,
        justifyContent: 'flex-end', // To position the text at the bottom
    },
    backgroundImageStyle: {
        borderRadius: 8,
    },
    itemName: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.gray89, // Set your desired text color
        backgroundColor: colors.backgroundColor // Semi-transparent background for the text
    },
    flatList: {
        margin: 10
    }
});