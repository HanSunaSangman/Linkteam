import { languageReducer, currentLanguage } from './Language/languageReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    language: languageReducer,
    languagecode: currentLanguage
})

export default allReducers