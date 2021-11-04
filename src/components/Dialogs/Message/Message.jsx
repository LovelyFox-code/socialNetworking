import React from 'react';
import style from '.././Dialogs.module.css'

const Message = (props) => {
    const newMessage = React.createRef();

    return (
        <div className={style.messagesItem}>
            <div className={style.message}>{props.message}</div>
        </div>
    )
}

export default Message;