import React from 'react'
import { View, ScrollView } from 'react-native'
import { TextLinkteam, ButtonRed } from '../Library/Component'
import { holiday } from '../Style/Style'
import { Table, Row, Rows, Col } from 'react-native-table-component'
import nav from '../stringnav.json'
import holidaylist from './HolidayExample.json'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    lang: state.language.holiday
})

class Holiday extends React.Component{

    constructor(props){
        super(props)
        var year = new Date().getFullYear();
        this.state = { year: year + 543, 
            table: { tableHead: ['วันลา', 'จำนวนวันลา/ปี', 'วันลาคงเหลือ'],
            leaveItem: [{title: 'ลาป่วย', allDay: 30, remain: 28},
            {title: 'ลากิจ', allDay: 6, remain: 3},
            {title: 'ลาพักร้อน', allDay: 6, remain: 3}],
            leaveData: []} } 

        this.state.table.leaveItem.map((item) =>{
            var tempItem = []
            tempItem.push(item.title)
            tempItem.push(item.allDay + " วัน")
            tempItem.push(item.remain + " วัน")
            this.state.table.leaveData.push(tempItem)
        })
    }

    render(){
        return(
            <ScrollView>
                <View style={holiday.container}>
                    <TextLinkteam style={holiday.title}>วันหยุดประจำปี {this.state.year}</TextLinkteam>
                    <View>
                        {holidaylist.map((item, key) => 
                            <HolidayItem key={key} day={item.day} date={item.date}/>
                        )}
                    </View>
                    <View style={{marginTop: 10}}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#00C4FF'}} >
                            <Row data={this.state.table.tableHead}
                            style={{backgroundColor: '#EC398C', height: 40}}
                            textStyle={holiday.headTable}/>
                            <Rows data={this.state.table.leaveData}
                            style={{height: 40}}
                            textStyle={holiday.bodyTable}/>
                        </Table>
                    </View>

                    {/*This is propersal*/}
                    {/* <View style={{marginTop: 20}}>
                        <TextLinkteam>จำนวนวันลาที่คงเหลือ</TextLinkteam>
                        <View style={{flexDirection: 'row'}}>
                            {this.state.table.leaveItem.map((item, key) =>
                                <LeaveRemain 
                                key={key}
                                type={item.title}
                                remain={item.remain}
                                total={item.allDay}
                                />
                            )}
                        </View>
                    </View> */}

                    <View style={{marginTop: 20, alignItems: 'center'}}>
                        <ButtonRed 
                        text={this.props.lang.leave_request}
                        style={{width: 200}}
                        onPress={()=>this.props.navigation.navigate(nav.leave_request)}/>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(Holiday)

class HolidayItem extends React.Component{
    render(){
        return(
            <View style={holiday.holidayItem}>
                <TextLinkteam style={holiday.itemDay}>{this.props.day}</TextLinkteam>
                <TextLinkteam style={holiday.itemDate}>{this.props.date}</TextLinkteam>
            </View>
        )
    }
}

class LeaveRemain extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextLinkteam style={{color: '#EC398C', fontSize: 50, textAlign:'center'}}>
                        {this.props.remain}
                    </TextLinkteam>
                    <TextLinkteam style={{color: 'gray'}}> / {this.props.total}</TextLinkteam>
                </View>
                <TextLinkteam style={{fontSize: 23, textAlign: 'center', lineHeight: 30}}>{this.props.type}</TextLinkteam>
            </View>
        )
    }
}