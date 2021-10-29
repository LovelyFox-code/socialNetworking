import React from 'react';
import style from '.././Dialogs.module.css'

const Message = (props) => {
    const newMessage = React.createRef();

    const addMessage = () => {
        props.addMessage();
    }
    const onTextChange = () =>{
        let text = newMessage.current.value;
        props.updateNewText(text);
    }
    return (
        <div className={style.messagesItem}>
            <div className={style.message}>{props.message}</div>
            <textarea onChange={onTextChange} ref={newMessage}></textarea>
            <button onClick={addMessage}>send</button>
        </div>
    )
}

export default Message;