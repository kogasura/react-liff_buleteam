import React, { FC, useState, useEffect } from 'react';
//import Button from '@material-ui/core/Button';


const liff = window.liff

const TestApp = () => {
  const [value, setValue] = useState('')
  const [isLogin, setIsLogin] = useState(false)

 /* useEffect(() => {                                      
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(() => {
      setIsLogin(liff.isLoggedIn())
    })
  }, [])*/

  const login = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID}).then(() => {
      liff.login()
      setIsLogin(liff.isLoggedIn())
    })
  }

  /*const openQR = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(() => {
      try {
        liff.scanCode()
          .then(result => setValue(result.value!))
          .catch(() => alert('cannot read QR'))
      } catch {
        alert('cannot open QR camera')
      }
    })
  }*/

  return (
    <div className="App">
      <div className="qrValue">{value}</div>
      <div className="loginButton">
        <button variant="contained" color="primary" onClick={() => login()} disabled={isLogin}>
          Login
        </button>
      </div>
      <div className="qrButton">
        
      </div>
    </div>
  );
}

export default TestApp;