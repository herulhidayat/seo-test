/* eslint-disable @typescript-eslint/no-unused-vars */
import { ADMIN_MENU } from '@app/config/menu.config';
import { DFlexJustifyBetween } from '@app/styled/flex.styled';
import { get, reverse } from 'lodash';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbItem = styled(Breadcrumb.Item)``;

function BreadcrumbPage() {
  const { activePage } = useSelector((state: any) => state?.ui);

  const location = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<any>();

  useEffect(() => {
    let breadcrumsData: any = [{ ...activePage, last: true }];
    if (activePage?.idParent) {
      const parent1 = get(
        ADMIN_MENU().filter((f: any) => f?.id == activePage?.idParent),
        0
      );
      breadcrumsData.push(parent1);

      if (parent1.idParent) {
        const parent2 = get(
          ADMIN_MENU().filter((f: any) => f?.id == parent1?.idParent),
          0
        );
        breadcrumsData.push(parent2);

        if (parent2.idParent) {
          const parent3 = get(
            ADMIN_MENU().filter((f: any) => f?.id == parent2?.idParent),
            0
          );
          breadcrumsData.push(parent3);
        }
      }
    }

    setBreadcrumbs(reverse(breadcrumsData));
  }, [activePage]);

  return (
    <>
     <div>
          <h3 className="font-weight-800">My Document</h3>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>My Document</Breadcrumb.Item>
          </Breadcrumb>
        </div>
    </>
  );
}

export default React.memo(BreadcrumbPage);
