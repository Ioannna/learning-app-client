import { io } from "socket.io-client"
import { useEffect, useState } from "react"
import Header from "./components/header"
import FirstPage from "./components/first-page"
import Footer from "./components/footer"
import ClassContent from "./components/firstPage/classes/class-content"
import Lesson from "./components/firstPage/classes/semesters/lesson"

function App() {
  const [connectedSocket, setConnectedSocket] = useState()
  const [data, setData] = useState()
  const [lessons, setLessons] = useState()

  useEffect (() => {
    const socket = io()

    socket.on("connected", () => {
      setConnectedSocket(socket)
    })

    socket.on("data", (receivedData) => {
      setData(receivedData)
      console.log(receivedData)
    })

    socket.on('send-lessons', lessonsReceived => {
      setLessons(lessonsReceived)
      }
    )

  }, [])

  if (!connectedSocket) {
    return <h1>Waiting for connection...</h1>
  }

   if (data) {
    return (
      <ClassContent data={data} socket={connectedSocket} lessons={lessons}/>
    )} else {
      return (
        <div>
          <Header />
          <FirstPage socket={connectedSocket} /> 
          <Footer />
        </div>
    )}
}

export default App;
