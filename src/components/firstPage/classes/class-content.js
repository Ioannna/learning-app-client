import { useEffect } from "react"
import Header from "../../header"
import Menu from "../../menu"
import Lesson from "./semesters/lesson"
import Semester from "./semesters/semester"

const ClassContent = ({ data, socket, lessons }) => {
    console.log(`This are the lessons in class-content: ${lessons}`)

        return (
            <div>
                <Header />
            
    
                { data === "Clasa a 9-a"
                    ? ( <div>
                            <h3 className="card mt15 p15">{data}</h3>
                            <div className="d-flex">
                                <div className="card mt15 p15"><Semester  name={"Semestrul 1"} socket={socket} lessons={lessons}/></div>
                                <div className="card mt15 p15"><Semester  name={"Semestrul 2"} socket={socket} lessons={lessons}/></div>
                            </div>
                        </div>)
                    : <Lesson socket={socket} lesson={data} />
                }
            </div>
        )
}

export default ClassContent