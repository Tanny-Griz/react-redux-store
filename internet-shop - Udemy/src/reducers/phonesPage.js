import * as R from 'ramda'
import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    SEARCH_PHONE
} from '../actionTypes'

const initialState = {
    // только id телефонов, которые зафетчили
    ids: [],
    search: ''
}

// в этом reducer только айдишники, что б по ним найти телеф из основного редьюсера
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload) // берем ключ и массив
            })
        case LOAD_MORE_PHONES_SUCCESS:
            const ids = R.pluck('id', payload)
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            })
        case SEARCH_PHONE:
            return R.merge(state, {
                search: payload
            })
        default:
            return state
    }
}