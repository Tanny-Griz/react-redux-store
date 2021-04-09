import React from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import * as R from 'ramda'
import { Link } from 'react-router-dom'

import { 
    getTotalBasketPrice,
    getBasketPhonesWithCount
} from '../../selectors'
 import {
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket
} from '../../actions'


const Basket = ({
    phones, 
    totalPrice, 
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket
}) => {
    console.log(phones, totalPrice)
    const isBasketEmpty = R.isEmpty(phones)

    const renderSidebar = () => {
        return (
            <div className='holder-btns-cart'>
            <div>
                <Link to='/' className='btn btn-info'>
                    <span>&#8592; Continue shopping!</span>
                </Link>
            </div>
            <div>
                <button 
                    onClick={cleanBasket}
                    className='btn btn-danger'>
                    <span>&#10060; Clean cart</span>
                </button>
            </div>
            <div>
                <button 
                    onClick={() => basketCheckout(phones)}
                    className='btn btn-success'>
                    <span>&#10004; Checkout</span>
                </button> 
            </div>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <>
            {isBasketEmpty && <div>Empty</div>}
            <div className='table-responsive'>
                <table className='table-bordered table-striped table-condenset cf'>
                    <tbody>
                        {phones.map((phone, index) => (
                            <tr key={index}>
                                <td className='first-column-checkout'>
                                    <img className='img-thumbnail' src={phone.image} alt={phone.name}/>
                                </td>
                                <td>{phone.name}</td>
                                <td>${phone.price}</td>
                                <td>{phone.count}</td>
                                <td style={{cursor: 'pointer'}}><span
                                        onClick={() => removePhoneFromBasket(phone.id)}
                                    >X</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {R.not(isBasketEmpty) && 
                <div className='holder-total'><b>Total:</b> {totalPrice}</div>
            }
            </>
        )
    }


    return (
        <Container>
            <Row style={{padding: '30px 0'}}>
                <Col md="9" >
                    {renderContent()}
                </Col>
                <Col md="3" >
                    {renderSidebar()}
                </Col>
            </Row>         
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        phones: getBasketPhonesWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
}

const mapDispatchToProps =  {
    removePhoneFromBasket,
    basketCheckout,
    cleanBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)