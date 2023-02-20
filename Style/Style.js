import { StyleSheet, Platform,Dimensions } from 'react-native'
import {homeStyle} from './AppStyle'
import {profileStyle,
    profileHeader,
    assetStyle,
    assetDetailStyle,
    addAssetStyle,
    companyProfileStyle,
    DocumentStyle, 
    staffContact, 
    AnnoucementStyle } from './ProfileStyle'
import { checkIn, holiday, leaveStyle, historyStyle, historyDetailStyle } from './TimeAttendanceStyle'
import { benefit } from './BenefitStyle'
import { settingsStyle } from './SettingsStyle'

let width = Dimensions.get('window').width;

const loginStyle = StyleSheet.create({

    container: {
        padding: 40,
        justifyContent: 'center'
    },

    headtitle: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 30
    },

    logo:{
        alignItems: 'center',
        marginBottom: 40,
    },

    logoImage:{
        width: 300,
        height: 100,
        resizeMode: 'contain'
    },

    logoText: {
        color: '#fff',
        letterSpacing: 3
    },

    loginField: {
        marginTop: 15
    },

    loginTitle: {
        color: '#ffffff',
        fontSize: 23,
    },

    loginInput: {
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        padding: 10,
        fontSize: 20,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        marginTop: 3
    },

    loginButton: {
        marginTop: 20
    },

    rightCheckboxText:{
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 23,
        color: '#fff'
    },
    
    checkboxContainer:{
        flexDirection: 'row',
        marginTop: 13
    },

    footer: {
        position: "absolute",
        bottom: 0,
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 15
    },

    footerText: {
        color: '#fff'
    },

    footerLogo:{
        width: 120,
        height: 100,
        resizeMode: 'contain'
    }
})

const textInputStyle = StyleSheet.create({
    textInput:{
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 23,
        color: "black",
        borderWidth: 1,
        borderColor: "#00C4FF",
        borderRadius: 10,
        padding: 8,
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
      fontSize: 23,
      color: "black",
      borderWidth: 1,
      borderColor: "#00C4FF",
      borderRadius: 10,
      padding: 8
    },
    inputAndroid: {
      fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
      fontSize: 23,
      color: "black",
      borderWidth: 1,
      borderColor: "#00C4FF",
      borderRadius: 10,
      padding: 8
    },
  });

export { loginStyle, 
    textInputStyle,
    pickerSelectStyles,
    homeStyle, 
    profileStyle, 
    profileHeader,
    assetStyle,
    addAssetStyle,
    assetDetailStyle,
    companyProfileStyle,
    staffContact,
    DocumentStyle,
    checkIn,
    holiday,
    leaveStyle,
    historyStyle,
    historyDetailStyle,
    benefit,
    settingsStyle,
    AnnoucementStyle }