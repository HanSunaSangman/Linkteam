import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { AnnoucementStyle } from '../Style/Style'
import { TextLinkteam } from '../Library/Component'
import nav from '../stringnav.json'


class Announcement extends React.Component{
    render(){
        return(
            <ScrollView>
                <View style={AnnoucementStyle.container}>
                    <PDFItem navigation={this.props.navigation}/>
                    <PDFItem navigation={this.props.navigation}/>
                </View>
            </ScrollView>
        )
    }
}

export default Announcement

class PDFItem extends React.Component{
    render(){
        return(
            <TouchableOpacity style={AnnoucementStyle.pdfItem} onPress={()=>this.props.navigation.navigate(nav.PDFView)}>
                <TextLinkteam>PDF FILE NAME</TextLinkteam>
            </TouchableOpacity>
        )
    }
}