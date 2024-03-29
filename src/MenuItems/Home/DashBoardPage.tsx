
import { TypeOfMenuPages } from '../index';
import CottageIcon from '@mui/icons-material/Cottage';

const icons = { CottageIcon };

export const Dashboard: TypeOfMenuPages = {
    id: 'home',
    title: 'Home',
    // caption: 'Home page',
    type: 'group',
    url: "",
    permission: true,
    children: [
        {
            id: 'dashboard1',
            title: 'Home',
            type: 'item',
            icon: icons.CottageIcon,
            url: '/dashboard1',
            breadcrumbs: false,
            permission: true
        }
    ]
};
