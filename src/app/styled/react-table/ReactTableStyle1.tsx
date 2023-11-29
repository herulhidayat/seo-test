import styled from 'styled-components'
import { font } from '../function/_font.styled'

export const ReactTableStyle1: any = styled.div`
  margin-bottom: 0 !important;
  table {
    width: 100%;
    border-spacing: 0;
    ${font({})}
    font-style: normal;
    font-weight: 400;
    font-size: 0.85rem;
    line-height: 1rem;
    color: var(--black-600);
    th,
    td {
      margin: 0;
      padding: 0.85rem 1.33rem;

      :last-child {
        border-right: 0;
      }
    }
    thead {
      tr {
        background-color: var(--white);
        th {
          ${font({})}
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 15px;
          padding: 1.067rem 1.067rem;
          text-align: left;
          color: var(--black);
          background-color: var(--black-10) !important;

          &:first-child {
            text-align: left;
          }
        }
      }
    }
    tbody {
      tr {
        border-top: 0.15rem solid var(--body-bg);
        border-bottom: 0.15rem solid var(--body-bg);
        background-color: var(--white);
        td {
          text-align: left;
          color: var(--black);
          font-size:1rem;

          &:first-child {
            text-align: left;
          }
        }
      }
    }
  }
`
