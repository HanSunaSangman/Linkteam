import React from 'react'
import { connect } from 'react-redux'
import { TextLinkteam, ButtonRed } from '../Library/Component'
import { View, SafeAreaView, Image, } from 'react-native'
import { profileStyle ,profileHeader } from '../Style/Style'
import nav from '../stringnav.json'
import ex from './ProfileExample.json'
import LinearGradient from 'react-native-linear-gradient'

import defaultImg from '../profile_img.png'
import { ScrollView } from 'react-native-gesture-handler'

import mobile from './Icon/mobile.png'
import mail from './Icon/mail.png'
import line from './Icon/line.png'
import office from './Icon/office.png'
import star from './Icon/star.png'
import location from './Icon/location.png'
import phone from './Icon/phone.png'
import globe from './Icon/globe.png'
import tax from './Icon/tax.png'

const mapStateToProps = (state) => ({
    lang: state.language.profile
})

class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = { profile: ex }
    }

    render(){
        const { profile } = this.state
        const address = "128/343-344 Phayathai Plaza 31st Fl., Phatathai Rd. Thungphatathai, Ratchathewi, Bangkok, 10400"
        const tel = "+662-612-1188 (ext."+ profile.desk +")"
        const web = "www.wtc.co.th"
        const lineas = "@WTCComputer"
        const taxid = "0105535003874"

        return (
            <ScrollView>
                <TopSection
                firstname = {profile.first_name}
                lastname = {profile.last_name}
                profile = {profile}
                share = {this.props.lang.share}
                navigation={this.props.navigation}/>
                <View style={{marginTop: 23}}>
                    <View style={profileStyle.container}>
                        <Title text={this.props.lang.contact}/>
                        <Detail icon={mobile} title={this.props.lang.mobile} detail={profile.mobile}/>
                        <Detail icon={mail} title={this.props.lang.mail} detail={profile.e_mail}/>
                        <Detail icon={line} title={this.props.lang.line} detail={profile.line}/>
                        
                        <Title text={this.props.lang.information}/>
                        <Detail icon={office} title={this.props.lang.companyname} detail={profile.company_name}/>
                        <Detail icon={star} title={this.props.lang.position} detail={profile.position}/>
                        <Detail icon={location} detail={address}/>
        
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(Profile)

class TopSection extends React.Component{
    render(){
        return(
            <>
            <View style={profileHeader.container}>
                <LinearGradient colors={['#00c5ff', '#00a0ff']} style={{flex: 1}}>
                    <SafeAreaView>
                        <View style={profileHeader.headerView}>
                            <Image style={profileHeader.profileImage} source={defaultImg}/>
                            <TextLinkteam style={profileHeader.profileName}>{this.props.firstname} {this.props.lastname}</TextLinkteam>
                        </View>
                        
                    </SafeAreaView>
                </LinearGradient>
                <View style={profileHeader.midContainer}>
                    <ButtonRed 
                        text={this.props.share}
                        style={{width: 210}}
                        onPress={()=>this.props.navigation.navigate(nav.card, {profile: this.props.profile})}/>
                </View>
                
            </View>
            </>
        )
    }
}

class Title extends React.Component{
    render(){
        return(
            <TextLinkteam style={profileStyle.titleText}>{this.props.text}</TextLinkteam>
        )
    }
}

class Detail extends React.Component{
    render(){
        return(
            <View style={profileStyle.group}>
                <Image source={this.props.icon} style={profileStyle.icon}/>
                <TextLinkteam style={[profileStyle.headText, {display: this.props.title ? 'flex': 'none'}]}>{this.props.title} : </TextLinkteam>
                <TextLinkteam style={profileStyle.detailText}>{this.props.detail}</TextLinkteam>
            </View>
        )
    }
}