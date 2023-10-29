import colors from "./colors";
import Images from "./images";

export interface IWorkList {
    id: string;
    name: string;
    subtitle: string;
    color: string,
    image: any,
    link: any
}
export interface IMySkill {
    id: string;
    name: string;
    image: any
}
export interface IMediaCollections {
    github: string;
    linkedin: string;
    mail: string;
}
export const WorkList: IWorkList[] = [
    {
        id: '1',
        name: 'Perfeqta 4',
        subtitle: 'Pending Review',
        color: colors.portYellow,
        image: Images.p4,
        link: 'https://play.google.com/store/apps/details?id=com.perfeqta_mobile_app&pcampaignid=web_share'

    },
    {
        id: '2',
        name: 'InkDoc',
        subtitle: 'Published',
        color: colors.black,
        image: Images.Ink,
        link: 'https://play.google.com/store/apps/details?id=com.inkdoc&pcampaignid=web_share'

    },
    {
        id: '3',
        name: 'DMS',
        subtitle: 'Draft',
        color: colors.black,
        image: Images.dms,
        link: 'https://play.google.com/store/apps/details?id=com.perfeqtadms&pcampaignid=web_share'

    },
    {
        id: '4',
        name: 'Perfeqta 5',
        subtitle: 'Draft',
        color: colors.black,
        image: Images.p5,
        link: 'https://play.google.com/store/apps/details?id=com.perfeqta_mobile_app&pcampaignid=web_share'

    },


];
export interface IExperience {
    jobTitle: string;
    company: string;
    duration: string;
    skills: string;
    dotColor: string
}
export const Experiences: IExperience[] = [
    {
        jobTitle: 'Software Engineer',
        company: 'PixelQue Software Pvt Ltd',
        duration: 'Mar2023 - Present',
        skills: 'React-native, javaScript, Redux,Redux-saga, Redux-toolkit, Styled Components, Realm Database',
        dotColor: colors.green
    },
    {
        jobTitle: 'Associate Software Engineer',
        company: 'PixelQue Software Pvt Ltd',
        duration: 'Mar 2022- Feb 2023 - 1y',
        skills: 'React-Native, javaScript, Redux, Redux-saga,Redux-toolkit, Styled Components, Realm Database',
        dotColor: colors.red
    },
    {
        jobTitle: 'Internship',
        company: 'PixelQue Software Pvt Ltd',
        duration: '2021 - Feb 2022 - 6 mos ',
        skills: 'React-Native, javaScript, Redux, Redux-toolkit, Styled Components, Realm Database',
        dotColor: colors.dmsYellow
    },
];

export const MySkill: IMySkill[] = [
    {
        id: '1',
        name: 'JavaScript',
        image: Images.js
    },
    {
        id: '6',
        name: 'typescript',
        image: Images.ts
    },
    {
        id: '2',
        name: 'React-Native',
        image: Images.rn
    },
    {
        id: '3',
        name: 'Redux',
        image: Images.redux
    },
    {
        id: '4',
        name: 'Realm',
        image: Images.realm
    },
    {
        id: '5',
        name: 'FireBase',
        image: Images.firebase
    },


];
export const myClicks: IMySkill[] = [
    {
        id: '1',
        name: 'JavaScript',
        image: Images.one
    },
    {
        id: '2',
        name: 'React-Native',
        image: Images.two
    },
    {
        id: '3',
        name: 'Redux',
        image: Images.three
    },
    {
        id: '4',
        name: 'Realm',
        image: Images.four
    },
    {
        id: '5',
        name: 'FireBase',
        image: Images.five
    },
    {
        id: '6',
        name: 'FireBase',
        image: Images.six
    },
    {
        id: '7',
        name: 'FireBase',
        image: Images.seven
    },
    {
        id: '8',
        name: 'FireBase',
        image: Images.eight
    },
    {
        id: '9',
        name: 'FireBase',
        image: Images.nine
    },
    {
        id: '10',
        name: 'FireBase',
        image: Images.ten
    },
    {
        id: '11',
        name: 'FireBase',
        image: Images.eleven
    },
    {
        id: '12',
        name: 'FireBase',
        image: Images.twelve
    },
    {
        id: '13',
        name: 'FireBase',
        image: Images.thirteen
    },


];
export const mediaLinkCollection: IMediaCollections = {
    github: 'https://github.com/Maharshsoni7',
    linkedin: 'https://in.linkedin.com/in/maharsh-soni-88b575211',
    mail: 'maharshsoni007@gmail.com'

}
