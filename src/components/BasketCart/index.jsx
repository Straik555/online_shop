import React from "react";
import {Link} from "react-router-dom";
import styled, {css} from 'styled-components';
import {Icon} from 'react-icons-kit';
import {ic_add_shopping_cart} from 'react-icons-kit/md/ic_add_shopping_cart'
import {connect} from 'react-redux';

import {
    getTotalBasketCount,
    getTotalBasketPrice
} from '../../selectors';

const BasketCartBanner = styled.div`
  width: 100%;
  padding: 25px 0 7.5px 0;
`;

const BasketCartLink = styled(Link)`
  width: 100%;
  padding: 10px;
  text-decoration: none;
  ${({theme}) => css`
    color: ${theme.colors.colorWhite};
    background: ${theme.colors.dodgerBlue};
  `}

`;

const BasketCart = ({totalBasketCount, totalPrice}) => {
    return (
        <BasketCartBanner>
            <BasketCartLink
                to='/basket'
            >
                <Icon size={20} icon={ic_add_shopping_cart} />
                {totalBasketCount === 0 ? null : (<span>{totalBasketCount} item(s) - ${totalPrice}</span>)}
            </BasketCartLink>
        </BasketCartBanner>
    )
}

const mapStateToProps = state => {
    return {
        totalBasketCount: getTotalBasketCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
}

export default connect(mapStateToProps, null)(BasketCart);