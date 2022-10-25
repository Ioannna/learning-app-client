import { useEffect, useState } from "react"
import Lesson from "./lesson"

const Semester = ({ semester, socket, lessons }) => {
    const displayLesson = () => {
        socket.emit('displayLesson', semester)
    }
    //console.log(`lessons from mongodb: ${lessons}`)
   

    return (
        <div>
            <div className="card mt15 p15">
                {lessons.map((lesson, index) => (
                    <button onClick={displayLesson} key={`message-${index}`}>{lesson.name}</button>
                ))}
            </div>
        </div>
    )
    
}


export default Semester