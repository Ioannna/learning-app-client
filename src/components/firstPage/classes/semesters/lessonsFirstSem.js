import { useEffect, useState } from "react"
import { Socket } from "socket.io-client"

const LessonsFirstSemester = ({ socket, lessons }) => {


    const displayLesson = () => {
        socket.emit("display-lesson")
    }
    return (
        
        <div>
            {console.log(`lessons in return: ${lessons}`)}
            <div className="card mt15 p15">
                {/* {
                //     lessons.map((lesson, index) => (
                //         <div className="card mt15 p15" key={`lesson-${index}`}>
                //         {`hello ${lesson}`}
                //         </div>
                        
                //     ))
                // }   */}
                <button onClick={displayLesson}>Lectia 1</button>
                <button onClick={displayLesson}>Lectia 2</button>
                <button onClick={displayLesson}>Lectia 3</button>
            </div>
        </div>
    )


}

export default LessonsFirstSemester