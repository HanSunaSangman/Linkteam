import React from 'react'
import { connect } from 'react-redux'
import {Image, Platform, View, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Profile'
import CompanyProfile from './CompanyProfile'
import DocumentRequest from './DocumentRequest'
import Asset from './Asset'

import profile from './profile-icon/1.png'
import icon1 from './profile-icon/LinkTeam_App-10.png'
import icon2 from './profile-icon/LinkTeam_App-11.png'
import icon3 from './profile-icon/LinkTeam_App-12.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeStyle } from '../Style/Style'
import nav from '../stringnav.json'

const Tab = createBottomTabNavigator()

const mapStateToProps = (state) => ({
    lang: state.language.profile
})

class ProfileNav extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.navigation.setOptions({
             headerRight: () => <RightNav navigate={this.props.navigation.navigate}/> 
        })
    }
    
    render(){
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        
                    if (route.name === nav.profile) {
                        iconName = profile
                    } else if (route.name === nav.profileNav.history) {
                        iconName = icon1
                    }else if (route.name === nav.profileNav.companyprofile){
                        iconName = icon2
                    }else if (route.name === nav.profileNav.doc){
                        iconName = icon3
                    }

                    // You can return any component that you like here!
                    return <Image source={iconName} tintColor={color} style={{width: size, height: size, tintColor: color}}/>;
                },
                })} 
                tabBarOptions={{activeTintColor: '#00c5ff', 
                labelStyle:{fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X", fontSize: 16}}}>

                <Tab.Screen name={nav.profile} 
                component={Profile} 
                options={{title: this.props.lang.profile}}
                listeners={(route) => setHeaderTitle(this.props.navigation, this.props.lang.profile)}/>
                <Tab.Screen 
                name={nav.profileNav.history} 
                component={Asset} 
                options={{title: this.props.lang.asset}}
                listeners={(route) => setHeaderTitle(this.props.navigation, this.props.lang.asset)}/>
                <Tab.Screen 
                name={nav.profileNav.companyprofile} 
                component={CompanyProfile} 
                options={{title: this.props.lang.companyprofile}}
                listeners={(route) => setHeaderTitle(this.props.navigation, this.props.lang.companyprofile)}/>
                <Tab.Screen 
                name={nav.profileNav.doc} 
                component={DocumentRequest} 
                options={{title: this.props.lang.certificate}}
                listeners={(route) => setHeaderTitle(this.props.navigation, this.props.lang.certificate)}/>
            </Tab.Navigator>
        )
    }
}

export default connect(mapStateToProps)(ProfileNav)

function setHeaderTitle(navigation, newName){
    navigation.setOptions({title: newName});
}

class RightNav extends React.Component{
    render(){
      return(
        <View style={{flexDirection: 'row', paddingRight: 13}}>
          <TouchableOpacity style={homeStyle.topbarButton}>
              <Icon name="bell" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyle.topbarButton} onPress={()=>this.props.navigate(nav.settings)}>
              <Icon name="cog" size={20} color="#fff"/>
          </TouchableOpacity>
        </View>
      )
    }
  }