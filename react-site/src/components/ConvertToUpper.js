import React, { useState } from 'react'

export default function ConvertToUpper(props) {

    const [text, setText] = useState(' ')

    const keyUpToUpprCase = (e) => {
        const userValue = (e.target.value);
        setText(userValue);
    }
    const changeToUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText);
    }
    const changeToLowerCase = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <div>
            <h4 className='my-3'>{props.heading}</h4>

            <div className="form-group">
                <textarea className="form-control" id="toUpper" rows="5" placeholder="Type or paste your content here" value={text} onChange={keyUpToUpprCase} ></textarea>
            </div>
            <button type="button" className="btn btn-info my-2" onClick={changeToUpperCase}>To UpperCase</button>
            <button type="button" className="btn btn-info my-2 mx-2" onClick={changeToLowerCase}>To LowerCase</button>
        </div>
    )
}


