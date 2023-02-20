import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Image } from 'react-native'
import { TextLinkteam } from '../Library/Component'
import {historyDetailStyle} from '../Style/Style'
import moment from 'moment'
import Dash from 'react-native-dash';

import approved from './Icon/approved.png'
import rejected from './Icon/rejected.png'
import pending from './Icon/pending.png'

const mapStateToProps = (state) => ({
    lang: state.language.holiday
})


 
class VacationDetail extends React.Component{

    constructor(props){
        super(props)
        const { data } = this.props.route.params
        this.state = { type: data.type,
            startDate: data.start_date,
            endDate: data.end_date, 
            reason: data.reason,
            status: data.status,
            head_status: data.head_status,
            hr_status: data.hr_status }
    }

    getStatus(status){
        var taskStatus = { icon: null, text: null}
        if (status === "approved"){
            taskStatus = { icon: approved, text: this.props.lang.approved }
        }else if (status === "reject"){
            taskStatus = { icon: rejected, text: this.props.lang.reject }
        }else{
            taskStatus = { icon: pending, text: this.props.lang.pending }
        }
        return taskStatus
    }

    render(){
        const { type, startDate, endDate, reason, status, head_status, hr_status } = this.state
        var dateStart = new Date(startDate)
        var dateEnd = new Date(endDate)
        
        var dateStartDisplay = moment(dateStart).format("DD/MM/YYYY ")
        var dateEndDisplay = moment(dateEnd).format("DD/MM/YYYY ")

        var diffTime = dateEnd.getTime() - dateStart.getTime()
        var diffDay = diffTime / (1000 * 3600 * 24)

        var document = this.getStatus(status)
        var head = this.getStatus(head_status)
        var hr = this.getStatus(hr_status)

        return(
            <ScrollView>
                <View style={historyDetailStyle.first_section}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View>
                            <TextLinkteam style={historyDetailStyle.typeTitle}>{type}</TextLinkteam>
                            <TextLinkteam style={historyDetailStyle.date}>
                                {dateStartDisplay} - {dateEndDisplay}
                            </TextLinkteam>
                            <TextLinkteam style={historyDetailStyle.reason}>{this.props.lang.reason} : {reason}</TextLinkteam>
                        </View>
                        <View>
                            <View style={historyDetailStyle.vacationTotal}>
                                <TextLinkteam style={historyDetailStyle.vacationTitle}>
                                    {this.props.lang.numbertitle}
                                </TextLinkteam>
                                <TextLinkteam style={historyDetailStyle.vacationDay}>
                                    {diffDay} {this.props.lang.numberday}
                                </TextLinkteam>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={historyDetailStyle.container}>
                    <TextLinkteam style={historyDetailStyle.statusTitle}>{this.props.lang.vacation_status}</TextLinkteam>
                    <View style={{marginTop: 20, marginLeft: 5, flexDirection: 'row'}}>
                        <View style={{marginTop: 3}}>
                            <View style={historyDetailStyle.circle}></View>
                            <Dash style={historyDetailStyle.line} dashColor={"#FDC830"}/>
                            <View style={historyDetailStyle.circle}></View>
                            <Dash style={historyDetailStyle.line} dashColor={"#FDC830"}/>
                            <View style={historyDetailStyle.circle}></View>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <View>
                                <TextLinkteam>{this.props.lang.submit_document}</TextLinkteam>
                                <View style={historyDetailStyle.statusContainer}>
                                    <Image source={document.icon} style={historyDetailStyle.statusIcon}/>
                                    <TextLinkteam style={historyDetailStyle.status}>{document.text}</TextLinkteam>
                                </View>
                            </View>
                            <View style={{marginTop: 25}}>
                                <TextLinkteam>{this.props.lang.to_head}</TextLinkteam>
                                <View style={historyDetailStyle.statusContainer}>
                                    <Image source={head.icon} style={historyDetailStyle.statusIcon}/>
                                    <TextLinkteam style={historyDetailStyle.status}>{head.text}</TextLinkteam>
                                </View>
                            </View>
                            <View style={{marginTop: 30}}>
                                <TextLinkteam>{this.props.lang.to_hr}</TextLinkteam>
                                <View style={historyDetailStyle.statusContainer}>
                                    <Image source={hr.icon} style={historyDetailStyle.statusIcon}/>
                                    <TextLinkteam style={historyDetailStyle.status}>{hr.text}</TextLinkteam>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(VacationDetail)