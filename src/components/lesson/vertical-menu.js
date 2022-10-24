const VerticalMenu = ({ socket, lessons }) => {

        const displayPart = (partContent) => {
            socket.emit("displayContent", (partContent))
            //console.log(partContent)
    }

    return (
        <div className="vertical-menu">
            <div className="text">
            <div className="card mt15 p15">
                {lessons.map((lesson, index) => (
                    <div>{lesson.name}
                      {lesson.parts.map((part, index) => (
                          <button onClick={() => displayPart(part.name)}>{part.name}</button>
                      ))}
                     <button onClick={() => displayPart(lesson.quiz.name)}>{lesson.quiz.name}</button>
                      
                    </div>
                ))}
            {/* </div>
                <div>{}</div>
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
             */}
            </div>
         </div>
        </div>
    ) 
}

export default VerticalMenu