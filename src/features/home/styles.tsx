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
    },
    backgroundImage: {
        width: 180,
        height: 180,
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
    },
    experienceContain: {
        borderRadius: 8,
        flexDirection: 'column',
        marginHorizontal: 20,
        paddingHorizontal: 25,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: colors.white,
        marginBottom: 20,
        marginTop: 20


    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        position: 'absolute',
        top: 7,
        left: -4,
    },
    outerDottedLine: {
        padding: 10,
        position: 'absolute',
        top: 1,
        left: -10,
        borderWidth: 1,
        borderColor: 'black', // Change this color as needed
        borderStyle: 'dashed',
        borderRadius: 100, // To make it circular
    },
    verticalLine: {
        width: 1,
        backgroundColor: '#ccc',
        position: 'absolute',
        top: 25,
        bottom: 0,
        left: 0,
        zIndex: -1,
    },
    experienceContent: {
        marginLeft: 20,
        marginBottom: 20
    },
    title: {
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 16,
    },
    duration: {
        fontSize: 14,
        color: '#888',
    },
    description: {
        fontSize: 16,
        marginTop: 8,
    },
});