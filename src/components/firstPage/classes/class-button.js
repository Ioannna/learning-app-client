import { useState } from "react"
import { Socket } from "socket.io-client"

const ClassButton = ({ socket, className }) => {
    const enterClass = () => {
        socket.emit("enter-class", className)
    }

    return (
        <div>
            <div className="card mt15 p15">
                <button onClick={enterClass}>{className}</button>
            </div>
        </div>
    )
}

export default ClassButton