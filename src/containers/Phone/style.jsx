import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const PhoneBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PhoneContainer = styled.div`
  width: 1000px;
  display: flex;
  padding: 20px;
`;

const RenderContentBanner = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  ${({theme}) => css`
    box-shadow: 0 0 5px ${theme.colors.silverLight};
  `}
`;

const RenderContentBannerHeader = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  img{
    width: 40%;
    height: 40%;
    border-radius: 10px;
    ${({theme}) => css`
      box-shadow: 0 1px 2px ${theme.colors.borderShadow};
    `}
  }
`;

const RenderContentBannerHeaderFields = styled.div`
  width: 65%;
  padding: 10px 0 10px 50px;
  display: block;
`;

const RenderFieldsBanner = styled.li`
  list-style: none;
  display: flex;
  padding: 5px 0 15px 0;
  align-items: baseline;
  
  ${({theme}) => css`
      border-bottom: 1px solid ${theme.colors.borderShadow};
  `}
  strong{
    font-weight: normal;
    font-size: 20px;
    padding-right: 20px;
  }
  p{
    font-weight: normal;
    font-size: 12px;
  }
`;

const RenderContentBannerTitle = styled.div`
  width: 100%;
  padding: 0 10px 15px 10px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const RenderSidebarBanner = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  p{
    font-size: 20px;
  }
  h1{
    font-size: 2em;
    padding-bottom: 10px;
  }
  h4{
    font-size: 1.5em;
    padding-bottom: 5px;
  }
  .add_to_cart{
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 0.8em;
  }
`;

const RenderSidebarBannerLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size: 0.8em;
  ${({theme}) => css`
    color: ${theme.colors.colorWhite};
    background: ${theme.colors.dodgerBlue};
  `}
`;

export {
    PhoneBanner,
    PhoneContainer,
    RenderContentBanner,
    RenderContentBannerHeader,
    RenderContentBannerHeaderFields,
    RenderFieldsBanner,
    RenderContentBannerTitle,
    Title,
    RenderSidebarBanner,
    RenderSidebarBannerLink,
}