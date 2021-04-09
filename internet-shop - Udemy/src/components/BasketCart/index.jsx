import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux' // using state

import {
    getTotalBasketCount,
    getTotalBasketPrice
} from '../../selectors'


const BasketCart = ({totalBasketCount, totalPrice}) => {
    return (
        <div className='holder-cart'>
            <Link to='/basket'
                className='btn btn-info'
                >
                    <i className='fa fa-fa-shoping-cart'></i>
                <span>{totalBasketCount} item(s) - ${totalPrice} </span>   
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalBasketCount: getTotalBasketCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
}

export default connect(mapStateToProps, null)(BasketCart)