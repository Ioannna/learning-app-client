import { useEffect, useState } from "react";

const NextButton = ({ socket }) => {
    const [nextLessonNumber, setNextLessonNumber] = useState(1);
    const [nextPartNumber, setNextPartNumber] = useState(1);

    const displayNextContent = () => {
        socket.emit("displayNextLesson", { lessonNumber: nextLessonNumber, partNumber: nextPartNumber }  )
            setNextLessonNumber(nextLessonNumber)
            setNextPartNumber(nextPartNumber + 1)

        console.log(`Next button. Lesson number: ${nextLessonNumber}. Part number: ${nextPartNumber}`)
    }

    useEffect(() => {
        socket.on("currentInfo", ({ lessonNumber, partNumber }) => {
            if (partNumber === 3) {
                if(lessonNumber === 3) {
                    setNextLessonNumber(1)
                    setNextPartNumber(1)
                } else {
                    setNextLessonNumber(lessonNumber + 1)
                    setNextPartNumber(1)    
                }
            } else {
                setNextLessonNumber(lessonNumber)
                setNextPartNumber(partNumber + 1)
            }
          
          console.log(`current info. lesson number ${lessonNumber}. part number ${partNumber}`)
          
        });
      }, []);

    return (
        <div>
            <button onClick={displayNextContent}>Înainte</button>
        </div>
    )
}

export default NextButton