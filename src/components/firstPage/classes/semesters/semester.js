import { useEffect, useState } from "react"
import LessonsFirstSemester from "./lessonsFirstSem"

const Semester = ({ name, socket }) => {
    const [lessons, setLessons] = useState()

    useEffect(() => {
        socket.emit("first-semester", name)

        socket.on("lessons-first-semester", (lessonsFirstSemester) => {
            setLessons(lessonsFirstSemester)
        })
    }, [])
    
    return (
        <div >
            <h2>{name}</h2>
             <LessonsFirstSemester socket={socket} lessons={lessons}/>
        </div>
    )

}

export default Semester