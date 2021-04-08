import * as R from 'ramda'
import React, {Component} from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchPhones, loadMorePhones, addPhoneToBasket} from '../../actions'
import {getPhones} from '../../selectors'
import Layout from '../Layout'

// фетчим все данные из компонента стейтлес
class Phones extends Component {
    // компонент монтируется в дом
    componentDidMount() {
        // это наш экшин
        this.props.fetchPhones()
    }

    renderPhone(phone, index) {
        const shortDesc = `${R.take(60, phone.description)}...`
        // action
        const {addPhoneToBasket} = this.props
        return (
            <Col xs="12" sm="12" md="6" lg="4" key={index}>
                <Card style={{marginBottom: '10px'}}>
                    <CardImg top width="100%" src={phone.image} alt={phone.name} />
                    <CardBody>
                    <CardTitle tag="h5">
                        <Link to={`/phones/${phone.id}`}>
                            {phone.name}
                        </Link>
                    </CardTitle>
                    <p>${phone.price}</p>
                    <CardText>{shortDesc}</CardText>
                    <div className='holder-btn'>
                        <Button 
                            onClick={() => addPhoneToBasket(phone.id)}
                            color="success">Buy now!</Button>
                        <Button className='btn btn-info'>
                            <Link 
                                style={{color: '#fff'}}
                                to={`/phones/${phone.id}`}
                                >
                                More info
                            </Link>
                        </Button>                        
                    </div>
                    </CardBody>
                </Card>
            </Col>
        )
    }
    render() {
        // console.log(this.props.phones)
        const {phones, loadMorePhones} = this.props
        return (
            <Layout>
                <Row>
                    {phones.map((phone, index) => this.renderPhone(phone, index))}
                </Row>
                <Row>
                    <Col>
                        <Button color="primary" className='pull-right' onClick={loadMorePhones}>
                            Load more
                        </Button>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
//                   глабальный стейт
const mapStateToProps = state => ({
    // фильтруем эти данные. ищем по массиву с айдишниками
    phones: getPhones(state)
})

const mapDispatchToProps = {
    // fetchPhones через connect попадет в this.props
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)