import React ,{useState}from 'react';

const liff = window.liff
const InputInfo = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    const login = () => {
        liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(() => {
            liff.login()
            setIsLogin(liff.isLoggedIn())
        })
    }
    return (
        <div className='content'>
            
        <header>
            <button variant="contained" color="primary" onClick={() => login()} disabled={isLogin}>
                Login
            </button>
        </header>
        <form>
            <div className='title'>
                <p>ミーティングのタイトルを記入してください</p>
                <input type='text'></input>
            </div>
            <div className='starttime'>
                <p>開始時間を記入してください</p>
                <input type='time' step="300"></input>
            </div>
            <div className='endtime'>
                <p>終了時間を記入してください</p>
                <input type='time' step="300"></input>
            </div>

            <div className='people'>
                <p>募集人数を記入してください</p>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>

                </select>
            </div>
            <div className='url'>
                <p>zoom等のURLを貼り付けてください</p>
                <input type='url'></input>
            </div>

            <button onClick={props.shareContents}>共有</button>


        </form>
        </div>
    );
}
export default InputInfo