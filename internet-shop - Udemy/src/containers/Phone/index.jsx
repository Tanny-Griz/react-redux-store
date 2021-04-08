import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import * as R from 'ramda'

import {fetchPhoneById, addPhoneToBasket} from '../../actions'
import { getPhoneById } from '../../selectors';
import BasketCart from '../../components/BasketCart'

// каждую стр сюда заворачивать
class Phone extends Component {
    componentDidMount() {
        const phoneId = this.props.match.params.id
        this.props.fetchPhoneById(phoneId)
    }

    renderFields() {
        const {phone} = this.props

        const columnFields = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone)

        return columnFields.map(([key, value]) => (
            <div key={key}>
                <p style={{color: '#c0c0c0'}}>{key}: <span style={{color: '#000'}}>{value}</span></p>
                <hr/>
            </div>
        ))
    }

    renderContent() {
        const {phone} = this.props
        
        return (
            <div style={{display: 'flex'}}>
                <div style={{width: "300px", marginRight: '25px'}}>
                    <img src={phone.image} alt={phone.name}/>
                    <h4>{phone.name}</h4>
                    <p>${phone.price}</p>
                    <p>{phone.description}</p>
                    <div className='holder-btn'>
                     <Button color="success">Buy now!</Button>                      
                    </div>
                </div>
                <div style={{ padding: '20px 0'}}>{this.renderFields()}</div>
            </div>
        )
    }

    renderSidebar() {
        const {phone, addPhoneToBasket} =  this.props
        return (
            <div>
                <p>Q shop</p>
                <BasketCart />
                <div className='form-gtoup'>
                    <h1>{phone.name}</h1>
                    <h2>${phone.price}</h2>
                </div>
                <Link to='/'
                    className='btn btn-info'
                >
                    Back to store
                </Link>
                <button 
                    className='btn btn-success'
                    onClick={() => addPhoneToBasket(phone.id)}
                    >
                        add to cart
                    </button>
            </div>
        )
    }

    render () {
        const {phone} = this.props
        return (
            <Container>
                <Row style={{padding: '30px 0'}}>
                    <Col md="9" >
                        {phone && this.renderContent()}
                    </Col>
                    <Col md="3" >
                        {phone && this.renderSidebar()}
                    </Col>
                </Row>         
            </Container>
        )
    }

}

const mapStateToProps = state => {
    return {
        // return teleohone
        phone: getPhoneById(state, state.phonePage.id)
    }
}

const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone) 