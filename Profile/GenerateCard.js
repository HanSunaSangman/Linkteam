import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity,
     StatusBar, Image, PermissionsAndroid,
     Platform } from 'react-native'
import ViewShot from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import Icon from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation';
import { TextLinkteam, Loading } from '../Library/Component'
import wtclogo from '../wtc_logo.png'
import cardbg from './card-bg.png'
import Snackbar from 'react-native-snackbar';

const mapStateToProps = (state) => ({
    lang: state.language.profile.card
})

const style = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    },

    cardbg: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 109,
        height: 300,
    },

    card:{
        padding: 23,
        backgroundColor: '#fff',
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        height: 310,
        width: 470
    },

    logo:{
        width: 150,
        height: 80,
        resizeMode: 'contain',
        position: 'absolute',
        right: 10,
        top: 10
    },

    rightCard:{
        flex: 1,
        marginLeft: 15
    },

    cardTitle:{
        fontSize: 30,
        lineHeight: 32,
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal'
    },

    cardDetail:{
        fontSize: 23,
        lineHeight: 25,
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500': 'normal'
    },

    cardTel:{
        fontSize: 28,
        lineHeight: 30,
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Blk',
        fontWeight: Platform.OS === 'ios' ? '800': 'normal'
    },

    dot:{
        width: 8,
        height: 8,
        marginRight: 37,
        borderRadius: 100
    },

    rightContainer:{
        marginLeft: 10
    },

    bottomAddress:{
        fontSize: 12
    },

    bottomDetail: {
        fontSize: 12,
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Blk',
        fontWeight: Platform.OS === 'ios' ? '800' : 'normal'
    },

    buttonControl:{
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: 80,
        flexDirection: 'row'
    },

    textControl:{
        color: '#fff',
        marginLeft: 10
    }

})

class GenerateCard extends React.Component {

    constructor(props){
        super(props)
        this.capRef = React.createRef()
        const { profile } = this.props.route.params
        this.state = { isLoading: false, profile: profile }
    }

    snapshotCard(){
        this.setState({isLoading: true})
        this.capRef.current.capture().then(uri => {
          this.savePicture(uri);
        });
    }

    async hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }
      
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }

    async savePicture(uri) {
        console.log('save image')
        if (Platform.OS === "android" && !(await this.hasAndroidPermission())) {
            this.setState({isLoading: false})
          return;
        }
      
        CameraRoll.save(uri)

        Snackbar.show({
            text: this.props.lang.success,
            duration: Snackbar.LENGTH_SHORT,
        })

        this.setState({isLoading: false})
    };

    fetchProfile(){
        /* TODO : fetch API */
    }

    componentDidMount(){
        Orientation.lockToLandscape()
        this.fetchProfile()
    }

    componentWillUnmount(){
        Orientation.lockToPortrait()
    }

    render(){
        const { isLoading, profile } = this.state
        const company = "WTC COMPUTER CO., LTD"
        const address_en = "128/343-344 Phayathai Plaza 31st Fl., Phatathai Rd. Thungphatathai, Ratchathewi, Bangkok, 10400"
        const address_th = "128/343-344 อาคารพญาไทพลาซ่า ชั้น 31 ถนนพญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพฯ 10400"
        const tel = "+662-612-1188 (ext." + profile.desk + ")"
        const web = "www.wtc.co.th"
        const lineas = "@WTCComputer"
        const taxid = "0105535003874"

        return(
            <View style={style.container}>
                {isLoading ? <Loading/>: null}
                <StatusBar barStyle="light-content" backgroundColor="gray"/>
                <ViewShot ref={this.capRef} options={{ format: "png", quality: 0.9 }}>
                    <View style={style.card}>
                        <Image source={cardbg} style={style.cardbg}/>
                        <Image source={wtclogo} style={style.logo}/>
                        <TextLinkteam style={[style.cardTitle, {color: '#327bc4'}]}>
                            {profile.first_name_th} {profile.last_name_th} ({profile.nickname})
                        </TextLinkteam>
                        <TextLinkteam style={style.cardTitle}>{profile.first_name} {profile.last_name}</TextLinkteam>
                        <TextLinkteam style={[style.cardDetail, {color: '#327bc4'}]}>{profile.position}</TextLinkteam>
                        <TextLinkteam style={[style.cardTel]}>{profile.mobile}</TextLinkteam>
                        <TextLinkteam style={[style.cardDetail, {color: '#327bc4'}]}>{profile.e_mail}</TextLinkteam>
                        <View style={{flexDirection: 'row',marginLeft:10, marginTop: 20, marginBottom: 20}}>
                            <View style={[style.dot, {backgroundColor: "#ff5200"}]}/>
                            <View style={[style.dot, {backgroundColor: "#00a44a"}]}/>
                            <View style={[style.dot, {backgroundColor: "#e80000"}]}/>
                        </View>
                        <TextLinkteam style={[style.cardDetail, {color: '#327bc4'}]}>{company}</TextLinkteam>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <TextLinkteam style={style.bottomAddress}>{address_th}</TextLinkteam>
                                <TextLinkteam style={style.bottomAddress}>{address_en}</TextLinkteam>
                            </View>
                            <View style={{flex: 1, paddingLeft: 30}}>
                                <TextLinkteam style={style.bottomAddress}>Tel. {tel}</TextLinkteam>
                                <TextLinkteam style={style.bottomDetail}>{web}</TextLinkteam>
                                <TextLinkteam style={style.bottomDetail}>Line@: {lineas}</TextLinkteam>
                                <TextLinkteam style={style.bottomDetail}>TAX ID: {taxid}</TextLinkteam>
                            </View>
                        </View>
                        
                    </View>
                </ViewShot>
                <View style={style.rightContainer}>
                    <ControlButton text={this.props.lang.save} icon={"save"} onPress={()=>this.snapshotCard()}/>
                    <ControlButton text={this.props.lang.close} icon={"times"} onPress={()=>this.props.navigation.goBack()}/>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps)(GenerateCard)

class ControlButton extends React.Component{
    render(){
        return(
            <TouchableOpacity style={style.buttonControl} onPress={this.props.onPress}>
                <Icon name={this.props.icon} size={20} color="#fff" />
                <TextLinkteam style={style.textControl}>{this.props.text}</TextLinkteam>
            </TouchableOpacity>
        )
    }
}