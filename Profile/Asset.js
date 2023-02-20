import React from 'react'
import {View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import {TextLinkteam, ButtonRed} from '../Library/Component'
import {assetStyle} from '../Style/Style'
import { connect } from 'react-redux'
import ex from './AssetExample.json'
import nav from '../stringnav.json'

const mapStateToProps = (state) => ({
    lang: state.language.profile
})

class Asset extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: ex
        }
    }

    render(){
        const {data} = this.state
        return (
            <>
            <ScrollView>
                <SafeAreaView>
                    <View style={assetStyle.container}>
                {data.map((item, key)=> 
                    <TouchableOpacity key={key} onPress={()=>this.props.navigation.navigate(nav.profileNav.assetdetail, {detail: item})}>
                        <View style={assetStyle.assetItem}>
                            <TextLinkteam style={assetStyle.assetTitle} numberOfLines={1}>{item.model}</TextLinkteam>
                            <TextLinkteam style={assetStyle.assetDetail}>{this.props.lang.serial} : {item.serial}</TextLinkteam>
                            <TextLinkteam style={assetStyle.assetDetail}>{this.props.lang.borrow_date}: {item.borrow_date}</TextLinkteam>
                        </View>
                    </TouchableOpacity>
                )}
                    </View>
                </SafeAreaView>
            </ScrollView>
            <View style={assetStyle.bottomView}>
                <ButtonRed
                 text={this.props.lang.redeem} 
                 style={{width: 150}}
                 onPress={()=>this.props.navigation.navigate(nav.profileNav.addassert)}/>
            </View>
            </>
        )
    }
}

export default connect(mapStateToProps)(Asset)