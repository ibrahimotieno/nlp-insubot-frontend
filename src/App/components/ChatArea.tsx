import React, { useState } from 'react';
import { makePostRequest } from '../Api/apiHandler';
import  './page.css';
import send from './send.png';


export interface Ichat {
    agent:string,
    message:string
}

export interface Iresponse {
    Status:number,
    Message:string,
    Payload:string
}

const ChatArea = () => {

    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const chatContainer:any = React.createRef();

    const [chats, setChats] = useState<Array<Ichat>>([
        {agent:'bot', message:"Hello there! Let's chat"}
    ])
    
    const getResponse = async()  => {
        setLoading(true)
        const x = {agent: 'user', message: inputValue};
        setChats(prevState => ([            
            ...prevState,
            x
        ]));

        const input:string = inputValue;
        setInputValue('');

        const scroll =
        chatContainer.current.scrollHeight -
        chatContainer.current.clientHeight;

        console.log(scroll)
        chatContainer.current.scrollTo(0, scroll);

        const response:Iresponse = await makePostRequest('http://localhost:5000', {
            msg:input
        });

        if(response.Payload){
            setLoading(false);
            const y = {agent: 'bot', message: response.Payload};
            setChats(prevState => ([            
                ...prevState,
                y
            ]));
        }else{
            setLoading(false);
        }

    }

    const handleInput = (event) => {
        if(!event.target.value){
            return
        }
        setInputValue(event.target.value);
    }

    return(
       <div className='chatarea-container'>
           <div ref={chatContainer} className='chat-center'>
               {
                   chats.map((chat, index) => {
                       if(chat.agent === 'bot'){
                            return(
                                <div key={index} className='bot-message-wrapper d-flex'>
                                 
                                    <div className='bot-message-container'>
                                        {chat.message}
                                    </div>
                                </div>
                            )
                       }else{
                           return(
                                <div key={index} className='user-message-wrapper d-flex'>
                                    
                                    <div className='user-message-container'>
                                        {chat.message}
                                    </div>
                                </div>
                           )
                       }
                       
                   })
               }
                {loading && <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
                </div>}
           </div>
          <br />
           <div className='d-flex justify-between'>
               <div className='input-container'>
                    <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            getResponse();
                        }
                    }}
                    />
                </div>
               <div 
               onClick={() => getResponse()}
               className='send-conatiner'
               >
                   <img src={send} alt="send"/>
               </div>
           </div>
       </div>
    );
}

export default ChatArea;
