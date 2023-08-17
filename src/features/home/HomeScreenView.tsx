import { View, Text, ScrollView, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import HomeController from './HomeController'
import { IWorkList } from '../../utility/constant'
import Images from '../../utility/images'

const HomeScreen = () => {
    const { LatestWorkList, onPressApps } = HomeController();

    console.log("LatestWorkList---", LatestWorkList);

    const _RenderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Hey There,</Text>
                <Text style={styles.headerText}>I'M Maharsh</Text>
                <View style={styles.HeaderSubTitle}>
                    <Text style={styles.headerSubText}>I have done engineering degree in IT,and have 2 years of industry experience building Mobile applications.
                        I specialize in React-Native, and have experience working with javascript, redux, realm and Redux-toolkit.
                    </Text>

                </View>

            </View>
        )
    }
    const _RenderVector = () => {
        return (
            <View style={{ alignItems: 'center', bottom: 15 }}>
                <Image
                    source={Images.vector}
                    style={styles.vector}
                    resizeMode='cover'
                />
            </View>
        )
    }
    const _RenderSubheader = () => {
        return (
            <View style={styles.subHederView}>
                <Text style={styles.subHederText}>
                    What do I help ?
                </Text>
                <View style={styles.subHederSubtitle}>
                    <Text style={styles.headerSubText}>
                        I'm here to collaborate with you in discovering solutions and overcoming challenges.
                    </Text>
                </View>
            </View>
        )
    }
    const _renderWork = ({ item }: { item: IWorkList }) => {
        return (
            <View style={styles.workCard}>
                <ImageBackground
                    source={item.image}
                    style={styles.backgroundImage}
                    imageStyle={styles.backgroundImageStyle}
                    resizeMode='cover'
                >
                    <Text style={styles.itemName}>{item.name}</Text>
                </ImageBackground>
            </View>
        )
    }
    const _RenderLatestWork = () => {
        return (
            <View style={styles.LatesHeader}>
                <Text style={styles.subHederText}>
                    My Latest Work
                </Text>
                <View style={styles.subHederSubtitle}>
                    <Text style={styles.headerSubText}>
                        Perfect solution for Digital Work.
                    </Text>
                </View>
                <FlatList

                    data={LatestWorkList}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { onPressApps(item) }}>
                            <_renderWork item={item} />
                        </TouchableOpacity>
                    )}
                    style={styles.flatList}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <_RenderHeader />
            <_RenderVector />
            <_RenderSubheader />
            <_RenderLatestWork />
        </ScrollView>
    )
}
export default HomeScreen