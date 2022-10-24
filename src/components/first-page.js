import { useEffect, useState } from "react"
import ClassButton from "./firstPage/classes/class-button"

const FirstPage = ({ socket, categories }) => {
    

    return (
        <div className="classes">
            <div className="d-flex">
            {categories.map((category, index) => (
                <ClassButton key={index} socket={socket} categoryName={category.name}/>
            ))}
            </div>
        </div>
    )
}

export default FirstPage