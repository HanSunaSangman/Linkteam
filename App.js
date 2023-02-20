import React from 'react'
import { StatusBar, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { languageChange } from './Language/languageReducer'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import nav from './stringnav.json'

import Login from './Auth/Login'
import ForgotPassword from './Auth/ForgotPassword'
import Home from './Home/Home';
import ProfileNav from './Profile/ProfileNav'
import AssetDetail from './Profile/AssetDetail'
import GenerateCard from './Profile/GenerateCard'
import AddAsset from './Profile/AddAsset'
import ConfirmAsset from './Profile/ConfirmAsset'
import StaffContact from './Profile/StaffContact'
import Announcement from './Profile/Announcement'
import TimeAttendanceNav from './TimeAttendance/TimeAttendanceNav'
import VacationDetail from './TimeAttendance/VacationDetail'
import LeaveRequest from './TimeAttendance/VacationRequest'
import Benefit from './Benefit/Benefit'
import Orientation from 'react-native-orientation';
import Settings from './Settings/Settings'
import Language from './Settings/Language'
import PDFView from './Profile/PDFViewer'
import TermandCondition from './Settings/TermandCondition'
import { connect } from 'react-redux';

const Stack = createStackNavigator();

const myTheme = {
  ...DefaultTheme, colors:{
    ...DefaultTheme.colors,
    background: 'white'
  }
};

const mapStateToProps = (state) => ({
  lang: state.language
})

const mapDispatchToProps = dispatch => {
  return {
      changeLang: (lang) => { dispatch(languageChange(lang)) }
  }
}

class App extends React.Component {

  componentDidMount(){
    this.getData()
    Orientation.lockToPortrait();
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@language')
      if(value !== null) {
        this.props.changeLang(value)
      }
    } catch(e) {
      console.log(e)
    }
  }

  render(){
    return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#00c5ff"/>
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator initialRouteName="home" 
        screenOptions={{headerTitleStyle: {fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X", fontSize: 26},
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#00c5ff', elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0},}}>
          <Stack.Screen name={nav.login} component={Login} options={{headerShown: false}}/>
          <Stack.Screen name={nav.forgot} component={ForgotPassword}/>
          <Stack.Screen name={nav.home} component={Home} options={{headerShown: false, gestureEnabled: false}}/>
          <Stack.Screen name={nav.profile} component={ProfileNav}/>
          <Stack.Screen name={nav.profileNav.assetdetail} component={AssetDetail} options={{title: this.props.lang.profile.asset_detail}}/>
          <Stack.Screen name={nav.profileNav.addassert} component={AddAsset} options={{title: this.props.lang.profile.redeem}}/>
          <Stack.Screen name={nav.profileNav.confirmasset} component={ConfirmAsset} options={{title: this.props.lang.profile.addAsset.confirm}}/>
          <Stack.Screen name={nav.staffcontact} component={StaffContact} options={{title: this.props.lang.profile.companyProfile.staffcontact}}/>
          <Stack.Screen name={nav.announcement} component={Announcement} options={{title: this.props.lang.profile.companyProfile.announce}}/>
          <Stack.Screen name={nav.PDFView} component={PDFView}/>
          <Stack.Screen name={nav.time} component={TimeAttendanceNav}/>
          <Stack.Screen name={nav.history_vacation_detail} component={VacationDetail} options={{title: this.props.lang.timeAttendance.vacation_detail}}/>
          <Stack.Screen name={nav.leave_request} component={LeaveRequest} options={{title: this.props.lang.holiday.leave_request}}/>
          <Stack.Screen name={nav.benefit} component={Benefit} options={{title: this.props.lang.benefit.benefit}}/>
          <Stack.Screen name={nav.card} component={GenerateCard} options={{headerShown: false}}/>
          <Stack.Screen name={nav.settings} component={Settings} options={{title: this.props.lang.settings.settings}}/>
          <Stack.Screen name={nav.settings_language} component={Language} options={{title: this.props.lang.settings.language}}/>
          <Stack.Screen name={nav.term} component={TermandCondition} options={{title: this.props.lang.settings.term}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)