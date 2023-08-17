import { View, Text, Linking } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { WorkList, IWorkList } from '../../utility/constant'

const HomeController = () => {
    const [LatestWorkList, setLatestWorkList] = useState<IWorkList[]>(WorkList);
    const onPressApps = (item: any) => {
        Linking.openURL(item.link);

    }
    return {
        LatestWorkList,
        onPressApps
    };
};
export default HomeController


