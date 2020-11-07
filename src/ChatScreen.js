import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import "./ChatScreen.css"
function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Elon Musk',
            image: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
            message: "What are you doing these days...."
        },
        {
            name: 'Elon Musk',
            image: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
            message: "Just kidding"
        },
        {
            message: "What is happening "
        },       
    ])

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timpstamp">YOU MATCHED ON 07/11/2020</p>
            {messages.map((message) => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar className="chatScreen__avatar"
                    alt={message.name}
                    src={message.image} />
                    <p className="chatScreen__paragraph">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__paragraphUser">{message.message}</p>
                    </div>
                )
            )
            )}
                <form className="chatScreen__input"> 
               <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a Message...." type="text"/>
                    <Button onClick={handleSend} variant="contained" color="secondary" type="submit">SEND</Button>
                </form>
        </div>
    )
}

export default ChatScreen
