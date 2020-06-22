import React from 'react';
import ShareButton from './shareButton';
import InputInfo from './InputInfo'
import liff from 'react-liff';

class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    

    shareContents = () => {
        
        if(!liff.isLoggedIn()) {
            liff.login({ redirectUri: "https://localhost:3000" });
        }
        
        else if (liff.isApiAvaileable('shareTargetPicker')) {
            liff.shareTargetPicker([
                {
                    type: "text",
                    text: "hello world",
                }
            ])
        }
    }



    render () {
        return(
            <React.Fragment>
                <InputInfo shareContents={this.shareContents} />
                <ShareButton />
            </React.Fragment>

        );
    }
}


export default Form