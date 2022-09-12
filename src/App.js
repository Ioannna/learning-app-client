import { io } from "socket.io-client"
import { useEffect, useState } from "react"
import Header from "./components/header"
import FirstPage from "./components/first-page"
import Footer from "./components/footer"
import ClassContent from "./components/firstPage/classes/class-content"

function App() {
  const [connectedSocket, setConnectedSocket] = useState()
  const [className, setClassName] = useState()
  const [lessons, setLessons] = useState()
  const [learningMode, setLearningMode] = useState(false)

  useEffect (() => {
    const socket = io()

    socket.on("connected", () => {
      setConnectedSocket(socket)
    })

    socket.on("data", (receivedData) => {
      setClassName(receivedData)
      console.log(receivedData)
    })
    
    socket.on('send-lessons', lessonsReceived => {
      setLessons(lessonsReceived)
      }
    )

    socket.on('displayLessonS', () => {
      setLearningMode(true)
    })

  }, [])

  if (!connectedSocket) {
    return <h1>Waiting for connection...</h1>
  }

   if (className) {
    return (
      <ClassContent className={className} socket={connectedSocket} lessons={lessons} learningMode={learningMode}/>
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
