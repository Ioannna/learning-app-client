import ContentPLace from "../../../lesson/content-place"
import NextButton from "../../../lesson/next-button"
import PreviousButton from "../../../lesson/previous-button"
import VerticalMenu from "../../../lesson/vertical-menu"

const Lesson = ({ socket, lesson }) => {
    return (
        <div>
            <div className="d-flex">
                <VerticalMenu socket={socket}/>
                <div className="section-2">
                    <ContentPLace socket={socket} />
                    <div className="d-flex buttons">
                        <PreviousButton />
                        <NextButton />
                     </div>
                </div>
            </div>  
        </div>
    )
}

export default Lesson