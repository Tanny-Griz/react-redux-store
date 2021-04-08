import React, {Component} from 'react'
import {connect} from 'react-redux'

import {searchPhone} from '../../actions'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.searchPhone(this.state.value)
    }

    render () {
        return (
            <div>
                <h3>Quick shop</h3>
                <div className='input-group'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchPhone
}

export default connect(null, mapDispatchToProps)(Search)