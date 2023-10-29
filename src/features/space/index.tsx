import { View, Text } from 'react-native'
import React from 'react'
import MainView from '../../components/mainView'
import SpaceView from './SpaceView'

const Space = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={false}
            isStatusBarHidden={true}
            subView={SpaceView}
            isDifferentBG={true}
            context={null}
        />
    )
}
export default Space