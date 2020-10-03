import React from "react";
import {Switch, Route} from "react-router";

import '../../styles/main.scss'
import Phones from "../Phones";
import {
    LayoutBanner,
    LayoutBannerContainer,
    LayoutBannerContainerHeader,
    LayoutContainer
} from './style';

const routes = (
    <Switch>
        <Route path='/' component={Phones} exact />
    </Switch>
)

const Layout = () => {
    return (
        <LayoutBanner>
            <LayoutBannerContainer>
                <LayoutBannerContainerHeader>
                        Sorse
                </LayoutBannerContainerHeader>
                <LayoutContainer>
                    {routes}
                </LayoutContainer>
            </LayoutBannerContainer>
        </LayoutBanner>
    )
}

export default Layout;