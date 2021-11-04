import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../state/dialogs-reducer';

const Dialogs = (props) => {
    let state = props.store.getState().dialogPage;

    const dialogsEl = state.dialogsData.map(el =>
        <DialogItem id={el.id} name={el.name}>
        </DialogItem>);

    const messagesEl = state.messagesData.map(el =>
        <Message
            message={el.message}
            addMessage={props.addMessage}
            updateNewText={props.updateNewMessageText}>
        </Message>);
    let newMessageBody = state.newMessageBody;
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    return (
        <div className={style.main}>
            <div className={style.dialogs}>
                <div className={style.dialogsItem}>
                    {dialogsEl}
                </div>
                <div className={style.messagesItem}>
                    <div>{messagesEl}</div>
                    <div>
                        <div> <textarea name="" id="" cols="30" rows="10" value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"></textarea></div>
                        <div><button onClick={onSendMessageClick}>send</button></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;