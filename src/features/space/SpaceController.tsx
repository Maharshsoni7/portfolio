import { View, Text, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { mediaLink } from '../../utility/utils';
import { useAccessTokenMutation } from '../../api/WebServices';
import { IMySkill, myClicks } from '../../utility/constant';
import RNFS from 'react-native-fs';

const SpaceController = () => {
    const [getAccessToken, { data: accessTokenResp, error: accessTokenErr, isLoading: isLoadingAppSchema }] = useAccessTokenMutation()
    const [myPhotosClicks, setLatestWorkList] = useState<IMySkill[]>(myClicks);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    useEffect(() => { getAccessToken('') }, [])
    useEffect(() => {
        if (accessTokenResp) {
            console.log("accessTokenResp", accessTokenResp);

        }
        if (accessTokenErr) {
            console.log("accessTokenErr", accessTokenErr);

        }
    }, [accessTokenResp, accessTokenErr])
    const onPressSocialLink = (item: any) => {
        let getLink = mediaLink(item)
        console.log("getLink", getLink);

        if (getLink !== null) {
            Linking.openURL(getLink);
        } else {
            // Handle the case where getLink is null (e.g., show an error message)
            console.error('Invalid or missing link for item:', item);
        }

    }
    const handleImagePress = (uri: any) => {
        setSelectedImage(uri);
        setModalVisible(true);
    }
    const OnPressClose = () => {
        setModalVisible(false);
    }
    const downloadLocalImage = async (image: any) => {

        // try {
        //     const sourceFilePath = image; // Replace with your local image path
        //     const targetPath = 'file//' + RNFS.DocumentDirectoryPath + '/downloaded_image.jpg';
        //     await RNFS.copyFile(sourceFilePath, targetPath);

        //     console.log('Local image downloaded to', targetPath);
        // } catch (error) {
        //     console.error('Error downloading local image:', error);
        // }
    };
    return {
        onPressSocialLink,
        myPhotosClicks,
        handleImagePress,
        modalVisible,
        selectedImage,
        OnPressClose,
        downloadLocalImage
    };
};
export default SpaceController


