import { useEffect, useState } from "react"
import ClassButton from "./firstPage/classes/class-button"

const FirstPage = ({ socket }) => {

    return (
        <div className="classes">
            <div className="d-flex">
                <ClassButton socket={socket} className={"Clasa a 9-a"}/>
                <ClassButton socket={socket} className={"Clasa a 10-a"}/>
                <ClassButton socket={socket} className={"Clasa a 11-a"}/>
                <ClassButton socket={socket} className={"Clasa a 12-a"}/>
            </div>
        </div>
    )
}

export default FirstPage