import { useEffect } from "react"
import Header from "../../header"
import Menu from "../../menu"
import Lesson from "./semesters/lesson"
import Semester from "./semesters/semester"

const ClassContent = ({ className, socket, lessons, learningMode }) => {
    console.log(`This are the lessons in class-content: ${lessons}`)

        return (
            <div>
                <Header />
                <h3 className="card mt15 p15">{className}</h3>
                {(learningMode) 
                    ? (
                        <div>
                            <Lesson socket={socket} />
                        </div>
                        )   
                    : (
                        <div>
                            <div className="d-flex">
                                <div className="card mt15 p15"><Semester  semester={"Semestrul 1"} socket={socket} lessons={lessons}/></div>
                                <div className="card mt15 p15"><Semester  semester={"Semestrul 2"} socket={socket} lessons={lessons}/></div>
                            </div>
                        </div>
                        )
                }
    
            </div>
        )
}

export default ClassContent