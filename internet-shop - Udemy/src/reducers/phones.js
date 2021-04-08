import * as R from 'ramda'
import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    FETCH_PHONE_BY_ID_SUCCESS
} from '../actionTypes'

const initialState = {}

// в этом Reducer храним все телефоны
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            // merge два обьекта и перетирает ключи если они там уже есть
            // 1 param - state, 2 param - newValues
            return R.merge(state, newValues)
        case LOAD_MORE_PHONES_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)
        case FETCH_PHONE_BY_ID_SUCCESS: 
        // хотим перезапис проперти в обьекте с телефонами и айди тел должен быть ключем
        //                  ключ       значение  обьект
            return R.assoc(payload.id, payload, state)
        default:
            return state    
    }
}