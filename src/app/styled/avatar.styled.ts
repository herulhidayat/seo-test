import styled from 'styled-components';
import { font } from './function/_font.styled';

/** AVATAR ALIAS TEXT */
export const AliasAvatar = styled.div`
  display: inline-table;
  vertical-align: middle;
  width: 2rem;
  height: 2rem;

  background-color: var(--black-100);
  border-radius: 2rem;
  margin-right: 0.5rem;

  &.primary {
    background: ${(props) =>
      props.theme?.menuStyle == 'v2'
        ? `radial-gradient(101.99% 253.16% at -1.99% -1.14%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)`
        : 'var(--primary-50)'};
    border: ${(props) =>
      props.theme?.menuStyle == 'v2'
        ? '1px solid rgba(255, 255, 255, 0.3)'
        : 'none'};
    color: var(--primary) !important;
  }
`;

export const AvatarContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border-radius: 0.4rem;
  ${font({ size: '1rem' })};
  font-weight: 500;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;
