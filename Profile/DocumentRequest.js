import React from 'react'
import {ScrollView, View, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import {TextLinkteam, ButtonRed} from '../Library/Component'
import CheckBox from 'react-native-check-box'
import {DocumentStyle} from '../Style/Style'
import { connect } from 'react-redux'
import nav from '../stringnav.json'

import doc from './profile-icon/doc.png'

const mapStateToProps = (state) => ({
    lang: state.language
})

class DocumentRequest extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        lang: this.props.lang.profile.document,    
        docItem : [{name: 'หนังสือรับรองการทำงาน'},
        {name: 'หนังสือรับรองเงินเดือน'},
        {name: 'หนังสือรับรองผ่านงาน'},
        {name: 'หนังสือรับรองไปต่างประเทศ'},
        {name: 'หนังสือรับรองไปต่างประเทศ (ภาษาอังกฤษ)'},
        {name: 'หนังสือขอแก้ไขข้อมูลส่วนบุคคล'},]}
    }

    // setCheck(key, isChecked){
    //     console.log(isChecked)
    //     var stateCopy = Object.assign({}, this.state);
    //     stateCopy.docItem = stateCopy.docItem.slice();
    //     stateCopy.docItem[key] = Object.assign({}, stateCopy.docItem[key]);
    //     stateCopy.docItem[key].isCheck = isChecked ? false : true;
    //     this.setState(stateCopy);
    // }

    render(){
        const {lang, docItem} = this.state
        return(
            <>
                <ScrollView>
                    <SafeAreaView>
                        <View style={DocumentStyle.container}>
                            {docItem.map((item, key) =>
                                <DocumentItem 
                                key={key} name={item.name}
                                onPress={()=>this.props.navigation.navigate(nav.PDFView)}/>
                            )}
                            
                        </View>
                    </SafeAreaView>
                    
                </ScrollView>
                {/* <View style={DocumentStyle.bottomView}>
                    <ButtonRed text={lang.approve} style={DocumentStyle.bottomButton}/>
                    <ButtonRed text={lang.download} style={DocumentStyle.bottomButton}/>
                </View> */}
            </>
        )
    }
}

export default connect(mapStateToProps)(DocumentRequest)

class DocumentItem extends React.Component{
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={DocumentStyle.docItem}>
                    <Image source={doc} style={{width: 40, height: 40}}/>
                    <TextLinkteam style={DocumentStyle.docName}>
                        {this.props.name}
                    </TextLinkteam>
                </View>
            </TouchableOpacity>
            
        )
    }
}