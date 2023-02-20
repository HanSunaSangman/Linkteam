import { StyleSheet, Platform } from 'react-native'

const homeStyle = StyleSheet.create({
    container: {
        padding: 8,
        paddingTop: 20
    },

    menuItem: {
        padding: 8,
        alignItems: 'center'
    },

    menuItemIcon:{
        width: 50,
        height: 50,
        marginBottom: 10
    },

    menuItemText:{
        textAlign: 'center',
        fontSize: 18,
        lineHeight:16,
    },

    topbarContainer: {
        paddingTop: 13,
        paddingLeft: 23,
        paddingRight: 23,
        paddingBottom: 20
    },

    profileImg: {
        width: 80,
        height: 80,
        marginRight: 20,
        borderRadius: 100,
    },

    profileButton: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: 25,
        height: 25,
        bottom: 0,
        right: 18,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    topbarButtonGroup:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    topbarGroup:{
        flex: 1,
        justifyContent:"center"
    },

    topbarText:{
        color: 'white',
        fontSize: 30,
    },

    topbarName:{
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        color: 'white',
        fontSize: 32,
        lineHeight: 35,
    },

    topbarButton: {
        padding: 8
    }
})

export { homeStyle }