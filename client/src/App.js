import logo from './logo.svg';
import './App.css';
import react, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

const ENDPOINT = 'http://localhost:5000'
let socket;
function App() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [joined, setJoined] = useState(false)

  function handleJoin(e) {
    e.preventDefault()
    setJoined(true)
    let data = { name, room }
    // socket.emit('join', data)
    // console.lo
    // socket = io(ENDPOINT);
    socket = io.connect(ENDPOINT)

    // fetch(ENDPOINT)
    socket.emit('join', data)
    // console.log(socket)
  }

  function handleLeave() {
    setJoined(false)
    // socket.emit('disconnect')
    socket.disconnect()
    // io.on("disconnect")
    // socket.off()
  }

  return (
    <div>
      {!joined &&
        <form onSubmit={handleJoin}>
          <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="room" onChange={(e) => setRoom(e.target.value)} required />
          <button>join</button>
        </form>
      }

      {joined &&
        <>
          <form className="chat-box">
            //info
            //chat content
            //input messages

          </form>


          <button onClick={handleLeave}>leave this shit</button>
        </>

      }
    </div>
  )
}

export default App;
