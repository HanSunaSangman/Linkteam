import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'
import { TextLinkteam } from '../Library/Component'
import { benefit } from '../Style/Style'

const mapStateToProps = (state) => ({
    lang: state.language.benefit
})

class Benefit extends React.Component {

    constructor(props){
        super(props)
        this.state = {data: [ "โบนัส", "วันหยุด-วันลาตามกฏหมาย", "ประกันสังคม", "วันหยุด-วันลาตามกฏหมาย", "ค่าล่วงเวลา", "ประกันสุขภาพ", "เบิก OT" ]}
    }

    render(){
        return (
            <ScrollView>
                <View style={benefit.container}>
                <TextLinkteam style={benefit.head}>{this.props.lang.welfare}</TextLinkteam>
                {this.state.data.map((item, key) =>
                    <BenefitItem key={key} benefitname={item}/>
                )}
                
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(Benefit)

class BenefitItem extends React.Component{
    render(){
        return(
            <View style={benefit.benefitItem}>
                <TextLinkteam>{this.props.benefitname}</TextLinkteam>
            </View>
        )
    }
}
