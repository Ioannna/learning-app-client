import { useEffect } from "react"
import Header from "../../header"
import Menu from "../../menu"
import Lesson from "./semesters/lesson"
import Semester from "./semesters/semester"

const ClassContent = ({ categoryName, socket, lessons, categories, learningMode }) => {
    console.log(`This are the categories in class-content: ${categories}`)

        return (
            <div>
                <Header />
                <h3 className="card mt15 p15">{categoryName}</h3>
                {(learningMode) 
                    ? (
                        <div>
                            <Lesson socket={socket} lessons={lessons} />
                        </div>
                        )   
                    : (
                        <div>
                            <div className="d-flex">
                                <div className="card mt15 p15"><Semester semester={"Semester 1"} socket={socket} lessons={lessons}/></div>
                            </div>
                        </div>
                        )
                }
    
            </div>
        )
}

export default ClassContent