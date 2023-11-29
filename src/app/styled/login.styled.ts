import styled from 'styled-components';
import {} from 'react-bootstrap';

export const LoginContainer = styled.div`
  width: 36vw;
  background-color: var(--white);
  height: 100%;

  .login-title {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 0.933rem;
    width: 100%;
  }

  .login-desc {
    font-weight: 400;
    color: var(--black-300);
    width: 100%;
  }

  /* Login container kanan */
  &.right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 83vh;
  justify-content: center;
  padding: 0 7rem;
`;

export const Illustration = styled.div`
  height: 100%;
  background-color: #e4fbff;
  /* Ilustrasi kiri */
  &.left {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem;
  }
  /* Ilustrasi kanan */

  &.right {
    position: relative;
  }
`;
