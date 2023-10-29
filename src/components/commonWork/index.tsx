import { FlatList, ImageBackground, Text, TouchableOpacity, View, Dimensions } from "react-native"
import styles from "./styles"
import { IWorkList } from "../../utility/constant"

const _RenderLatestWork = ({ LatestWorkList, onPressApps, componentStyle, numColumns, HeaderTitle, HeaderSubTitle, flatListComponentStyle }: any) => {

    const _renderWork = ({ item }: { item: IWorkList }) => {
        let CommonStyles = { ...styles.workCard, ...componentStyle };
        return (
            <View style={CommonStyles}>
                <ImageBackground
                    source={item.image}
                    style={[styles.backgroundImage, { height: 160, width: 160 }]}
                // resizeMode='cover'
                >
                    <Text style={styles.itemName}>{item.name}</Text>
                </ImageBackground>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.LatesHeader}>
                <Text style={styles.subHederText}>
                    {HeaderTitle}
                </Text>
            </View>
            <View style={styles.subHederSubtitle}>
                <Text style={styles.headerSubText}>
                    {HeaderSubTitle}
                </Text>
            </View>
            <FlatList
                data={LatestWorkList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { onPressApps ? onPressApps(item) : null }}>
                        <_renderWork item={item} />
                    </TouchableOpacity>
                )}
                numColumns={numColumns}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            />

        </View>
    )
}
export default _RenderLatestWork