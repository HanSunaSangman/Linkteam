import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import nav from '../stringnav.json'

import location from './Icon/location.png'
import calendar from './Icon/calendar.png'
import history from './Icon/history.png'

import CheckIn from './CheckIn'
import VacationHistory from './VacationHistory'
import Holiday from './Holiday'
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator()

const mapStateToProps = (state) => ({
    lang: state.language.timeAttendance
})

class TimeAttendanceNav extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Tab.Navigator 
            tabBarOptions={{activeTintColor: '#00c5ff', 
            labelStyle:{fontFamily: Platform.OS === 'ios' ? "DB Helvethaica X" : "DB-Helvethaica-X", fontSize: 16}}}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                        
                    if (route.name === nav.checkin) {
                        iconName = location
                    } else if (route.name === nav.history_vacation){
                        iconName = history
                    } else if (route.name === nav.holiday) {
                        iconName = calendar
                    }
                    
                    return <Image source={iconName} tintColor={color} style={{width: size, height: size, tintColor: color}}/>;
                },
                })} >
                <Tab.Screen 
                name={nav.checkin} 
                component={CheckIn} 
                options={{title: this.props.lang.checkinworkplace}}
                listeners={(route) => setHeaderTitle(this.props.navigation, this.props.lang.checkinworkplace)}/>
                <Tab.Screen 
                name={nav.holiday} 
                component={Holiday} 
                options={{title: this.props.lang.holiday}}
                listeners={(route) => setHeaderTitle(this.props.navigation, this.props.lang.holiday)}/>
                <Tab.Screen
                name={nav.history_vacation}
                component={VacationHistory}
                options={{title: this.props.lang.vacation_history}}
                listeners={(route) => setHeaderTitle(this.props.navigation, this.props.lang.vacation_history)}
                />
                
            </Tab.Navigator>
            </>
        )
    }
}

export default connect(mapStateToProps)(TimeAttendanceNav)

function setHeaderTitle(navigation, newName){
    navigation.setOptions({title: newName});
}