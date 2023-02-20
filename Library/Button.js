import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { TextLinkteam } from './Text'
import LinearGradient from 'react-native-linear-gradient'; 

const style = StyleSheet.create({
    buttonStyle: {
        borderRadius: 100,
        padding: 3,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 28
    }

})

class ButtonRed extends React.Component{
    render(){
        return(
            <TouchableOpacity disabled={this.props.disabled}
             style={[this.props.style]}
             onPress={this.props.onPress}
             activeOpacity={0.8}>
                <LinearGradient colors={!this.props.disabled ? ['#FC6767', '#EC398C']: ['#757575', '#757575']} style={style.buttonStyle}>
                    <TextLinkteam style={[style.buttonText]}>{this.props.text}</TextLinkteam>
                </LinearGradient>
                
            </TouchableOpacity>
        )
    }
}

class ButtonGray extends React.Component{
    render(){
        return(
            <TouchableOpacity style={[this.props.style]} onPress={this.props.onPress}>
                <LinearGradient colors={['#FC6767', '#EC398C']} style={style.buttonStyle}>
                    <TextLinkteam style={style.buttonText}>{this.props.text}</TextLinkteam>
                </LinearGradient>
                
            </TouchableOpacity>
        )
    }
}

class ButtonLink extends React.Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <TextLinkteam style={{color: this.props.color}}>{this.props.text}</TextLinkteam>
            </TouchableOpacity>
        )
    }
}

export { ButtonRed, ButtonGray, ButtonLink }
