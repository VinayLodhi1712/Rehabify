import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },

    {
        key: 'database',
        path: '/database',
        component: lazy(() => import('@/views/Database')),
        authority: [],
    },
    {
        key: 'treatment-centers',
        path: '/treatment-centers',
        component: lazy(() => import('@/views/TreatmentCenters')),
        authority: [],
    },
    {
        key: 'home-remedies',
        path: '/home-remedies',
        component: lazy(() => import('@/views/HomeRemedies')),
        authority: [],
    },
    {
        key: 'community',
        path: '/community',
        component: lazy(() => import('@/views/Community')),
        authority: [],
    },
]