import styled from 'styled-components';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SidebarStyled = styled.div`
  background: ${({ theme }) => theme.color.primary};
  /* -webkit-box-shadow: 2px 1px 12px -2px rgba(0, 0, 0, 0.46);
  box-shadow: 2px 1px 12px -2px rgba(0, 0, 0, 0.46); */
  color: ${({ theme }) => theme.color.white};
  height: 100%;
  overflow: auto;
  position: fixed;
  width: 40rem;
  z-index: ${({ theme }) => theme.zIndex.sidebar};
`;

export const LeftMenuInner = styled.div`
  background: ${props => props.background};
  height: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  padding-left: 3rem;
  padding-top: ${({ theme }) => theme.spacing.medium};
  position: fixed;
  width: 40rem;
`;

export const LeftMenuInnest = styled.div`
  background: ${props => props.background};
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 20rem;
  width: 100%;
`;

// MOVE TO OWN COMPONENT FOLDER
export const ButtonItem = styled.button.attrs(({ background, theme }) => ({
  background: background || theme.color.white
}))`
  background-color: 'transparent';
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.animation.radiusM};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.large};
  margin: ${({ theme }) => theme.spacing.xs} 0rem;
  opacity: 0.75;
  padding: ${({ theme }) => theme.spacing.small};

  &:hover {
    opacity: 1;
  }
`;

// eslint-disable-next-line react/display-name
export const ButtonSidebar = forwardRef((props, ref) => (
  <ButtonItem key={props.name} onClick={props.onClick} ref={ref}>
    {props.name}
  </ButtonItem>
));

ButtonSidebar.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};
