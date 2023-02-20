import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { TextLinkteam, ButtonRed } from '../Library/Component'
import { addAssetStyle, textInputStyle, pickerSelectStyles } from '../Style/Style'
import RNPickerSelect from 'react-native-picker-select';
import nav from '../stringnav.json'

const mapStateToProps = (state) => ({
    lang: state.language.profile.addAsset
})

const objectiveOptions = [{ value: 'ใช้ปฏิบัติงานประจำ', label: 'ใช้ปฏิบัติงานประจำ' },
{ value: 'ใช้ชั่วคราว', label: 'ใช้ชั่วคราว' },
{ value: 'พนักงานเริ่มใหม่', label: 'พนักงานเริ่มใหม่' },
{ value: 'เปลี่ยนของเดิม', label: 'เปลี่ยนของเดิม'}]

class AddAsset extends React.Component {

    constructor(props){
        super(props)
        this.inputRefs = {
            brandInput: null,
            modelInput: null,
            quantityInput: null,
            objectiveInput: null,
            reasonInput: null,
            markInput: null
        }
        this.state = { 
            brand: '',
            model: '',
            quantity: '',
            objective: undefined,
            reason: '',
            mark: '',
            isCompleted: false,
            isError: false
        }
    }

    goToConfirm(){
        if (this.state.brand !== '' && this.state.model !== '' && this.state.quantity !== '' &&
            this.state.objective !== undefined && this.state.reason !== '')
        this.props.navigation.navigate(nav.profileNav.confirmasset,
            { 
                brand: this.state.brand,
                model: this.state.model,
                quantity: this.state.quantity,
                objective: this.state.objective,
                reason: this.state.reason,
                mark: this.state.mark
                
            })
        else{
            this.setState({isError: true})
        }
    }

    render(){
        const placeholder = {
            label: this.props.lang.chooseone,
            value: undefined,
            color: '#9EA0A4'
          };
        const { brand, model, quantity, objective, reason, mark, isError } = this.state
        return (
            <KeyboardAvoidingView 
            behavior="padding" 
            keyboardVerticalOffset={Platform.OS === "ios" ? 60:0}>
            <ScrollView>
                <View style={addAssetStyle.container}>
                    <View style={addAssetStyle.textInputView}>
                        <TextLinkteam>{this.props.lang.brand}</TextLinkteam>
                        <TextInput style={textInputStyle.textInput}
                        placeholder="Apple, Dell, HP"
                        placeholderTextColor={"lightgray"}
                        clearButtonMode="while-editing"
                        ref={ref=> this.inputRefs.brandInput = ref}
                        returnKeyType="next"
                        onChangeText={(value)=>this.setState({brand: value})}
                        onSubmitEditing={()=>this.inputRefs.modelInput.focus()}/>
                        { isError && brand === '' ? 
                        <TextLinkteam style={addAssetStyle.errorText}>
                            {this.props.lang.please_fill}
                        </TextLinkteam> : null
                        }
                    </View>
                    <View style={addAssetStyle.textInputView}>
                        <TextLinkteam>{this.props.lang.model}</TextLinkteam>
                        <TextInput style={textInputStyle.textInput}
                        placeholder="MacbookAir, Inspiron, Pavilion"
                        placeholderTextColor={"lightgray"}
                        clearButtonMode="while-editing"
                        ref={ref=> this.inputRefs.modelInput = ref}
                        returnKeyType="next"
                        onChangeText={(value)=>this.setState({ model: value })}
                        onSubmitEditing={()=>this.inputRefs.quantityInput.focus()}/>
                        { isError && model === '' ?
                            <TextLinkteam style={addAssetStyle.errorText}>
                                {this.props.lang.please_fill}
                            </TextLinkteam> : null
                        }
                    </View>

                    <View style={addAssetStyle.textInputView}>
                        <TextLinkteam>{this.props.lang.quantity}</TextLinkteam>
                        <TextInput style={textInputStyle.textInput} 
                        keyboardType="number-pad"
                        returnKeyType="next"
                        clearButtonMode="while-editing"
                        onChangeText={(value)=>this.setState({ quantity: value })}
                        ref={ref=> this.inputRefs.quantityInput = ref}
                        onSubmitEditing={()=>this.inputRefs.objectiveInput.togglePicker()}/>
                        { isError && quantity === '' ?
                            <TextLinkteam style={addAssetStyle.errorText}>
                                {this.props.lang.please_fill}
                            </TextLinkteam> : null
                        }
                    </View>

                    <View style={addAssetStyle.textInputView}>
                        <TextLinkteam>{this.props.lang.objective}</TextLinkteam>
                        <RNPickerSelect
                        placeholder={placeholder}
                        onValueChange={(value) => {
                          this.setState({objective: value})
                        }}
                        onUpArrow={()=>this.inputRefs.quantityInput.focus()}
                        onDownArrow={()=>this.inputRefs.reasonInput.focus()}
                        useNativeAndroidPickerStyle={false}
                        style={pickerSelectStyles}
                        items={objectiveOptions}
                        value={this.state.objective}
                        ref={ref=> {
                          this.inputRefs.objectiveInput = ref
                        }}
                      />
                      { isError && objective === undefined ?
                            <TextLinkteam style={addAssetStyle.errorText}>
                                {this.props.lang.please_fill}
                            </TextLinkteam> : null
                        }
                    </View>

                    <View style={addAssetStyle.textInputView}>
                        <TextLinkteam>{this.props.lang.reason}</TextLinkteam>
                        <TextInput style={textInputStyle.textInput}
                        ref={ref=> this.inputRefs.reasonInput = ref}
                        returnKeyType="next"
                        numberOfLines={2}
                        onChangeText={(value)=>this.setState({ reason: value })}
                        onSubmitEditing={()=>this.inputRefs.markInput.focus()}/>
                        { isError && reason === '' ?
                            <TextLinkteam style={addAssetStyle.errorText}>
                                {this.props.lang.please_fill}
                            </TextLinkteam> : null
                        }
                    </View>

                    <View style={addAssetStyle.textInputView}>
                        <TextLinkteam>{this.props.lang.mark}</TextLinkteam>
                        <TextInput style={textInputStyle.textInput}
                        numberOfLines={2}
                        onChangeText={(value)=>this.setState({ mark: value })}
                        ref={ref=> this.inputRefs.markInput = ref}/>
                        
                    </View>

                    <ButtonRed 
                    text={this.props.lang.request} 
                    style={addAssetStyle.button}
                    onPress={()=>this.goToConfirm()}/>
                    
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default connect(mapStateToProps)(AddAsset)
