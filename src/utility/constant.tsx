import colors from "./colors";
import Images from "./images";

export interface IWorkList {
    id: string;
    name: string;
    subtitle: string;
    color: string,
    image: any
}
export const WorkList: IWorkList[] = [
    {
        id: '1',
        name: 'Perfeta 4',
        subtitle: 'Pending Review',
        color: colors.portYellow,
        image: Images.p4

    },
    {
        id: '2',
        name: 'InkDoc',
        subtitle: 'Published',
        color: colors.black,
        image: Images.Ink
    },
    {
        id: '3',
        name: 'DMS',
        subtitle: 'Draft',
        color: colors.black,
        image: Images.dms
    },
    {
        id: '4',
        name: 'Perfeqta 5',
        subtitle: 'Draft',
        color: colors.black,
        image: Images.p5
    },


];