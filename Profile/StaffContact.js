import React, {createRef} from 'react'
import ActionSheet from 'react-native-actions-sheet'
import { ScrollView, View, TextInput, Linking, TouchableOpacity } from 'react-native'
import { TextLinkteam } from '../Library/Component'
import { staffContact } from '../Style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import contact from './ContactExample.json'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    lang: state.language.profile.companyProfile
})

class StaffContact extends React.Component{

    constructor(props){
        super(props)
        this.state = { filteredData: [], isSearching: false }

    }

    handleSearch(text){
        var searchedData = []
        contact.map((item) => {
            item.people.filter(i=>i.first_name.includes(text)).map((pItem) => {
                searchedData.push(pItem)
            })
        })

        this.setState({filteredData: searchedData})

        if (text != ""){
            this.state.isSearching = true
            this.setState({searchKeyword: text})
        }else{
            this.state.isSearching = false
            this.setState({searchKeyword: text})
        }
    }

    render(){
        const { filteredData, isSearching } = this.state
        return(
            <ScrollView>
                <View style={staffContact.container}>
                    <View style={staffContact.searchField}>
                        <Icon name="search" size={23} color={'#acacac'} style={{marginRight: 8}}/>
                        <TextInput style={staffContact.searchInput}
                        onChangeText={(text)=> this.handleSearch(text)}
                        clearButtonMode={'always'}
                        placeholderTextColor={"#acacac"}
                        returnKeyType={'search'}
                        placeholder={this.props.lang.search}/>
                    </View>
                    <View style={staffContact.listView}>
                        { !isSearching ? (contact.map((item, key) => 
                            <View key={key}>
                            { !isSearching ? 
                            <TextLinkteam style={staffContact.sectionTitle}>{item.department_name}</TextLinkteam> : null
                            } 
                            { item.people.map((peopleItem, key) => 
                                <ContactItem key={key}
                                name={peopleItem.first_name}
                                email={peopleItem.email}
                                tel={peopleItem.tel}
                                lang={this.props.lang}
                                desk={peopleItem.desk_no} />
                            )}
                            </View>
                        )) : ( filteredData.length > 0 ? (
                            filteredData.map((peopleItem, key) =>
                            <ContactItem key={key}
                            name={peopleItem.first_name}
                            email={peopleItem.email}
                            tel={peopleItem.tel}
                            lang={this.props.lang}
                            desk={peopleItem.desk_no} />
                            )
                        ): (<NoItem/>))}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(StaffContact)

class ContactItem extends React.Component{
    
    render(){
        const lang = this.props.lang
        const actionSheetRef = createRef();
        return (
            <>
            <TouchableOpacity onPress={()=>actionSheetRef.current?.setModalVisible()}>
                <View style={staffContact.contactItem}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column',flex: 1.5}}>
                            <TextLinkteam style={staffContact.contactName}>คุณ{this.props.name}</TextLinkteam>
                            <TextLinkteam style={staffContact.contactEmail}>{this.props.email}</TextLinkteam>
                        </View>
                        <View style={{flexDirection: 'column', flex: 1}}>
                            <TextLinkteam style={staffContact.contactTel}>{this.props.tel}</TextLinkteam>
                            <TextLinkteam style={staffContact.contactDesk}>{lang.desk}({this.props.desk})</TextLinkteam>
                        </View>
                    </View>
                    <ActionSheet ref={actionSheetRef}>
                        <View style={{padding: 16, paddingBottom: 26}}>
                            <TextLinkteam style={staffContact.actionSheetTitle}>คุณ{this.props.name}</TextLinkteam>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={staffContact.actionItem} onPress={()=>Linking.openURL(`tel:${this.props.tel}`)}>
                                    <Icon name="phone" size={30} />
                                    <TextLinkteam style={staffContact.actionName}>{lang.call}</TextLinkteam>
                                    <TextLinkteam style={staffContact.actiondetail}>{this.props.tel}</TextLinkteam>
                                </TouchableOpacity>
                                <TouchableOpacity style={staffContact.actionItem} onPress={()=>Linking.openURL(`mailto:${this.props.email}`)}>
                                <Icon name="envelope" size={30} />
                                    <TextLinkteam style={staffContact.actionName}>{lang.email}</TextLinkteam>
                                    <TextLinkteam style={staffContact.actiondetail}>{this.props.email}</TextLinkteam>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </ActionSheet>
                </View>
            </TouchableOpacity>
            
            </>
        )
    }
}

class NoItem extends React.Component{
    render(){
        return(
            <View>
                <TextLinkteam style={{textAlign: 'center'}}>ไม่พบผลค้นหา</TextLinkteam>
            </View>
        )
    }
}