import React, { useState, useEffect } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { camelCase, first } from 'lodash';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styled from 'styled-components';

function Tabset({
  tabOptions = [],
  className = '',
  callbackTabActive,
}: ITabset) {
  const [options, setOptions] = useState<any>([]);
  const [tabActive, setTabActive] = useState<string>();

  const onChangeTab = (item: any) => {
    setTabActive(item);
    callbackTabActive(item);
  };

  useEffect(() => {
    if (tabOptions?.length > 0) {
      const formatTabOptions: any = tabOptions.map((item: any) => ({
        id: camelCase(item),
        name: item,
      }));
      const firstTab: any = first(formatTabOptions);

      setOptions(formatTabOptions);
      setTabActive(firstTab?.id);
      callbackTabActive(firstTab?.id);
    }
  }, [tabOptions]);

  return (
    <>
      <CustomTabs
        activeKey={tabActive}
        defaultActiveKey={tabActive}
        onSelect={(k: any) => onChangeTab(k)}
        id={nanoid()}
        className={className}
      >
        {options?.map((item: any) => (
          <Tab key={nanoid()} eventKey={item?.id} title={item?.name} />
        ))}
      </CustomTabs>
    </>
  );
}

export default Tabset

interface ITabset {
  tabOptions: any;
  className?: string;
  callbackTabActive(tabActive: string) : void;
}

const CustomTabs = styled(Tabs)`
  li.nav-item {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.067rem;
    line-height: 1.6rem;
    letter-spacing: 0.06em;
    color: var(--secondary);
    button {
      color: var(--secondary);
      &.active {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
        background-color: transparent;
      }
    }
  }
`;