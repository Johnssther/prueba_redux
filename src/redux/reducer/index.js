import { combineReducers } from 'redux'

//mis reducers
import contactos from './contactos.js'

const rootReducer = combineReducers({
    contactos,
})

export default rootReducer