import { View, Text, Platform, Image } from 'react-native'
import { createRef } from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationScreens } from './NavigationUtils';
import Home from '../features/home';
import colors from '../utility/colors';
import Work from '../features/work';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Images from '../utility/images';

const AppNavigator = () => {
    // const navigationRef = createRef<NavigationContainerRef<RootParamList>>();
    const Tab = createBottomTabNavigator();

    const Stack = createNativeStackNavigator();

    // type RootParamList = {
    //     Home: undefined;
    //     Work: undefined;
    // };
    const headerOptions: NativeStackNavigationOptions = {
        headerTitleAlign: 'left',
        headerStyle: { backgroundColor: colors.dmsPrimary },
        headerTintColor: colors.white,
        headerBackVisible: false
    }

    const MainStack = () => {
        return (
            <Stack.Navigator >
                <Stack.Screen name={NavigationScreens.bottomStack} options={{ headerShown: false }} component={BottomTabNavigator} />
            </Stack.Navigator>
        )
    }
    const BottomTabNavigator = () => {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        height: Platform.OS === 'ios' ? 90 : 70, // set the height of the tab bar based on platform
                        paddingTop: 10,
                        paddingBottom: Platform.OS === 'ios' ? 30 : 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                    }
                }}
            >
                <Tab.Screen
                    name={NavigationScreens.homeTab}
                    component={HomeStack}
                    options={{
                        tabBarShowLabel: true,
                        headerShown: false,
                        tabBarLabel: 'About',
                        tabBarActiveTintColor: colors.dmsPrimary,
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image source={Images.home} tintColor={!focused ? colors.gray89 : colors.dmsPrimary} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={NavigationScreens.workTab}
                    component={WorkStack}
                    options={{
                        tabBarShowLabel: true,
                        headerShown: false,
                        tabBarLabel: 'My skill',
                        tabBarActiveTintColor: colors.dmsPrimary,
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image source={Images.work} tintColor={!focused ? colors.gray89 : colors.dmsPrimary} />
                        ),
                    }}
                />


            </Tab.Navigator>
        )
    }
    const HomeStack = () => {
        return (
            <Stack.Navigator initialRouteName={NavigationScreens.home}>
                <Stack.Screen
                    name={NavigationScreens.home}
                    component={Home}
                    options={headerOptions}
                />

            </Stack.Navigator>
        )
    }
    const WorkStack = () => {
        return (
            <Stack.Navigator initialRouteName={NavigationScreens.work}>
                <Stack.Screen
                    name={NavigationScreens.work}
                    component={Work}
                    options={headerOptions}
                />

            </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer  >
            <MainStack />
        </NavigationContainer>
    )
}
export default AppNavigator