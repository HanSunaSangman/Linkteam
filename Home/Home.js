import React from 'react'
import { connect } from 'react-redux'
import { TextLinkteam } from '../Library/Component'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Dimensions, Image, Alert, BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'; 
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from "react-native-easy-grid";
import { homeStyle } from '../Style/Style'
import nav from '../stringnav.json'
import ex from '../Profile/ProfileExample.json'
import { AndroidBackHandler } from "react-navigation-backhandler";

import DefaultImg from '../profile_img.png'
import simple from '../simple.jpg'
import personal from './homeicon/1.png'
import time from './homeicon/2.png'
import benefit from './homeicon/3.png'
import evaluate from './homeicon/4.png'
import enagement from './homeicon/5.png'
import notification from './homeicon/6.png'
import payroll from './homeicon/7.png'
import recruit from './homeicon/8.png'
import training from './homeicon/9.png'

let deviceWidth = Dimensions.get('window').width
if (deviceWidth >= 414){
    //iPhone with notch
    barHeight = 160
}else{
    //iPhone without notch
    barHeight = 130
}

const mapStateToProps = (state) => ({
    lang: state.language.home,
    code: state.languagecode
})

class Imageview extends React.Component{
    render(){
        return(
            <View>
                <Image source={this.props.image}
                 style={{width: deviceWidth,height: '100%', resizeMode: 'cover'}}/>
            </View>
        )
    }
}

class Home extends React.Component {

    constructor(props){
        super(props)
    }

    

    backAction = () => {
        Alert.alert(this.props.lang.quit, this.props.lang.quit_message, [
          {
            text: this.props.lang.quit_cancel,
            onPress: () => null,
            style: "cancel"
          },
          { text: this.props.lang.quit_ok, onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };


    render(){
        return (
            <AndroidBackHandler onBackPress={this.backAction}>
                <TopHeader 
                hello={this.props.lang.hello}
                first_name={this.props.code === "TH" ? ex.first_name_th : ex.first_name}
                navigation={this.props.navigation}/>
                <ScrollView>
                    <SafeAreaView>
                    <Swiper 
                    loop={false}
                    showsPagination={true}
                    style={{height: 200}}>
                        <Imageview name="ABC" image={simple}/>
                        <Imageview name="DEF" image={simple}/>
                        <Imageview name="GHI" image={simple}/>
                    </Swiper>
                    <View style={homeStyle.container}>
                        <View style={homeStyle.menuView}>
                            <Grid>
                                <Row>
                                    <Col>
                                        <MenuItem name={this.props.lang.personal} 
                                        icon={personal}
                                        onPress={()=>this.props.navigation.navigate(nav.profile)}/>
                                    </Col>
                                    <Col>
                                        <MenuItem name={this.props.lang.time}
                                        icon={time}
                                        onPress={()=>this.props.navigation.navigate(nav.time)}/>
                                    </Col>
                                    <Col>
                                        <MenuItem name={this.props.lang.benefit}
                                        icon={benefit}
                                        onPress={()=>this.props.navigation.navigate(nav.benefit)}/>
                                    </Col>
                                </Row>
                                
                                {/* Phrase 2 */}
                                {/* <Row>
                                    <Col>
                                        <MenuItem name={this.props.lang.evaluate}
                                        icon={evaluate}/>
                                    </Col>
                                    <Col>
                                        <MenuItem name={this.props.lang.engagement}
                                        icon={enagement}/>
                                    </Col>
                                    <Col>
                                        <MenuItem name={this.props.lang.notification}
                                        icon={notification}/>
                                    </Col>
                                </Row> */}
                                {/* Phrase 3 */}
                                {/* <Row>
                                    <Col>
                                        <MenuItem name={this.props.lang.payroll}
                                        icon={payroll}/>
                                    </Col>
                                    <Col>
                                        <MenuItem name={this.props.lang.recruitment}
                                        icon={recruit}/>
                                    </Col>
                                    <Col>
                                        <MenuItem name={this.props.lang.training}
                                        icon={training}/>
                                    </Col>
                                </Row> */}

                            </Grid>
                            
                        </View>
                    </View>
                    </SafeAreaView>
                </ScrollView>
            </AndroidBackHandler>
        )
    }
}

export default connect(mapStateToProps)(Home)

class MenuItem extends React.Component{

    render(){
        return(
            <>
                <TouchableOpacity style={homeStyle.menuItem} onPress={this.props.onPress}>
                    <Image source={this.props.icon} style={homeStyle.menuItemIcon}/>
                    <TextLinkteam style={homeStyle.menuItemText}>{this.props.name}</TextLinkteam>
                </TouchableOpacity>
            </>
        )
    }
}

class TopHeader extends React.Component{

    render(){
        return(
            <>
                <LinearGradient colors={['#00c5ff', '#00a0ff']}>
                    <SafeAreaView>
                        <View style={[homeStyle.topbarContainer, {flexDirection: 'row'}]}>
                            <View>
                                <Image source={DefaultImg} style={homeStyle.profileImg}/>
                                <TouchableOpacity style={homeStyle.profileButton} color="black">
                                    <Icon name="pencil" size={15} color="#004dff"/>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={[homeStyle.topbarGroup, {flex: 2}]}>
                                <TextLinkteam style={homeStyle.topbarText}>{this.props.hello}</TextLinkteam>
                                <TextLinkteam style={[homeStyle.topbarName]} numberOfLines={1}>{this.props.first_name}</TextLinkteam>
                            </View>
                            
                            <View style={[homeStyle.topbarButtonGroup, {flex: 1}]}>
                                <TouchableOpacity style={homeStyle.topbarButton}>
                                    <Icon name="bell" size={20} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={homeStyle.topbarButton} 
                                onPress={()=>this.props.navigation.navigate(nav.settings)}>
                                    <Icon name="cog" size={20} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </>
        )
    }
}