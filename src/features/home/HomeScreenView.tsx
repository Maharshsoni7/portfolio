import { View, Text, ScrollView, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import HomeController from './HomeController'
import { IExperience, IWorkList } from '../../utility/constant'
import Images from '../../utility/images'
import colors from '../../utility/colors'
import _RenderLatestWork from '../../components/commonWork'
const HomeScreen = () => {
    const { LatestWorkList, onPressApps, ExperiencesList } = HomeController();
    const _RenderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>Hey There,</Text>
                <Text style={styles.headerText}>I'M Maharsh</Text>
                <View style={styles.HeaderSubTitle}>
                    <Text style={styles.headerSubText}>I have done engineering degree in IT,and have 2 years of industry experience building Mobile applications.
                        I specialize in React-Native, and have experience working with javascript, redux, realm and Redux-toolkit.
                    </Text>

                </View>

            </View>
        )
    }
    const _RenderVector = () => {
        return (
            <View style={{ alignItems: 'center', bottom: 15 }}>
                <Image
                    source={Images.vector}
                    style={styles.vector}
                    resizeMode='cover'
                />
            </View>
        )
    }
    const _RenderSubheader = () => {
        return (
            <View style={styles.subHederView}>
                <Text style={styles.subHederText}>
                    What do I help ?
                </Text>
                <View style={styles.subHederSubtitle}>
                    <Text style={styles.headerSubText}>
                        I'm here to collaborate with you in discovering solutions and overcoming challenges.
                    </Text>
                </View>
            </View>
        )
    }


    const _RenderExperienceItem = ({ experience }: { experience: IExperience[] }) => {
        return (
            <View style={styles.LatesHeader}>
                <Text style={styles.subHederText}>
                    My Latest Work
                </Text>
                <View style={styles.HeaderSubTitle}>
                    <Text style={styles.headerSubText}>
                        I have spent two years honking my skills. My passion for building Mob applications and user interfaces led me to improve my React-Native game,
                        allowing me to create dynamic applications. I have also hands on experience with realm Data base, Offline support app.
                    </Text>
                </View>
                <View style={styles.experienceContain}>

                    {experience.map((item: any, index: number) => (
                        <View key={index}>
                            <View style={styles.outerDottedLine} />
                            <View style={[styles.circle, { backgroundColor: item.dotColor }]} />
                            {index < experience.length - 1 && <View style={styles.verticalLine} />}
                            <View style={styles.experienceContent}>
                                <Text style={styles.title}>{item.jobTitle}</Text>
                                <Text style={styles.company}>{item.company}</Text>
                                <Text style={styles.duration}>{item.duration}</Text>
                                <Text style={styles.description}>{item.skills}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    };
    return (
        <ScrollView style={styles.container}>
            <_RenderHeader />
            <_RenderVector />
            <_RenderSubheader />
            <View>
                <_RenderLatestWork LatestWorkList={LatestWorkList}
                    onPressApps={onPressApps}
                    numColumns={2}
                    HeaderTitle={'My Latest Work'}
                    HeaderSubTitle={' Perfect solution for Digital Work.'}
                />
            </View>
            <_RenderExperienceItem experience={ExperiencesList} />
        </ScrollView>
    )
}
export default HomeScreen