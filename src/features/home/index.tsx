import { View, Text } from 'react-native'
import React from 'react'
import MainView from '../../components/mainView'
import HomeScreen from './HomeScreenView'


const Home = () => {
    return (
        <MainView
            isSafeAreaViewDisplay={false}
            isStatusBarHidden={true}
            subView={HomeScreen}
            isDifferentBG={true}
            context={null}
        />
    )
}
export default Home