import { View, Text, Linking } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { WorkList, IWorkList, IExperience, Experiences } from '../../utility/constant'

const HomeController = () => {

    const [LatestWorkList, setLatestWorkList] = useState<IWorkList[]>(WorkList);
    const [ExperiencesList, setExperiences] = useState<IExperience[]>(Experiences)
    const onPressApps = (item: any) => {
        Linking.openURL(item.link);

    }
    return {
        LatestWorkList,
        ExperiencesList,
        onPressApps
    };
};
export default HomeController


