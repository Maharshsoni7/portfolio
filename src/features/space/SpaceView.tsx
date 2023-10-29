import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image, Dimensions, Modal } from 'react-native'
import React from 'react'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/Feather';
import colors from '../../utility/colors';
import SpaceController from './SpaceController';
import _RenderLatestWork from '../../components/commonWork'
import Images from '../../utility/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SpaceView = () => {
    const { onPressSocialLink, myPhotosClicks, handleImagePress, modalVisible, selectedImage, OnPressClose } = SpaceController()
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 2;
    const spacing = 10;
    const photoWidth = (screenWidth - (spacing * (numColumns + 1))) / numColumns;
    const photoHeight = photoWidth;

    const _renderSocialIcon = () => {
        return (
            <View style={styles.socialIcon}>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { onPressSocialLink('linkedin') }}>
                    <MaterialIcons name={'linkedin'} size={30} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { onPressSocialLink('github') }}>
                    <MaterialIcons name={'github'} size={30} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { onPressSocialLink('mail') }}>
                    <MaterialIcons name={'mail'} size={30} color={colors.white} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>My Space</Text>
            <View style={styles.HeaderSubTitle}>
                <Text style={styles.headerSubText}>
                    Welcome to my personal space on the internet.
                </Text>
                <_renderSocialIcon />

            </View>
            <View style={styles.HeaderSubTitle}>
                <Text style={styles.headerSubText}>
                    My clicks
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={myPhotosClicks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleImagePress(item.image)}>
                            <Image source={item.image}
                                resizeMode='cover'
                                style={{
                                    width: photoWidth,
                                    height: photoHeight,
                                    margin: 10
                                }}
                            />
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                    contentContainerStyle={{ paddingBottom: 100, }}
                />
            </View>
            <Modal visible={modalVisible} animationType='slide'>
                <View style={styles.modalContent}>
                    <Image
                        source={selectedImage ? selectedImage : Images.eight}
                        style={styles.fullImage}

                    />
                    <TouchableOpacity onPress={OnPressClose} style={styles.crossIconStyle}>
                        <MaterialCommunityIcons name='close' color={colors.black} size={20} />
                    </TouchableOpacity>
                </View>
            </Modal >
        </View >
    )
}

export default SpaceView