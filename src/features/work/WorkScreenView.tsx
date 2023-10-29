import { View, Text } from 'react-native'
import React from 'react'
import WorkController from './WorkController';
import _RenderLatestWork from '../../components/commonWork'
import HomeController from '../home/HomeController';
import colors from '../../utility/colors';
import styles from './styles';
const WorkScreen = () => {
    const { LatestWorkList } = WorkController();
    return (
        <View style={{ flex: 1, backgroundColor: colors.black }}>
            <_RenderLatestWork
                LatestWorkList={LatestWorkList}
                componentStyle={styles.components}
                numColumns={2}
                HeaderTitle={' My Skill'}
                HeaderSubTitle={''}
                flatListComponentStyle={styles.flatListComponentStyle}
            />
        </View>
    )
}
export default WorkScreen