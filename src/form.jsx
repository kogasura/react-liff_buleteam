import React,{useState} from 'react';
import ShareButton from './shareButton';
import InputInfo from './InputInfo'
//import liff from 'react-liff';
import TestApp from './testButton';

const liff = window.liff

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }



    shareContents = () => {

        
        const [isLogin, setIsLogin] = useState(false)

        /* useEffect(() => {
           liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(() => {
             setIsLogin(liff.isLoggedIn())
           })
         }, [])*/

        const login = () => {
            liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(() => {
                liff.login()
                setIsLogin(liff.isLoggedIn())
            })
        }
        /* liff
         .init({
             liffId: process.env.REACT_APP_LIFF_ID
         })
         .then(() => {
             // Webブラウザからアクセスされた場合は、LINEにログインする
             if (!liff.isInClient() && !liff.isLoggedIn()) {
                 window.alert("LINEアカウントにログインしてください。");
                 liff.login({redirectUri: process.REACT_APP_LIFF_URL});
             }
         })
         .catch((err) => {
             console.log('LIFF Initialization failed ', err);
         });*/


        /*try {
            liff.init({
                liffId: "https://liff.line.me/1654291898-PB5R9NVj"
            })

            if (!liff.isLoggedIn()) {
                liff.login({ redirectUri: "https://kogasura.github.io/react-liff_buleteam/?" });
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
        catch{
            console.log('error');
        }*/
    }



    render() {
        return (
            <React.Fragment>
                <InputInfo shareContents={this.shareContents} />
                <ShareButton shareContents={()=>this.shareContents()} />
                <TestApp />
            </React.Fragment>


        );
    }
}


export default Form