import React from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';
import styled, {css} from 'styled-components';
import {Icon} from "react-icons-kit";
import {bin} from 'react-icons-kit/icomoon/bin'
import {Link} from "react-router-dom";

import {
    getBasketPhonesWithCount,
    getTotalBasketPrice
} from '../../selectors';
import {
    removePhoneFromBasket,
    cleanBasket,
    basketCheckout
} from '../../actions';

const BasketBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BasketBannerContainer = styled.div`
  width: 1000px;
  display: flex;
  .content{
    width: 80%;
  }
  .sidebar{
    width: 20%;
  }
`;

const RenderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  table{
    tr{
      width: 100%;
      display: flex;      
      justify-content: space-between;
    }
    
    td{
      width: auto;
      border: 1px solid silver;
      padding: 5px;
      flex-grow: 2;
      display: flex;
      align-items: center;
      justify-content: center; 
      span{
        cursor:pointer;
      }
    }
    .img{
      width: 12%;
      justify-content: flex-start;
      img{
        width: 120px;
        padding: 5px;
        ${({theme}) => css`
          box-shadow: 0 0 5px ${theme.colors.borderShadow};
        `}
      }
    }
  }
`;

const Basket = ({
                    phones,
                    totalPrice,
                    removePhoneFromBasket,
                    cleanBasket,
                    basketCheckout
}) => {
    const isBasketEmpty = R.isEmpty(phones)
    const renderContent = () => (
        <RenderContent>
            {isBasketEmpty && <div>Your shopping cart is empty</div>}
            {!isBasketEmpty &&
            <>
                <table>
                    <tbody>
                    {phones.map((phone, idx) => (
                        <tr
                            key={idx}
                        >
                            <td className={'img'}>
                                <img src={phone.image} alt={phone.name} />
                            </td>
                            <td>
                                {phone.name}
                            </td>
                            <td>
                                {phone.price}
                            </td>
                            <td>
                                {phone.count}
                            </td>
                            <td><span
                                    onClick={() => removePhoneFromBasket(phone.id)}
                                >
                                <Icon size={20} icon={bin}/>
                            </span></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div>
                    <div>
                        <b>Total:</b>
                        ${totalPrice}
                    </div>
                </div>
            </>
            }
        </RenderContent>
    );
    const renderSidebar = () => (
        <div>
            <Link to={'/'} >
                <span>

                </span>
                <span>
                    Continue shopping!
                </span>
            </Link>
            {!isBasketEmpty && (
                <div>
                    <button
                        onClick={cleanBasket}
                    >
                        <span>
                            Clean Cart
                        </span>

                    </button>
                    <button
                        onClick={() => basketCheckout(phones)}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    )

    return (
        <BasketBanner>
            <BasketBannerContainer>
                <div className={'content'}>
                    {renderContent()}
                </div>
                <div className={'sidebar'}>
                    {renderSidebar()}
                </div>
            </BasketBannerContainer>
        </BasketBanner>
    )
}

const mapStateToProps = state => {
    return{
        phones: getBasketPhonesWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
}

const mapDispatchToProps = {
    removePhoneFromBasket,
    cleanBasket,
    basketCheckout
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);