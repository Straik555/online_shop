import React, {useEffect} from "react";
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

import {fetchPhones, loadMorePhones, addPhoneToBasket, fetchCategories} from "../../actions";
import {getPhones} from '../../selectors';
import RenderPhone from './RenderPhone';
import Layout from "../Layout";

const PhonesContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
`;

const LoadMoreDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-bottom: 20px;
  
  button{
      padding: 5px 12px;
      border-radius: 5px;
      font-size: 1em;
      cursor: pointer;
      outline: none;
      ${({theme}) => css`
        color: ${theme.colors.colorWhite};
        background: ${theme.colors.dodgerBlue};
        border: 1px solid ${theme.colors.silverLight};
      `}
   }
`;

const PhonesContainerBanner = styled.div`
  width: 33.33%;
  height: 100%;
  padding: 1.5%;
`;

const Phones = ({
                    fetchPhones,
                    loadMorePhones,
                    phones,
                    addPhoneToBasket,
                    fetchCategories
}) => {
    useEffect(() => {
        fetchPhones();
        fetchCategories()
    }, [fetchPhones, fetchCategories]);
    return (
        <Layout>
            <PhonesContainer>
                {phones.map((phone, id) =>
                    <PhonesContainerBanner key={id}>
                        <RenderPhone addPhoneToBasket={addPhoneToBasket} phone={phone} />
                    </PhonesContainerBanner>
                )}
                <LoadMoreDiv>
                    <button
                        onClick={loadMorePhones}
                    >
                        Load More
                    </button>
                </LoadMoreDiv>
            </PhonesContainer>
        </Layout>
    )
}

const mapStateToProps = (state, ownProps) => ({
    phones: getPhones(state, ownProps)
})

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);