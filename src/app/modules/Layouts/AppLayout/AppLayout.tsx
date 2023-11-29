import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

export default function SidebarLayout() {
  return (
    <>
      <Header />
      <Container fluid className="px-0">
        <Row className="gx-0" style={{ minHeight: 'calc(100vh - 4.23rem)' }}>
          <Col xs={'auto'}>
            <Sidebar />
          </Col>
          <Col>
            <Container className="py-4" fluid>
              <Outlet />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}
