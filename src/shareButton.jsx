import React,{useState} from 'react';
//import liff from 'react-liff';
const liff = window.liff
const ShareButton = (props) => {
    const [value, setValue] = useState('')
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
    
    return(
        <button onClick={()=>login()}>共有sharebottnoのコンポーネント</button>
    );
}
export default ShareButton 