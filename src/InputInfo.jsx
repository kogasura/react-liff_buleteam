import React from 'react';
const InputInfo = (props) => {
    return (
        <form>
            <div className='title'>
                <p>ミーティングのタイトルを記入してください</p>
                <input type='text'></input>
            </div>
            <div className='starttime'>
                <p>開始時間を記入してください</p>
            <input type='time' step = "300"></input>
            </div>
            <div  className = 'endtime'>
                <p>終了時間を記入してください</p>
                <input type='time' step = "300"></input>
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
                <input type = 'url'></input>
            </div>

            <button onClick={props.shareContents}>共有</button>


        </form>
    );
}
export default InputInfo