import { View, Text } from 'react-native'
import React from 'react'
import MainView from '../../components/mainView'
import WorkScreen from './WorkScreenView'

const Work = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={false}
            isStatusBarHidden={true}
            subView={WorkScreen}
            isDifferentBG={true}
            context={null}
        />
    )
}
export default Work