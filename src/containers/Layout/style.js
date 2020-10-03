import styled from "styled-components";
import {customMedia} from "../../styles/customMedia";

const LayoutBanner = styled.div`
  width: 100%;
  font-family: source sans pro,sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const LayoutBannerContainer = styled.div`
  width: 1200px;
  display: flex;
  ${customMedia.lessThan('lg')`
    flex-direction: column;
  `}
`;

const LayoutBannerContainerHeader = styled.div`
  width: 25%;
  ${customMedia.lessThan('lg')`
    width: 100%;
  `}
`;

const LayoutContainer = styled.div`
  width: 75%;
  ${customMedia.lessThan('lg')`
    width: 100%;
  `}
`;

export {
    LayoutBanner,
    LayoutBannerContainer,
    LayoutBannerContainerHeader,
    LayoutContainer
}