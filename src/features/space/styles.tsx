import { StyleSheet } from "react-native";
import colors from "../../utility/colors";
import Fonts from "../../utility/fonts";

export default StyleSheet.create({

    subHederText: {
        color: colors.white,
        fontSize: 40,
        fontFamily: Fonts.Dmsans_Medium
    },
    header: {
        flex: 1,
        backgroundColor: colors.black,
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
    socialIcon: {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 10
    },
    components: {
        flex: 1,
        flexDirection: 'row',

    },
    photo: {
        width: '100%',
        height: 300, // Adjust the height as needed
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',

        paddingHorizontal: 8
    },
    fullImage: {
        borderRadius: 8,
        width: '100%',
        height: '50%',
    },
    closeButton: {
        color: 'blue',
        fontSize: 16,
        marginTop: 10,
    },
    crossIconStyle: {
        top: 50,
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 50,
        padding: 5,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

})