import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    const dialogsEl = props.state.dialogsData.map(el => 
    <DialogItem id={el.id} name={el.name}>
    </DialogItem>);
    const messagesEl = props.state.messagesData.map(el => 
    <Message 
    message={el.message}
    addMessage={props.addMessage}
    updateNewText={props.updateNewText}>
    </Message>);
    
    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <div className={style.dialogsItem}>
                    {dialogsEl}
                </div>
                <div className={style.messagesItem}>
                    {messagesEl}
                </div>

            </div>
        </div>
    )
}

export default Dialogs;