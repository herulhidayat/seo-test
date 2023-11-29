import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import BsAccordion from 'react-bootstrap/Accordion';

import { AccordionItem, AccordionHeader, AccordionBody } from '@app/styled/accordion.styled';

interface IAccordion {
  active?: string | number;
}

function Accordion({ active = '0' }: IAccordion) {
  const [activeKey] = useState<any>(active);

  return (
    <>
      <BsAccordion defaultActiveKey={activeKey}>
        <AccordionItem eventKey='0'>
          <AccordionHeader className="v2">Informasi Desa</AccordionHeader>
          <AccordionBody>
            <Table className='mb-0 mt--1' responsive bordered>
              <tbody>
                <tr>
                  <td style={{width:10}} className="text-center">1</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey='1'>
          <AccordionHeader className="v2">Informasi Desa</AccordionHeader>
          <AccordionBody>
            <Table className='mb-0 mt--1' responsive bordered>
              <tbody>
                <tr>
                  <td style={{width:10}} className="text-center">1</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </AccordionBody>
        </AccordionItem>
      </BsAccordion>
    </>
  );
}


export default Accordion;
