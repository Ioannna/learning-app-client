import ContentPLace from "../../../lesson/content-place"
import NextButton from "../../../lesson/next-button"
import PreviousButton from "../../../lesson/previous-button"
import VerticalMenu from "../../../lesson/vertical-menu"

const Lesson = ({ socket, lessons }) => {
    return (
        <div>
            <div className="d-flex">
                <VerticalMenu socket={socket} lessons={lessons}/>
                <div className="section-2">
                    <ContentPLace socket={socket} />
                    <div className="d-flex buttons">
                        <PreviousButton socket={socket}/>
                        <NextButton socket={socket}/>
                     </div>
                </div>
            </div>  
        </div>
    )
}

export default Lesson