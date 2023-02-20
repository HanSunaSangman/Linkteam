import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    loading:{
        position: 'absolute',
        zIndex: 1
    }
})

export default class Loading extends React.Component {

    render(){
        return (
            <View style={[style.loading, this.props.style]}>
                <ActivityIndicator size="large" color="#00a0ff"/>
            </View>
        )
    }
}
