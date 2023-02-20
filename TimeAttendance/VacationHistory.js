
import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { TextLinkteam, ButtonRed } from '../Library/Component'
import { historyStyle } from '../Style/Style'
import ex from './VacationExample.json'
import nav from '../stringnav.json'
import moment from 'moment'

import approved from './Icon/approved.png'
import rejected from './Icon/rejected.png'
import pending from './Icon/pending.png'

const mapStateToProps = (state) => ({
    lang: state.language.holiday
})

class VacationHistory extends React.Component {

    constructor(props){
        super(props)
        this.state = { data: ex }
    }

    render(){
        const { data } = this.state
        return (
            <>
            <ScrollView>
                <View style={historyStyle.container}>
                    {data.map((item, key)=>
                        <View key={key}>
                            <VacationItem 
                            type={item.type}
                            status={item.status}
                            reason={item.reason}
                            start_date={item.start_date}
                            end_date={item.end_date}
                            reasonword={this.props.lang.reason}
                            start={this.props.lang.start}
                            to={this.props.lang.to}
                            onPress={()=> {
                            this.props.navigation.navigate(
                                nav.history_vacation_detail,
                                {data: item}
                            )}}/>
                        </View>
                    )}
                </View>
            </ScrollView>
            <View style={historyStyle.bottomView}>
                <ButtonRed 
                text={this.props.lang.leave_request}
                style={{ width: 200, }}
                onPress={()=>this.props.navigation.navigate(nav.leave_request)}/>
            </View>
            </>
        )
    }
}

export default connect(mapStateToProps)(VacationHistory)

class VacationItem extends React.Component{
    render(){
        let statusIcon
        let status = this.props.status
        if (status === 'approved') { statusIcon = approved }
        else if (status === 'reject') { statusIcon = rejected }
        else { statusIcon = pending }

        let startDate = new Date(this.props.start_date)
        let endDate = new Date(this.props.end_date)
        let displayStartDate = moment(startDate).format("DD/MM/YYYY")
        let displayEndDate = moment(endDate).format("DD/MM/YYYY")
        
        return(
            <TouchableOpacity style={historyStyle.historyItem} onPress={this.props.onPress}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TextLinkteam style={historyStyle.title}>
                                {this.props.type} 
                            </TextLinkteam>
                            <Image source={statusIcon} style={historyStyle.statusIcon}/>
                        </View>
                        <TextLinkteam style={historyStyle.detail} numberOfLines={1}>
                            {this.props.reasonword} : {this.props.reason}
                        </TextLinkteam>
                    </View>
                    <View style={{flex: 1, alignItems:'flex-end', justifyContent: 'center'}}>
                        <TextLinkteam style={historyStyle.date}>{this.props.start} {displayStartDate}</TextLinkteam>
                        <TextLinkteam style={historyStyle.date}>{this.props.to} {displayEndDate}</TextLinkteam>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}