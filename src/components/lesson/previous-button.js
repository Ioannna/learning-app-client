import { useEffect, useState } from "react";

const PreviousButton = ({ socket }) => {
    const [prevLessonNumber, setPrevLessonNumber] = useState(1);
    const [prevPartNumber, setPrevPartNumber] = useState(1);

    const displayPrevContent = () => {
        socket.emit("displayContent", { lessonNumber: prevLessonNumber, partNumber: prevPartNumber }  )

        console.log(`Prev button. Lesson number: ${prevLessonNumber}. Part number: ${prevPartNumber}`)
    }

    useEffect(() => {
        socket.on("currentInfo", ({ lessonNumber, partNumber }) => {
            if (partNumber === 1) {
                if(lessonNumber === 1) {
                    setPrevLessonNumber(3)
                    setPrevPartNumber(3)
                } else {
                    setPrevLessonNumber(lessonNumber - 1)
                    setPrevPartNumber(3)    
                }
            } else {
                setPrevLessonNumber(lessonNumber)
                setPrevPartNumber(partNumber - 1)
            }
          
          console.log(`current info. lesson number ${lessonNumber}. part number ${partNumber}`)
          
        });
      }, []);

    return (
        <div>
            <button onClick={displayPrevContent}>Înapoi</button>
        </div>
    )
}

export default PreviousButton
