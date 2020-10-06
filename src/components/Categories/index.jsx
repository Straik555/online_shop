import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import styled, {css} from "styled-components";
import {withRouter} from "react-router";
import {compose} from "redux";
import classNames from 'classnames';
import * as R from 'ramda';

import {getCategories, getActiveCategoryId} from '../../selectors';

const CategoriesBanner = styled.div`
  width: 100%;
  padding: 20px 15px 15px 15px;
  ${({theme}) => css`
    background: ${theme.colors.borderShadow};
  `}
  h4{
    padding-bottom: 10px;
  }
`;

const CategoriesBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  .item{
  text-decoration: none;
    padding: 10px;
    :hover{
      ${({theme}) => css`
        background: ${theme.colors.borderShadow};
      `}
    }  
   &.active{
    ${({theme}) => css`
      border: 1px solid ${theme.colors.dodgerBlue};
      background: ${theme.colors.dodgerBlue};
    `}
    :hover{
      ${({theme}) => css`
        background: ${theme.colors.dodgerBlue};
      `}
    }
   }
  ${({theme}) => css`
      color: ${theme.colors.blackLight};
      border: 1px solid ${theme.colors.silverLight};
      background: ${theme.colors.colorWhite};
    `}
  }
`;

const Categories = ({categories, activeCategoryId}) => {
    const getActiveState = R.propEq('id', activeCategoryId)
    const renderCategory = (category, index) => {
        const linkClass = classNames({
            'item': true,
            'active': getActiveState(category)
        })
        return (
            <Link
                to={`/categories/${category.id}`}
                key={index}
                className={linkClass}
            >
                {category.name}
            </Link>
        )
    }

    const renderAllCategory = () => {
        const linkClass = classNames({
            'item': true,
            'active': R.isNil(activeCategoryId)
        })
        return (
            <Link
                to={'/'}
                className={linkClass}
            >
                All
            </Link>
        )
    }
    return (
        <CategoriesBanner>
            <h4>Brand</h4>
            <CategoriesBannerContainer>
                {renderAllCategory()}
                {categories.map((category, index) => renderCategory(category, index)
                )}
            </CategoriesBannerContainer>
        </CategoriesBanner>
    )
}

const mapStateToProps = (state, ownState) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownState)
})

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(Categories);