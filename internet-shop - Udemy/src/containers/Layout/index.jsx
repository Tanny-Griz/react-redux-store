import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import SideBar from '../../components/Sidebar'

// каждую стр сюда заворачивать
const Layout = ({children}) => (
    <Container>
        <Row style={{padding: '30px 0'}}>
            <Col md="3" >
                <SideBar />
            </Col>
            <Col md="9" >
                {children}
            </Col>
        </Row>         
    </Container>
)

export default Layout
