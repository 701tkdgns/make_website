import React from 'react'
import './Mail.css'
const Mail = () => {

const click = () => {
    console.log("CHECK CLICK")
}

    return (
        <form>
            <input id="name" type="text" name="Name" required maxLength="20" placeholder='Name' onClick={click}/>
            <input id="email" type="email" name="Email" required maxLength="30" placeholder='Email' onClick={click}/>
            <textarea id="message" name="Message" rows="10" maxLength="500" placeholder='Message' onClick={click}></textarea>
            <button type='submit'>SUBMIT</button>
        </form>
    )
}
export default Mail