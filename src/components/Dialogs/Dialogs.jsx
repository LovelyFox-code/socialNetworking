import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsEl = props.state.dialogsData.map(el => <DialogItem id={el.id} name={el.name}></DialogItem>);
    const messagesEl = props.state.messagesData.map(el => <Message message={el.message}></Message>);
    const newMessage = React.createRef();
    const sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItem}>
                    {dialogsEl}
                </div>
                <div className={style.messagesItem}>
                    {messagesEl}
                    <textarea ref={newMessage}></textarea>
                    <button onClick={sendMessage}>send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;