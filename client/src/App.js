import logo from './logo.svg';
import './App.css';
import react, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import $ from 'jquery';

const ENDPOINT = 'https://thera-server.herokuapp.com/'
let socket;
function App() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [joined, setJoined] = useState(false)
  const [message, setMessage] = useState('')

  //moi lan reload thi message mat het---y tuong cua socket, va component trong react
  const [messages, setMessages] = useState([])

  function handleJoin(e) {
    e.preventDefault()
    setJoined(true)
    let data = { name, room }
    socket = io.connect(ENDPOINT)
    socket.emit('join', data)
  }


  function scrollSmoothToBottom(id) {
    if (joined) {
      var div = document.getElementById(id);

      // $('#' + id).animate({
      //     scrollTop: div.scrollHeight - div.clientHeight
      // }, 500);
      div.scrollTop = div.scrollHeight;
    }

  }


  function handleLeave() {
    socket.emit('leave', { name, room })
    socket.disconnect()
    socket.off()
    setJoined(false)
  }
  function sendMessage(e) {
    e.preventDefault()
    socket.emit('send-message', { message, name, room })
    setMessage('')
  }

  useEffect(() => {
    console.log("called")
    if (socket) {
      socket.on('send-message', data => {
        if (data.room === room) {
          setMessages([...messages, { name: data.name, message: data.message }])
        }
      })
    }
  }, [socket, message])


  function messageSection() {
    return messages.map((ms, i) => {
      if (ms.name === name) {
        return (
          <div key={i} className="my-message"   >
            <h3>&nbsp;you</h3>
            <h4 className="message-text">{ms.message} </h4>
          </div>
        )
      }
      return (
        <div key={i} className="message">
          <h3>{ms.name}:</h3>
          <h4 className="message-text">{ms.message}</h4>
        </div>
      )
    })
  }
  function test() {
    scrollSmoothToBottom("message-container")
  }
  return (
    <div className="container">
      {!joined &&
        <form className="join-form" onSubmit={handleJoin}>

          <h1>CHAT</h1>
          <input className="input" type="text" placeholder="name" onChange={(e) => setName(e.target.value)} required />
          <input className="input" type="text" placeholder="room" onChange={(e) => setRoom(e.target.value)} required />
          <button>Join</button>
        </form>
      }

      {joined &&
        <>
          <form className="chat-box" onSubmit={sendMessage}>
            <div className="title" >
              <h2>room: {room}</h2>
              <h2>you: {name}</h2>
            </div>
            <div id="message-container" className="message-container">
              {messageSection()}
            </div>
            <input className="input-text" type="text" placeholder="message" onChange={(e) => setMessage(e.target.value)} required value={message} />
          </form>

          <button className="button-leave" onClick={handleLeave}>leave this shit</button>
          <button onClick={test}>test</button>
        </>

      }
    </div>
  )
}

export default App;
