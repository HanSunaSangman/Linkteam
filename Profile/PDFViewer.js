import React from 'react'
import { View } from 'react-native'
import { Loading } from '../Library/Component'
import PDFView from 'react-native-view-pdf';

const resources = {
    file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
    url: 'https://www.soundczech.cz/temp/lorem-ipsum.pdf',
    base64: 'JVBERi0xLjMKJcfs...',
  };

export default class PDFViewer extends React.Component{

    constructor(props){
        super(props)
        this.state = { isLoading: true }
    }

    render(){
        const resourceType = 'url';
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                {this.state.isLoading ? <Loading style={{alignSelf: 'center'}}/> : null}
                
                <PDFView
                fadeInDuration={250.0}
                style={{ flex: 1 }}
                resource={resources[resourceType]}
                resourceType={resourceType}
                onLoad={() => {
                    console.log(`PDF rendered from ${resourceType}`)
                    this.setState({isLoading: false})
                }}
                onError={(error) => console.log('Cannot render PDF', error)}
                />
            </View>
        )
    }
}