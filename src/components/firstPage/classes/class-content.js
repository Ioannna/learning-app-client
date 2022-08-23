import Header from "../../header"
import Menu from "../../menu"
import Lesson from "./semesters/lesson"
import Semester from "./semesters/semester"

const ClassContent = ({ data, socket }) => {

        return (
            <div>
                <Header />
            
    
                { data === "Clasa a 9-a"
                    ? ( <div>
                            <h3 className="card mt15 p15">{data}</h3>
                            <div className="d-flex">
                                <Semester name={"Semestrul 1"} socket={socket}/>
                                <Semester name={"Semestrul 2"} socket={socket}/>
                            </div>
                        </div>)
                    : <Lesson lesson={data} />
                }
            </div>
        )
}

export default ClassContent