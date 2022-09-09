import { useEffect, useState } from "react"

const Semester = ({ name, socket, lessons }) => {
    console.log(`This are the lessons in semester: ${lessons}`)


    return (
        <div>
            <h1>{name}</h1>
            <div className="card mt15 p15">
            {
                lessons.map((lesson, index) => (
                    <button key={`message-${index}`}>{lesson.lesson}</button>
                  ))
            }
            </div>
           
            
        </div>
    )
    
}


export default Semester