import React, { createRef } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet, Platform } from 'react-native'
import { TextLinkteam, ButtonRed } from '../Library/Component'
import { leaveStyle, textInputStyle, pickerSelectStyles } from '../Style/Style'
import ActionSheet from 'react-native-actions-sheet'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import RNPickerSelect from 'react-native-picker-select';

const actionRef = createRef()

const options = [{ value: 0, label: 'ลาป่วย' },{ value: 1, label: 'ลากิจ' },{ value: 2, label: 'ลาพักร้อน' },]

const mapStateToProps = (state) => ({
  lang: state.language.holiday
})

class VacationRequest extends React.Component{

    constructor(props){
        super(props)

        this.inputRefs = {
          typeInput: null,
        }

        this.state = {
          selectedType: undefined,
          startdateIsVisible: false,
          startDate: undefined,
          enddateIsVisible: false,
          endDate: undefined
        }
    }

    selectType(type){
      console.log(type)
      this.setState({selectedType: type})
      actionRef.current?.setModalVisible(false)
    }

    selectTypeCancel(){
      actionRef.current.setModalVisible(false)
    }

    render(){
        const options = [{ value: 0, label: 'ลาป่วย' },{ value: 1, label: 'ลากิจ' },{ value: 2, label: 'ลาพักร้อน' }]
        const placeholder = {
          label: this.props.lang.chooseone,
          value: null,
          color: '#9EA0A4'
        };
        return(
            <ScrollView>
                <View style={leaveStyle.container}>
                  <View style={leaveStyle.textInputView}>
                    <TextLinkteam>{this.props.lang.type}</TextLinkteam>
                    <View>
                      <RNPickerSelect
                        placeholder={placeholder}
                        onValueChange={(value) => {
                          this.setState({selectedType: value})
                        }}
                        useNativeAndroidPickerStyle={false}
                        style={pickerSelectStyles}
                        items={options}
                        value={this.state.selectedType}
                        ref={el=> {
                          this.inputRefs.typeInput = el
                        }}
                      />
                    </View>
                    
                  </View>
                  <View style={leaveStyle.textInputView}>
                    <TextLinkteam>{this.props.lang.start_date}</TextLinkteam>
                    <View>
                      <TextInput style={textInputStyle.textInput}
                      placeholder={this.props.lang.selectDate}
                      placeholderTextColor={"lightgray"}
                      editable={false}
                      value={this.state.startDate}
                      onTouchStart={()=> this.setState({startdateIsVisible: true})}/>
                      <TouchableOpacity 
                      style={leaveStyle.sideButton}
                      onPress={()=> this.setState({startdateIsVisible: true})}>
                        <Icon name={"calendar"} size={20}/>
                      </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                      isVisible={this.state.startdateIsVisible}
                      mode="datetime"
                      onConfirm={(date)=>{
                        var formattedDate = moment(date).format('DD/MM/YYYY HH:mm')
                        this.setState({startdateIsVisible: false, startDate: formattedDate})
                      }}
                      onCancel={()=>this.setState({startdateIsVisible: false})}
                    />
                  </View>
                  <View style={leaveStyle.textInputView}>
                    <TextLinkteam>{this.props.lang.end_date}</TextLinkteam>
                    <View>
                      <TextInput 
                      style={textInputStyle.textInput}
                      placeholder={this.props.lang.selectDate}
                      placeholderTextColor={"lightgray"}
                      editable={false}
                      value={this.state.endDate}
                      onTouchStart={()=> this.setState({enddateIsVisible: true})}/>
                      <TouchableOpacity 
                        style={leaveStyle.sideButton}
                        onPress={()=> this.setState({enddateIsVisible: true})}>
                          <Icon name={"calendar"} size={20}/>
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                      isVisible={this.state.enddateIsVisible}
                      mode="datetime"
                      onConfirm={(date)=>{
                        var formattedDate = moment(date).format('DD/MM/YYYY HH:mm')
                        this.setState({enddateIsVisible: false, endDate: formattedDate})
                      }}
                      onCancel={()=>this.setState({enddateIsVisible: false})}
                    />
                  </View>
                  <View style={leaveStyle.textInputView}>
                    <TextLinkteam>{this.props.lang.reason}</TextLinkteam>
                    <TextInput
                    numberOfLines={2}
                    secureTextEntry={false}
                    multiline={true}
                    style={textInputStyle.textInput}/>
                  </View>

                  <ButtonRed
                   text={this.props.lang.ok} style={{width: 200, alignSelf: 'center', marginTop: 20}}/>
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(VacationRequest)