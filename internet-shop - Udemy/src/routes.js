import React from 'react'
import { Switch, Route } from 'react-router'
import { Container, Row, Col } from 'reactstrap'
import Phones from './containers/Phones'
import Phone from './containers/Phone'

export default (
    <Switch>
        <Route path="/" component={Phones} exact />
        <Route path="/phones/:id" component={Phone} />
        {/* <Route path="/basket" component={Basket} exact /> */}
    </Switch>
)