import React from 'react'
import { Switch, Route } from 'react-router'
import { Container, Row, Col } from 'reactstrap'
import Phones from '../Phones'

const routes = (
    <Switch>
        <Route path="/" component={Phones} exact />
        {/* <Route path="/basket" component={Basket} exact /> */}
    </Switch>
)

const Layout = () => (
    <Container>
        <Row>
            <Col md="3" >sideBar</Col>
            <Col md="9" >
                {routes}
            </Col>
        </Row>         
    </Container>
)

export default Layout
