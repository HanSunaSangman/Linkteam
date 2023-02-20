import { StyleSheet, Platform, Dimensions } from 'react-native'

let width = Dimensions.get('window').width;

const checkIn = StyleSheet.create({
    detail_container:{
        padding: 23,
        alignItems: 'center'
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },

    checkButton:{
        width: 130
    },

    title:{
        color: 'gray',
        fontSize: 20
    },

    detail:{
        color: '#00c5ff',
        fontSize: 26
    },

    circle: {
        width: 16,
        height: 16,
        backgroundColor: '#FDC830',
        borderRadius: 100
    },

    line:{
        marginTop: 2,
        marginBottom: 2,
        width: 1,
        height: 56,
        flexDirection: 'column',
        marginLeft: 7
    },

    allHour:{
        marginTop: 26
    },

    hourHighlight:{
        color: '#EC398C',
        fontSize: 30
    },

    map: {
        height: 250,
    },

    currentLocation:{
        position: 'absolute',
        bottom: 13,
        right: 13,
        backgroundColor: 'white',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
})

const holiday = StyleSheet.create({
    container: {
        padding: 23,
    },

    title: {
        color: '#00C4FF',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 16
    },

    holidayItem:{
        padding: 13,
        borderColor: '#00C4FF',
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 13
    },

    itemDay:{
        fontSize: 23
    },

    itemDate:{
        fontSize: 20,
        color: 'gray'
    },

    headTable:{
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 23,
        textAlign: 'center',
        color: '#ffffff'
    },

    bodyTable:{
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 23,
        textAlign: 'center',
    }
})

const leaveStyle = StyleSheet.create({
    container: {
        padding: 23
    },

    textInput: {
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 23,
        color: "black",
        borderWidth: 1,
        borderColor: "#00C4FF",
        borderRadius: 10,
        padding: 10,
    },

    textInputView:{
        marginBottom: 10
    },

    sideButton:{
        position: 'absolute',
        width: 100,
        alignItems:'flex-end',
        right: 15,
        top: 15
    },

    actionItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },

    itemText: {
        fontSize: 26
    }
})

const historyStyle = StyleSheet.create({
    container:{
        padding: 18,
        paddingBottom: 50
    },

    historyItem:{
        padding: 13,
        borderColor: '#00C4FF',
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 13
    },

    title:{
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        fontSize: 25
    },

    detail:{
        fontSize: 18,
        color: 'gray'
    },

    date:{
        fontSize: 20
    },

    statusIcon:{
        width: 17,
        height: 17,
        resizeMode: 'contain',
        marginLeft: 5
    },

    bottomView:{
        position: 'absolute',
        bottom: 0,
        width: width,
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: 'transparent'
    }
})

const historyDetailStyle = StyleSheet.create({
    first_section: {
        padding: 23,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },

    typeTitle: {
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        fontSize: 40,
        color: "#EC398C"
    },

    date:{
        color: "#00C4FF",
        fontSize: 20
    },

    reason:{
        fontSize: 20
    },

    vacationTotal:{
        borderWidth: 1,
        borderColor: "#00C4FF",
        borderRadius: 10,
        padding: 8
    },

    vacationTitle:{
        fontSize: 20
    },

    vacationDay:{
        fontSize: 40,
        alignSelf: 'center',
        color: "#00C4FF",
    },

    container:{
        padding: 23
    },

    statusTitle:{
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
    },

    circle: {
        width: 16,
        height: 16,
        backgroundColor: '#FDC830',
        borderRadius: 100
    },

    line:{
        marginTop: 2,
        marginBottom: 2,
        width: 1,
        height: 60,
        flexDirection: 'column',
        marginLeft: 7
    },

    status:{
        fontSize: 20
    },

    statusContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    statusIcon:{
        width: 17,
        height: 17,
        resizeMode: 'contain',
        marginRight: 5
    }
})

export { checkIn, holiday, leaveStyle, historyStyle, historyDetailStyle }