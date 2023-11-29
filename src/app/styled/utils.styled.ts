import { CONFIG_DEVICE } from '@app/config/device.config';
import styled, { css } from 'styled-components';

export const FontInterWeightNormal: any = css`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
`;

export const TitleSize: any = css`
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
`;
export const LastUpdate = styled.div`
  padding-top: 0.5rem;
  font-size: 85%;

  @media ${CONFIG_DEVICE.mobileL} {
    padding: 1.25rem 0 0 0;
  }
`;
