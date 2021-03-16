import { combineReducers } from "redux"
import {connectRouter} from 'connected-react-router'

import phones from './phones'

// рутовый редьюсер
export default history => combineReducers({
    phones,
    router: connectRouter(history)
})