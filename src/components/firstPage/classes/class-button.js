
const ClassButton = ({ socket, categoryName }) => {
    const enterClass = () => {
        socket.emit("enter-class", categoryName)
    }

    return (
        <div>
            <div className="card mt15 p15">
                <button onClick={enterClass}>{categoryName}</button>
            </div>
        </div>
    )
}

export default ClassButton