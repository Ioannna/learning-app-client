import { useEffect, useState } from "react";

const ContentPLace = ({ socket }) => {
    const [part, setPart] = useState(null);

    useEffect(() => {
        socket.on("displayPartS", part => {
          setPart(part);
        });
      }, []);

    return (
        <div className="content-place">
            {part}
        </div>
    )
}

export default ContentPLace