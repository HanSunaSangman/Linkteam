import { StyleSheet, Dimensions, Platform } from 'react-native'

let width = Dimensions.get('window').width;

const profileHeader = StyleSheet.create({
    container: {
    },

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100
    },

    headerView: {
        alignItems: 'center',
        padding: 30
    },

    profileName: {
        color: '#fff',
        fontSize: 33,
        marginTop: 20,
        textAlign: 'center'
    },

    midContainer:{
        width: width,
        bottom: -20,
        zIndex: 10,
        position: 'absolute',
        alignItems:'center'
    }
})

const profileStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 23,
        paddingBottom: 23,
        zIndex: 0
    },

    group:{
        flexDirection: 'row',
        marginBottom: 3
    },

    titleText: {
        fontSize: 30,
        marginBottom: 10,
    },

    headText :{
        marginBottom: 8,
        flex: 0.5
    },

    detailText: {
        marginBottom: 8,
        flex:1
    },

    icon: {
        width: 23,
        height: 23,
        resizeMode: 'contain',
        marginRight: 8,
    }
})

const assetStyle = StyleSheet.create({

    container:{
        padding: 13,
        paddingBottom: 50
    },

    assetItem: {
        padding: 13,
        borderColor: '#00C4FF',
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 13
    },

    assetTitle: {
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        fontSize: 25
    },

    assetDetail: {
        fontSize: 20,
        lineHeight: 20,
        color: 'gray'
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

const addAssetStyle = StyleSheet.create({
    container:{
        padding: 23
    },

    textInputView:{
        marginBottom: 10
    },

    button:{
        marginTop: 10,
        width: "60%",
        alignSelf: 'center'
    },

    errorText:{
        color: 'red',
        fontSize: 20,
        marginTop: 5
    },

    title: {
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        fontSize: 35,
        color: "#EC398C",
        marginBottom: 20
    },

    detail:{
        marginBottom: 8
    },

    noDetail:{
        color: 'lightgray'
    },

    bottomView:{
        marginTop: 20,
        alignItems: 'center'
    }
})

const assetDetailStyle = StyleSheet.create({
    container:{
        padding: 23
    },

    detailContainer:{
        marginTop: 15
    },

    title: {
        fontFamily: Platform.OS === 'ios' ? 'DB Helvethaica X' : 'DB-Helvethaica-X-Med',
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
        fontSize: 35,
        color: "#EC398C"
    },

    detail: {
        fontSize: 21
    },

    date:{
        color: "#00C4FF"
    },

    icon:{
        width: 45,
        height: 45,
        marginLeft: 10
    },

    button:{
        marginTop: 30,
        width: "50%",
        alignSelf:'center'
    }
})

const companyProfileStyle = StyleSheet.create({
    container: {
        padding: 23,
        alignItems: 'center'
    },

    logo: {
        width: 220,
        height: 85,
        resizeMode: 'contain'
    },

    wordGroup:{
        marginTop: 10
    },

    wordGroup_inside:{
        fontSize: 20,
        textAlign: 'center'
    },

    wordBold:{
        fontWeight: 'bold'
    },

    contactus: {
        marginTop: 10
    },

    contactusTitle: {
        textAlign: 'center'
    },

    contactColumn:{
        flexDirection: 'column'
    },

    contactRow:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    gridItem:{
        flexDirection: 'row',
        paddingVertical: 6,
        paddingHorizontal: 4
    },

    address:{
        marginTop: 16,
        fontSize: 18,
        textAlign: 'center'
    },

    staffButton:{
        width: 230,
        alignSelf: 'center',
        marginTop: 25
    }
})

const staffContact = StyleSheet.create({
    container: {
        padding: 18
    },

    searchField: {
        backgroundColor: '#eaeaea',
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    searchInput: {
        fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X",
        fontSize: 23,
        height: 48,
        flex: 1
    },

    listView:{
        marginTop: 20
    },

    sectionTitle:{
        fontSize: 30,
        marginBottom: 10
    },

    contactItem: {
        padding: 16,
        borderColor: '#00C4FF',
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 13
    },

    contactName:{
        fontSize: 26,
        color: '#ec398c',
        fontWeight: '500'
    },

    contactTel: {
        fontSize: 26
    },

    contactEmail:{
        color: 'gray',
        fontSize: 20
    },

    contactDesk:{
        color: 'gray',
        fontSize: 20
    },

    actionSheetTitle:{
        marginBottom: 20
    },

    actionItem:{
        flex: 1,
        alignItems: 'center'
    },

    actionName: {
        fontSize: 20,
        marginTop: 5
    },

    actiondetail:{
        fontSize: 16,
        lineHeight: 16,
        color: 'gray'
    }
})

const DocumentStyle = StyleSheet.create({
    container:{
        padding: 13,
        paddingBottom: 50
    },

    docItem: {
        padding: 13,
        borderColor: '#00C4FF',
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 13,
        flexDirection: 'row',
    },

    docName: {
        marginLeft: 10,
        fontSize: 23,
        lineHeight: 26,
        flex: 1
    },

    bottomView:{
        position: 'absolute',
        bottom: 0,
        width: width,
        justifyContent:'center',
        paddingBottom: 20,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },

    bottomButton:{
        width: 150,
        marginRight: 10
    }
})

const AnnoucementStyle = StyleSheet.create({

    container: {
        padding: 23
    },

    pdfItem: {
        padding: 16,
        borderColor: '#00C4FF',
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 13
    },
})

export {profileStyle,
     profileHeader,
     assetStyle,
     assetDetailStyle,
     addAssetStyle,
     companyProfileStyle, 
     staffContact, 
     DocumentStyle,
     AnnoucementStyle}