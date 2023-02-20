import React from 'react'
import { connect } from 'react-redux'
import { TextLinkteam, ButtonRed } from '../Library/Component'
import { View, ScrollView, Image } from 'react-native'
import { assetDetailStyle } from '../Style/Style'

import computer from './Icon/computer.png'
import equipment from './Icon/equipment.png'

const mapStateToProps = (state) => ({
    lang: state.language.profile
})

class AssetDetail extends React.Component{

    constructor(props){
        super(props)
        const { detail } = this.props.route.params
        this.state = { detail: detail }
    }

    render(){
        const { detail } = this.state
        return(
            <ScrollView>
                <View style={assetDetailStyle.container}>
                    <View style={{flexDirection: 'row'}}>
                        <TextLinkteam style={assetDetailStyle.title}>{detail.model}</TextLinkteam>
                        <Image source={detail.type === "Computer" ? computer : equipment} style={assetDetailStyle.icon}/>
                    </View>
                    
                    <View style={assetDetailStyle.detailContainer}>
                        <TextLinkteam style={assetDetailStyle.detail}>
                            {this.props.lang.borrow_date} : <TextLinkteam style={assetDetailStyle.date}>{detail.borrow_date}</TextLinkteam>
                        </TextLinkteam>
                        <TextLinkteam style={assetDetailStyle.detail}>
                            {this.props.lang.type} : {detail.type === "Computer" ? this.props.lang.computer : this.props.lang.equipment}
                        </TextLinkteam>
                        <TextLinkteam style={assetDetailStyle.detail}>{this.props.lang.addAsset.brand} : {detail.brand}</TextLinkteam>
                        <TextLinkteam style={assetDetailStyle.detail}>{this.props.lang.serial} : {detail.serial}</TextLinkteam>
                        <ButtonRed 
                        style={assetDetailStyle.button}
                        text={this.props.lang.return}/>
                    </View>
                    
                </View>
                
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(AssetDetail)