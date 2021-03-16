import * as R from 'ramda'
import {
    FETCH_PHONES_SUCCESS
} from '../store/actionTypes'

const initialState = {}

// в этом Reducer храним все телефоны
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            // merge два обьекта и перетирает ключи если они там уже есть
            // 1 param - state, 2 param - newValues
            return R.merge(state, newValues)
        default:
            return state    
    }
}