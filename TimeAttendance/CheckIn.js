import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { TextLinkteam ,ButtonRed } from '../Library/Component'
import Dash from 'react-native-dash';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { checkIn } from '../Style/Style'
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = (state) => ({
    lang: state.language.timeAttendance
})

class CheckIn extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            region: {
            latitude: 13.74574,
            longitude: 100.5329706,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }
        }
    }

    getCurrentLocation(){
        Geolocation.getCurrentPosition(
            info => this.setCurrentLocation(info.coords.longitude, info.coords.latitude),
            error => console.log(error))
    }

    componentDidMount(){
        this.getCurrentLocation()
    }
    
    setCurrentLocation(longitude, latitude){
        this.setState({
            region: 
            {latitude: latitude,
            longitude: longitude, 
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
        }})
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <MapView
                    initialRegion={this.state.region}
                    region={this.state.region}
                    style={checkIn.map}>
                        <MapView.Marker
                        coordinate={{ "latitude": this.state.region.latitude,   
                        "longitude": this.state.region.longitude }}
                        title={"Your Location"}/>
                    </MapView>
                    <TouchableOpacity style={checkIn.currentLocation} onPress={()=>this.getCurrentLocation()}>
                        <Icon name={"location-arrow"} size={20}/>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={checkIn.row}>
                        <ButtonRed style={[checkIn.checkButton, {marginRight: 10}]} text={this.props.lang.checkin}/>
                        <ButtonRed style={checkIn.checkButton} text={this.props.lang.checkout} disabled={true}/>
                    </View>
                    <View style={checkIn.detail_container}>
                        <TextLinkteam>{this.props.lang.checkin_out}</TextLinkteam>
                        <View style={{marginTop: 10, flexDirection: 'row'}}>
                            <View style={{marginRight: 30, marginTop: 7}}>
                                <View style={checkIn.circle}></View>
                                <Dash style={checkIn.line} dashColor={"#FDC830"}/>
                                <View style={checkIn.circle}></View>
                            </View>
                            <View>
                                <View style={{marginBottom: 25}}>
                                    <TextLinkteam style={checkIn.title}>{this.props.lang.in_time}</TextLinkteam>
                                    <TextLinkteam style={checkIn.detail}>{"02/10/2020 08.30น."}</TextLinkteam>
                                </View>
                                <View>
                                    <TextLinkteam style={checkIn.title}>{this.props.lang.out_time}</TextLinkteam>
                                    <TextLinkteam style={checkIn.detail}>{"02/10/2020 17.30น."}</TextLinkteam>
                                </View>
                            </View>
                        </View>

                        <TextLinkteam style={checkIn.allHour}>
                            {this.props.lang.total_hour}
                            <TextLinkteam style={checkIn.hourHighlight}>{"9"} {this.props.lang.hour}</TextLinkteam>
                        </TextLinkteam>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(CheckIn)