import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { WorkList, IWorkList } from '../../utility/constant'

const HomeController = () => {
    const [LatestWorkList, setLatestWorkList] = useState<IWorkList[]>(WorkList); // Explicitly annotate the type here
    return {
        LatestWorkList,
    };
};
export default HomeController