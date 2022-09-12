import { useEffect, useState } from "react"
import Lesson from "./lesson"

const Semester = ({ semester, socket, lessons }) => {
    const displayLesson = () => {
        socket.emit('displayLesson', semester)
    }


    return (
        <div>
            <h1>{semester}</h1>
            <div className="card mt15 p15">
                {lessons.map((lesson, index) => (
                    <button onClick={displayLesson} key={`message-${index}`}>{lesson.lesson}</button>
                ))}
            </div>
        </div>
    )
    
}


export default Semester