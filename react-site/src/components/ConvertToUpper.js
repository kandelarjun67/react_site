import React, { useState } from 'react'

export default function ConvertToUpper(props) {

    const [text, setText] = useState('')

    const keyUpToUpprCase = (e) => {
        const userValue = (e.target.value);
        setText(userValue);
    }
    const changeToUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText);
    }
    const changeToClearText = () => {
        let newText = ''
        setText(newText);
    }
    
    const changeToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const changeToInverse = () => {
        function reverseString() {
            const arrayStrings = text.split("");   
            const reverseArray = arrayStrings.reverse();
            const joinArray = reverseArray.join("");
            return joinArray;
        }
        const result = reverseString();
        setText(result)    
    }
    return (
        <div>
            <h4 className='my-3 text-secondary'>{props.heading}</h4>

            <div className="form-group">
                <textarea className="form-control" id="toUpper" rows="3" placeholder="Type or paste your content here" value={text} onChange={keyUpToUpprCase} ></textarea>
            </div>
            <button type="button" className="btn btn-info my-2" onClick={changeToUpperCase}>To UpperCase</button>
            <button type="button" className="btn btn-info my-2 mx-2" onClick={changeToLowerCase}>To LowerCase</button>
            <button type="button" className="btn btn-info my-2 mx-2" onClick={changeToInverse}>Inverse Text</button>
            <button type="button" className="btn btn-info my-2 " onClick={changeToClearText}>Clear Text</button>
            <h4 className='my-3 text-info'>{props.textSummary}</h4>
            <h5 className='text-secondary'><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</h5>
            <h5 className='text-secondary'>{0.008 * text.split(" ").length} Minutes Read.</h5>
            <h2 className='text-info my-3'>Preview</h2>
            <h4>{text}</h4>
            {/*  */}
        </div>
    ) 
} 


