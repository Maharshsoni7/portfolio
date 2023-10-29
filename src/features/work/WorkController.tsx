import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { IMySkill, IWorkList, MySkill, WorkList } from '../../utility/constant';

const WorkController = () => {
    const [LatestWorkList, setLatestWorkList] = useState<IMySkill[]>(MySkill);
    return {
        LatestWorkList
    }

}
export default WorkController