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
export const WorkList: IWorkList[] = [
    {
        id: '1',
        name: 'Perfeta 4',
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