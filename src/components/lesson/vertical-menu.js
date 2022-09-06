const VerticalMenu = ({ socket }) => {

        const displayPart = ({ lessonNumber, partNumber}) => {
            socket.emit("displayContent",{ lessonNumber: lessonNumber, partNumber: partNumber } )
            socket.emit("currentInfo",{ lessonNumber: lessonNumber, partNumber: partNumber } )
            console.log(lessonNumber)
            console.log(partNumber)

  
    }

    return (
        <div className="vertical-menu">
            <div className="text">
                <div>Lectia 1</div>
                <button onClick={() => displayPart({ lessonNumber: 1, partNumber: 1 })}>Partea 1</button>
                <button onClick={() => displayPart({ lessonNumber: 1, partNumber: 2 })}>Partea 2</button>
                <button onClick={() => displayPart({ lessonNumber: 1, partNumber: 3 })}>Quiz</button>

                <div>Lectia 2</div>
                <button onClick={() => displayPart({ lessonNumber: 2, partNumber: 1 })}>Partea 1</button>
                <button onClick={() => displayPart({ lessonNumber: 2, partNumber: 2 })}>Partea 2</button>
                <button onClick={() => displayPart({ lessonNumber: 2, partNumber: 3 })}>Quiz</button>

                <div>Lectia 3</div>
                <button onClick={() => displayPart({ lessonNumber: 3, partNumber: 1 })}>Partea 1</button>
                <button onClick={() => displayPart({ lessonNumber: 3, partNumber: 2 })}>Partea 2</button>
                <button onClick={() => displayPart({ lessonNumber: 3, partNumber: 3 })}>Quiz</button>
            </div>
         
        </div>
    ) 
}

export default VerticalMenu