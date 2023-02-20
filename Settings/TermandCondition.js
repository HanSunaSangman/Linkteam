import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TextLinkteam } from '../Library/Component'

const term = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a facilisis magna. In hac habitasse platea dictumst. Fusce convallis tellus turpis, sit amet tempor tortor faucibus vitae. Phasellus sem mauris, scelerisque in fringilla et, porttitor eget nibh. Donec condimentum ipsum nec feugiat interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum sed libero vitae tempus."+
"\nVivamus ut suscipit lacus, nec congue ipsum. Vivamus in leo in justo laoreet sollicitudin id a enim. Fusce eu dui risus. Aenean eget diam est. Phasellus tempor dolor et vestibulum imperdiet. Pellentesque sed tortor commodo magna tempus auctor ut in nisi. Sed vulputate, arcu quis tincidunt tincidunt, nibh quam blandit diam, vel vulputate ex augue a velit. Cras sed lorem at dui finibus finibus quis non lacus. Donec sapien justo, ultricies in tortor vitae, sollicitudin egestas turpis. Suspendisse vel commodo lectus, in vulputate metus. Donec in metus dui. Nam pharetra ipsum ut augue maximus rutrum. Pellentesque imperdiet iaculis nulla, vitae elementum arcu molestie a. Duis et tempor quam, in mattis eros. Nulla facilisi."+
"\nPhasellus scelerisque id sem at sodales. Nam congue ullamcorper libero, nec facilisis enim tempus id. Aliquam in mauris sit amet ligula feugiat malesuada sed eu magna. Fusce non libero mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada nunc non vulputate malesuada. Praesent arcu nisl, maximus ut semper ac, convallis sed ante. Vivamus consectetur interdum convallis. Vestibulum fermentum odio vitae facilisis posuere. Etiam tempus finibus dui id gravida. Curabitur eu porta justo. Nam faucibus dapibus lacus, sit amet rutrum neque aliquet ut."+
"\nIn in ligula tortor. Praesent lectus urna, aliquam non massa at, varius sagittis urna. Quisque vitae purus eu eros efficitur consequat. Vivamus nec nisi eget nisl fermentum pellentesque. Nulla vel mauris commodo, commodo lectus pellentesque, convallis eros. Etiam rutrum pellentesque ante, at mattis nisi tempor non. Mauris vitae efficitur massa. Mauris id velit sed leo tristique posuere. Vivamus at hendrerit mauris, vitae lobortis felis. Donec sagittis massa eu elementum accumsan. Cras ultricies iaculis ligula, non placerat eros dictum vel. Curabitur luctus pulvinar diam non placerat. Nam tellus metus, semper vel diam ut, interdum ullamcorper sapien. Etiam molestie sollicitudin massa a cursus. Donec luctus consectetur ex sit amet pellentesque. Proin urna dui, pretium et lectus in, pellentesque molestie erat."+
"\nProin enim nisi, imperdiet vel imperdiet euismod, convallis in metus. Pellentesque viverra pretium vehicula. Aliquam aliquam sapien id rutrum porta. Nullam at fermentum massa. Suspendisse ut sem a justo suscipit varius. Etiam suscipit metus eu sagittis pharetra. Aliquam erat volutpat. Nam tincidunt lectus nec odio accumsan, in lobortis ex porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

class TermandCondition extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        return (
            <ScrollView>
                <Text style={{padding: 8}}>
                    {term}
                </Text>
            </ScrollView>
        )
    }
}

export default TermandCondition
