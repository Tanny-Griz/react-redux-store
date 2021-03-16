import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import {connect} from 'react-redux'

import {fetchPhones} from '../../actions'

// const Phones = () => (
//     <>
//         Routes
//     </>
// )
// фетчим все данные из компонента стейтлес
class Phones extends Component {
    // компонент монтируется в дом
    componentDidMount() {
        // это наш экшин
        this.props.fetchPhones()
    }
    render() {
        return (
            <>Phones</>
        )
    }
}

const mapDispatchToProps = {
    // fetchPhones через connect попадет в this.props
    fetchPhones
}

export default connect(null, mapDispatchToProps)(Phones)