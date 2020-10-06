import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as R from 'ramda';

import {fetchPhoneById, addPhoneToBasket} from '../../actions';
import {getPhoneById} from "../../selectors";
import {
    PhoneBanner,
    PhoneContainer,
    RenderContentBanner,
    RenderContentBannerHeader,
    RenderContentBannerHeaderFields,
    RenderFieldsBanner,
    RenderContentBannerTitle,
    Title,
    RenderSidebarBanner,
    RenderSidebarBannerLink
} from './style';
import BasketCart from "../../components/BasketCart";

const Phone = ({fetchPhoneById, match, phone, addPhoneToBasket}) => {

    useEffect(() => {
        fetchPhoneById(match.params.id)
    }, [fetchPhoneById, match.params.id])

    const renderFields = () => {
        const columnField = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone)

        return columnField.map(([key, value]) => (
            <RenderFieldsBanner key={key}>
                <strong>{key}</strong>
                <p>{value}</p>
            </RenderFieldsBanner>
        ))
    }

    const renderContent = () => {
        return (
            <RenderContentBanner>
                <RenderContentBannerHeader>
                    <img src={phone.image} alt={phone.name} />
                    <RenderContentBannerHeaderFields>
                        {renderFields()}
                    </RenderContentBannerHeaderFields>
                </RenderContentBannerHeader>
                <RenderContentBannerTitle>
                    <Title>
                        <h4>{phone.name}</h4>
                        <h4>${phone.price}</h4>
                    </Title>
                    <p>{phone.description}</p>
                </RenderContentBannerTitle>
            </RenderContentBanner>
        )
    }

    const renderSidebar = () => {
        return (
            <RenderSidebarBanner>
                <p>Quick Shop</p>
                <BasketCart />
                <h1>{phone.name}</h1>
                <h4>${phone.price}</h4>
                <RenderSidebarBannerLink to='/'>Back to store</RenderSidebarBannerLink>
                <button
                    onClick={() => addPhoneToBasket(phone.id)}
                    className={'add_to_cart'}
                >
                    Add to cart
                </button>
            </RenderSidebarBanner>
        )
    }

    return (
        <PhoneBanner>
            <PhoneContainer>
                {phone && renderContent()}
                {phone && renderSidebar()}
            </PhoneContainer>
        </PhoneBanner>
    )
}

const mapStateToProps = state => {
    return {
        phone: getPhoneById(state, state.phonePage.id)
    }
}

const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone);