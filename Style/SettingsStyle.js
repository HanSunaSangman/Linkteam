import { StyleSheet, Platform } from 'react-native'

const settingsStyle = StyleSheet.create({
    settingTitle:{
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 20
    },

    header:{
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 20,
        marginTop:20,
        marginLeft: 15,
        marginRight: 15
    }
})

export { settingsStyle }