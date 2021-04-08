import * as R from 'ramda'
import {ADD_PHONE_TO_BASKET} from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_BASKET:
            //получ айди запушить в массив
            return R.append(payload, state) // вернет новый массив с новым айдишником
        default:
            return state
    }
}