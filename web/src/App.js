import {useState} from 'react';
import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './styles/api/api';
import {Menu} from './components/Menu/Menu';
import { Chat } from './components/Chat/Chat';

function App() {

  const[input, setInput] = useState("");
  const[chatlog, setChatlog] = useState([{
    user:"gpt",
    message:"Como posso te ajudar hoje?"

  }]);

  async function handleSubmit(e) {
      e.preventDefault();

      let response = await makeRequest({prompt: input});
      
      response = response.data.split('\n').map(line => { <p>{line}</p> });

      setChatlog([...chatlog, {
        user: 'me',
        message: `${input}`
      },
      {
        user: 'gpt',
        message: response
      }
    ]);

    setInput("");
  }

  return (
      <div className="App">
        <Menu></Menu>
        <section className='chatbox'>

            <div className='chat-log'>
              {chatlog.map((message, index) => <Chat key={index} message={message}></Chat>)}
            </div>
            <div className='chat-input-holder'>
              <form onSubmit={handleSubmit}>
                  <input row='1' className='chat-input-textarea' value={input} onChange={ e => setInput(e.target.value)}></input>
              </form>
            </div>
        </section>
      </div>
  );
}

export default App;
