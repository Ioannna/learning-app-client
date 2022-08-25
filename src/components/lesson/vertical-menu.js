const VerticalMenu = () => {
    return (
        <div className="vertical-menu">
            <div className="text">
                <div>Lectia 1</div>
                <button onClick={displayPart1}>Partea 1</button>
                <button>Partea 2</button>
                <button>Quiz</button>

                <div>Lectia 2</div>
                <button>Partea 1</button>
                <button>Partea 2</button>
                <button>Quiz</button>

                <div>Lectia 3</div>
                <button>Partea 1</button>
                <button>Partea 2</button>
                <button>Quiz</button>
            </div>
         
        </div>
    ) 
}

export default VerticalMenu