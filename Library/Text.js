import React from 'react'
import {Text, StyleSheet, Platform} from 'react-native'

const style = StyleSheet.create({
    text:{
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 23
    }
})

class TextLinkteam extends React.Component{
    render(){
        return (
            <Text style={[style.text, this.props.style]} numberOfLines={this.props.numberOfLines}>
                {this.props.children}
            </Text>
        )
    }
}

export { TextLinkteam }