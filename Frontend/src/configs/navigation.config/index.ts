import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'database',
        path: '/database',
        title: 'Database',
        translateKey: 'Database',
        icon: 'database',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'treatment-centers',
        path: '/treatment-centers',
        title: 'Treatment Centers',
        translateKey: 'Treatment Centers',
        icon: 'hospital',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'home-remedies',
        path: '/home-remedies',
        title: 'Home Remedies',
        translateKey: 'Home Remedies',
        icon: 'medicine',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'community',
        path: '/community',
        title: 'Community',
        translateKey: 'Community',
        icon: 'users',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]
export default navigationConfig