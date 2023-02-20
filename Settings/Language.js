import React from 'react'
import { View } from 'react-native'
import { settingsStyle } from '../Style/Style'
import { languageChange } from '../Language/languageReducer'
import SettingsList from 'react-native-settings-list'
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-community/async-storage';

const en = "EN"
const th = "TH"

const mapStateToProps = (state) => ({
    lang: state.language.settings,
    code: state.languagecode
})

const storeData = async (lang) => {
    try {
        await AsyncStorage.setItem('@language', lang)
    } catch (e) {
        console.log(e)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLang: (lang) => { dispatch(languageChange(lang)) }
    }
}

class Language extends React.Component {

    constructor(props){
        super(props)
        this.state = {lang: this.props.code}
        
    }

    setLang(lang){
        this.setState({lang: lang})
        this.props.changeLang(lang)
        storeData(lang)
        Snackbar.show({
            text: this.props.lang.change_success,
            duration: Snackbar.LENGTH_SHORT,
        })
    }

    render(){
        const { lang } = this.state
        return (
            <>
                <SettingsList borderColor='#c8c7cc'>
                    <SettingsList.Header headerText={this.props.lang.language_description} headerStyle={settingsStyle.header}/>
                    <SettingsList.Item title={"English"}
                     titleStyle={settingsStyle.settingTitle}
                     hasNavArrow={false}
                     arrowIcon={lang === en ? <Checkmark/> : null}
                     underlayColor={"gray"}
                     onPress={()=>{this.setLang(en)}}
                     />
                    <SettingsList.Item title={"ไทย"}
                     titleStyle={settingsStyle.settingTitle}
                     hasNavArrow={false}
                     arrowIcon={lang === th ? <Checkmark/> : null}
                     underlayColor={"gray"}
                     onPress={()=>{this.setLang(th)}}/>
                </SettingsList>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language)

class Checkmark extends React.Component{
    render(){
        return(
            <View style={{marginRight: 8, padding: 8}}>
                <Icon name={"check"} size={30} color={"#00C4FF"}/>
            </View>
        )
    }
}