import { useEffect, useState } from "react";
import Parser from 'html-react-parser';

const ContentPLace = ({ socket }) => {
    const [part, setPart] = useState('<iframe width="560" height="315" src="https://www.youtube.com/embed/pxIbOwIvKOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    const iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/pxIbOwIvKOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    console.log(`This is part ${part}`)
    useEffect(() => {
        socket.on("displayPartS", part => {
          setPart(part);
        });
      }, []);

    return (
        <div className="content-place">
            {Parser(part)}
        </div>
    )
}

export default ContentPLace