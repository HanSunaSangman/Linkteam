import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import { addAssetStyle } from '../Style/Style'
import { TextLinkteam, ButtonRed } from '../Library/Component'

const mapStateToProps = (state) => ({
    lang: state.language.profile.addAsset
})

class ConfirmAsset extends React.Component {

    constructor(props){
        super(props)
        const { brand, model, quantity, objective, reason, mark } = this.props.route.params
        this.state = { 
            brand: brand,
            model: model,
            quantity: quantity,
            objective: objective,
            reason: reason,
            mark: mark
        }
    }

    render(){
        const { brand, model, quantity, objective, reason, mark } = this.state
        return (
            <ScrollView>
                <View style={addAssetStyle.container}>
                    <TextLinkteam style={addAssetStyle.title}>{this.props.lang.confirm}</TextLinkteam>
                    <TextLinkteam style={addAssetStyle.detail}>{this.props.lang.brand} : {brand}</TextLinkteam>
                    <TextLinkteam style={addAssetStyle.detail}>{this.props.lang.model} : {model}</TextLinkteam>
                    <TextLinkteam style={addAssetStyle.detail}>{this.props.lang.quantity} : {quantity}</TextLinkteam>
                    <TextLinkteam style={addAssetStyle.detail}>{this.props.lang.objective} : {objective}</TextLinkteam>
                    <TextLinkteam>{this.props.lang.reason} : </TextLinkteam>
                    <TextLinkteam style={addAssetStyle.detail}>{reason}</TextLinkteam>
                    <TextLinkteam>{this.props.lang.mark} : </TextLinkteam>
                    <TextLinkteam style={[addAssetStyle.detail, mark !== '' ? null : addAssetStyle.noDetail]}>
                        {mark !== '' ? mark : this.props.lang.nodetail}
                    </TextLinkteam>
                    
                    <View style={addAssetStyle.bottomView}>
                        <TextLinkteam>{this.props.lang.confirm_description}</TextLinkteam>
                        <ButtonRed
                        style={addAssetStyle.button}
                        text={this.props.lang.confirm_btn}/>
                    </View>
                    
                </View>
                
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(ConfirmAsset)
