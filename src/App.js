import { io } from "socket.io-client"
import { useEffect, useState } from "react"
import Header from "./components/header"
import FirstPage from "./components/first-page"
import Footer from "./components/footer"
import ClassContent from "./components/firstPage/classes/class-content"

function App() {
  const [connectedSocket, setConnectedSocket] = useState()
  const [categoryName, setCategoryName] = useState()
  const [lessons, setLessons] = useState()
  const [categories, setCategories] = useState()
  const [learningMode, setLearningMode] = useState(false)

  useEffect (() => {
    const socket = io()

    socket.on("connected", () => {
      setConnectedSocket(socket)
    })

    socket.on("data", (receivedData) => {
      setCategoryName(receivedData)
      console.log(receivedData)
    })
    
    socket.on('send-lessons', lessonsReceived => {
      setLessons(lessonsReceived)
      console.log(`these are the lessons from db, "send-lessons" event, received in App: ${lessonsReceived}`)
      }
    )

    socket.on('send-categories', categoriesReceived => {
      setCategories(categoriesReceived)
      console.log(`these are the categories from db received in App: ${categoriesReceived}`)
      }
    )

    socket.on('displayLessonS', () => {
      setLearningMode(true)
    })

  }, [])

  console.log(`these are the lessons from db received in App: ${lessons}`)

  if (!connectedSocket) {
    return <h1>Waiting for connection...</h1>
  }

   if (categoryName) {
     console.log(categoryName)
    return (
      <ClassContent categoryName={categoryName} socket={connectedSocket} lessons={lessons} categories={categories} learningMode={learningMode}/>
    )} else {
    return (
      <div>
        <Header />
        <FirstPage socket={connectedSocket} categories={categories} /> 
        <Footer />
      </div>
    )}

}

export default App;
