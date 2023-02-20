import React from 'react'
import { connect } from 'react-redux'
import { TextLinkteam, ButtonRed, ButtonLink } from '../Library/Component'
import { View, TextInput, Platform, Image, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import CheckBox from 'react-native-check-box'
import LinearGradient from 'react-native-linear-gradient'; 
import { loginStyle } from '../Style/Style'
import nav from '../stringnav.json'
import linkTeamLogo from '../Logo-LinkTeam.png'
import lifeLinkLogo from '../Logo-Lifelink.png'

const mapStateToProps = (state) => ({
    lang: state.language.login
})

class Login extends React.Component {

    constructor(props){
        super(props)

        this.ref = {
            usernameRef : null,
            passwordRef : null
        }

        this.state = { 
            isRemember: false,
            user: ""
            
        }
    }

    setRemember(current){
        this.setState({isRemember: current ? false : true})
    }

    render(){
        const { isRemember, user } = this.state
        return (
            <LinearGradient colors={['#00C4FF', '#0072FF']} style={{flex: 1}}>
                <SafeAreaView style={{flex: 1}}>
                <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "padding"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
                style={{flexGrow: 1, flex: 1}}>
                    <View style={loginStyle.container}> 
                        
                        <View style={loginStyle.logo}>
                            {/* Logo */}
                            <Image source={linkTeamLogo} style={loginStyle.logoImage}/>
                            <TextLinkteam style={loginStyle.logoText}>{this.props.lang.logo}</TextLinkteam>
                        </View>
                        
                        <View style={loginStyle.loginField}>
                            <TextLinkteam style={loginStyle.loginTitle}>{this.props.lang.email}</TextLinkteam>
                            <TextInput 
                            style={loginStyle.loginInput}
                            clearButtonMode="while-editing"
                            textContentType={'username'}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            returnKeyType={"next"}
                            onChangeText={(text)=>{this.setState({user: text})}}
                            ref={(input)=>this.ref.usernameRef = input}
                            onSubmitEditing={() => { this.ref.passwordRef.focus(); }}
                            />
                        </View>

                        <View style={loginStyle.loginField}>
                            <TextLinkteam style={loginStyle.loginTitle}>{this.props.lang.password}</TextLinkteam>
                            <TextInput 
                            style={loginStyle.loginInput}
                            clearButtonMode="while-editing"
                            textContentType="password"
                            ref={(input) => this.ref.passwordRef = input}
                            secureTextEntry={true}
                            />
                        </View>

                        <View style={loginStyle.checkboxContainer}>
                            <CheckBox
                                style={{flex: 1}}
                                onClick={this.setRemember.bind(this, isRemember)}
                                isChecked={isRemember}
                                rightText={this.props.lang.remember}
                                checkBoxColor={"#fff"}
                                rightTextStyle={loginStyle.rightCheckboxText}
                            />
                            <ButtonLink 
                            text={this.props.lang.forgot} 
                            color={"#fff"}
                            onPress={()=>this.props.navigation.navigate(nav.forgot)}/>
                        </View>

                        <ButtonRed
                        style={loginStyle.loginButton}
                        onPress={()=>this.props.navigation.navigate(nav.home)} text={this.props.lang.login}/>
                        
                    </View>
                    <View style={loginStyle.footer}>
                        <TextLinkteam style={loginStyle.footerText}>Powered By </TextLinkteam>
                        <Image source={lifeLinkLogo} style={loginStyle.footerLogo}/>
                    </View>
                        
                </KeyboardAvoidingView>
                </SafeAreaView>
            </LinearGradient>
        )
    }
}

export default connect(mapStateToProps)(Login)