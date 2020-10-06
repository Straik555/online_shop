import React, {useState} from "react";
import {Icon} from "react-icons-kit";
import {search} from 'react-icons-kit/icomoon/search'
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';

import {searchPhone} from '../../actions';

const SearchBanner = styled.div`
  width: 100%;
  padding: 20px 15px 15px 15px;
  margin-bottom: 15px;
  ${({theme}) => css`
    background: ${theme.colors.borderShadow};
  `}
`;

const SearchBannerContainer = styled.div`
  display: flex;
  padding-top: 10px;
  *{
    height: 25px;
  }
`;

const Search = ({searchPhone}) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchPhone(value)
    }

    return (
        <SearchBanner>
            <h3>Quick shop</h3>
            <SearchBannerContainer>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        onChange={handleChange}
                    />

                </form>
                <span>
                    <button onClick={handleSubmit}>
                        <span>
                            <Icon icon={search} size={20} />
                        </span>
                    </button>
                </span>
            </SearchBannerContainer>
        </SearchBanner>
    )
}

const mapDispatchToProps = {
    searchPhone
}

export default connect(null, mapDispatchToProps)(Search);