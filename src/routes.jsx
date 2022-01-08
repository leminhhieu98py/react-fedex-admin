import React from "react";
import EnterpriseList from './pages/EnterpriseList/EnterpriseList'
import Accounts from './pages/Accounts/Accounts'
import NotFound from './pages/NotFound/NotFound'
import Default from './pages/Default/Default'
import Profile from './pages/Profile/Profile'

const routes = [
    {
        path: "/enterpriselist",
        exact: true,
        main: () => <EnterpriseList />
    },
    {
        path: "/accounts",
        exact: true,
        main: () => <Accounts />
    },
    {
        path: "/login",
        exact: true,
        main: () => <Default />
    },
    {
        path: "/profile",
        exact: true,
        main: () => <Profile />
    },
    {
        path: "*",
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;