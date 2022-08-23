import ContentPLace from "../../../lesson/content-place"
import NextButton from "../../../lesson/next-button"
import PreviousButton from "../../../lesson/previous-button"
import VerticalMenu from "../../../lesson/vertical-menu"

const Lesson = ({ lesson }) => {
    return (
        <div>
            <div className="d-flex">
                <VerticalMenu />
                <div className="section-2">
                    <ContentPLace />
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