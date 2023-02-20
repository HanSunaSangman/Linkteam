import en from './en.json'
import th from './th.json'

const defaultState = en

function languageReducer(state = defaultState, action){
    switch(action.type){
        case "EN":
            return en
        case "TH":
            return th
        default:
            return state
    }
}

function currentLanguage(state = defaultState, action){
    switch(action.type){
        case "EN":
            return "EN"
        case "TH":
            return "TH"
        default:
            return "EN"
    }
}

const languageChange = (lang) => {
    return { type: lang }
}

export { languageReducer, languageChange, currentLanguage }