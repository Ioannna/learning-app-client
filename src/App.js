import { io } from "socket.io-client"
import { useEffect, useState } from "react"

function App() {
  const [connectedSocket, setConnectedSocket] = useState()

  useEffect (() => {
    const socket = io()

    socket.on("connected", () => {
      setConnectedSocket(socket)
    })
  }, [])

  if (!connectedSocket) {
    return <h1>Waiting for connection...</h1>
  }

  return (
    <div>
      Hello
    </div>
  );
}

export default App;
