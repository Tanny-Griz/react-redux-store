import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import {compose} from 'redux'
import classNames from 'classnames'
import * as R from 'ramda'

import {
    getCategories,
    getActiveCategoryId
} from '../../selectors'

const Categories = ({categories, activeCategoryId}) => {
    // console.log(categories);
    const getActiveState = R.propEq('id', activeCategoryId)

    const renderCategory = (category, index) => {
        // метод с классами
        const linkClass = classNames({
            'list-group-item': true,
            'active': getActiveState(category)
        })
        return (
            <Link
                to={`/categories/${category.id}`}
                className={linkClass}
                key={index}
            >
                {category.name}
            </Link>
        )
    }

    const renderAllCategory = () => {
        const linkClass = classNames({
            'list-group-item': true,
            'active': R.isNil(activeCategoryId) // return true if activeCategoryId == null || undef
        })

        return (
            <Link to={`/`} className={linkClass}>All</Link>
        )
    }
    return (
        <div className='holder-brand'>
            <h4>Brand</h4>
            {renderAllCategory()}
            <div>{categories.map((category, index) => renderCategory(category, index))}</div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
})

export default compose( // обернуть компонент в несколько вещей
    withRouter,
    connect(mapStateToProps, null)
)(Categories)