import React from 'react'
import { Alert } from 'react-native'
import { settingsStyle } from '../Style/Style'
import SettingsList from 'react-native-settings-list'
import { connect } from 'react-redux'
import nav from '../stringnav.json'

const mapStateToProps = (state) => ({
    lang: state.language.settings
})

class Settings extends React.Component {

    constructor(props){
        super(props)
    }

    onLogout(){
        Alert.alert(
            this.props.lang.logout,
            this.props.lang.logout_description,
            [
              {
                text: this.props.lang.cancel,
                onPress: () => {},
                style: "cancel"
              },
              { text: this.props.lang.logout, onPress: () => this.props.navigation.popToTop() }
            ],
            { cancelable: false }
          );
    }

    render(){
        return (
            <>
                <SettingsList borderColor='#c8c7cc'>
                    <SettingsList.Header headerStyle={{marginTop:15}}/>
                    <SettingsList.Item title={this.props.lang.language}
                     titleStyle={settingsStyle.settingTitle}
                     underlayColor={"gray"}
                     onPress={()=>{this.props.navigation.navigate(nav.settings_language)}}/>
                    <SettingsList.Item title={this.props.lang.term}
                     titleStyle={settingsStyle.settingTitle}
                     underlayColor={"gray"}
                     onPress={()=> this.props.navigation.navigate(nav.term)}/>
                    <SettingsList.Header headerStyle={{marginTop:15}}/>
                    
                    <SettingsList.Item title={this.props.lang.logout}
                     titleStyle={settingsStyle.settingTitle}
                     underlayColor={"gray"}
                     onPress={()=> this.onLogout()}/>
                </SettingsList>
            </>
        )
    }
}

export default connect(mapStateToProps)(Settings)