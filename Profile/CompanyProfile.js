import React from 'react'
import {Text, View, Image, ScrollView} from 'react-native'
import { companyProfileStyle } from '../Style/Style'
import { TextLinkteam, ButtonRed } from '../Library/Component'
import wtclogo from '../wtc_logo.png'
import nav from '../stringnav.json'

import web from './Icon/web.png'
import face from './Icon/facebook.png'
import assign from './Icon/assign.png'
import phone from './Icon/phone.png'
import mail from './Icon/mail.png'
import tax from './Icon/tax.png'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    lang: state.language.profile.companyProfile
})

class CompanyProfile extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <ScrollView>
                <View style={companyProfileStyle.container}>
                    <Image source={wtclogo} style={companyProfileStyle.logo}/>
                    <View style={companyProfileStyle.wordGroup}>
                        <TextLinkteam style={companyProfileStyle.wordGroup_inside}>
                            <Text style={companyProfileStyle.wordBold}>{this.props.lang.word1} </Text>
                            <Text>{this.props.lang.word2}{"\n"}{this.props.lang.word3}</Text>
                        </TextLinkteam>
                    </View>
                    <View style={companyProfileStyle.contactus}>
                        <TextLinkteam style={companyProfileStyle.contactusTitle}>{this.props.lang.contactus}</TextLinkteam>
                        <View style={companyProfileStyle.contactRow}>
                            <View style={companyProfileStyle.contactColumn}>
                                <GridItem icon={web} text={this.props.lang.webWtc}/>
                                <GridItem icon={assign} text={this.props.lang.asWtc}/>
                                <GridItem icon={mail} text={this.props.lang.sale}/>
                            </View>
                            <View style={companyProfileStyle.contactColumn}>
                                <GridItem icon={face} text={this.props.lang.faceWtc}/>
                                <GridItem icon={phone} text={this.props.lang.phoneWtc}/>
                                <GridItem icon={tax} text={this.props.lang.taxid}/>
                            </View>
                        </View>
                        <TextLinkteam style={companyProfileStyle.address}>
                            {this.props.lang.address}
                        </TextLinkteam>
                        <ButtonRed text={this.props.lang.staffcontact} 
                        style={companyProfileStyle.staffButton} 
                        onPress={()=>this.props.navigation.navigate(nav.staffcontact)}/>

                        <ButtonRed text={this.props.lang.announce} 
                        style={companyProfileStyle.staffButton} 
                        onPress={()=>this.props.navigation.navigate(nav.announcement)}/>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(CompanyProfile)

class GridItem extends React.Component{

    render(){
        return(
            <View style={companyProfileStyle.gridItem}>
                <Image style={{width: 25, height: 25}} source={this.props.icon}/>
                <TextLinkteam>{this.props.text}</TextLinkteam>
            </View>
        )
    }
}
