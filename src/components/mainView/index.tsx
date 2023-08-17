import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import Styles from './Styles';
import colors from '../../utility/colors';
const ChildView = ({ isStatusBarHidden = false, SubView, testID, isDifferentBG, context }: any) => {

    return (
        <View style={[Styles.container, { backgroundColor: isDifferentBG ? colors.white : colors.backgroundColor }]} testID={testID}>
            <StatusBar backgroundColor={colors.dmsPrimary} barStyle='light-content' hidden={false} />
            <SubView context={context}>
            </SubView>

        </View>
    );
};

const MainView = ({ isSafeAreaViewDisplay = true, isStatusBarHidden = false, subView, testID, isDifferentBG = false, context }: any) => {
    return (
        isSafeAreaViewDisplay ?
            <SafeAreaView style={[Styles.container, { backgroundColor: isDifferentBG ? colors.white : colors.backgroundColor }]}>

                <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} isDifferentBG={isDifferentBG} context={context} />
            </SafeAreaView> : <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} context={context} />

    );
};
export default MainView 