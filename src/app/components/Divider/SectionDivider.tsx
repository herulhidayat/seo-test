import { font } from '@app/styled/function/_font.styled';
import React from 'react';
import styled from 'styled-components';

interface ISectionDivider {
  name: string;
  icon?: string;
}
export default function SectionDivider({ name, icon }: ISectionDivider) {
  return (
    <>
      <Title className='py-0 mt-4 mb-0'>
        {icon && (
          <span
            dangerouslySetInnerHTML={{
              __html: `<i class="${icon}"></i>`,
            }}
          ></span>
        )}
        {name}
      </Title>
      <hr className='mt-2' />
    </>
  );
}

const Title = styled.h5`
  ${font({ size: '1.15rem' })}
  font-weight: 600;
  line-height: 1.33rem;
  margin-bottom: 1.25rem;
  margin-top: 1rem;
`