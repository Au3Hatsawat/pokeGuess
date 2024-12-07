import { useEffect, useState } from "react";

const Types = (prop) => {
    const src = `/src/assets/types/${prop?.type}.png`;

    return (
        <div className='scale-75 hover:scale-90 transition-all'>
                    <img  src={src} />
        </div>
    )
}

export default Types;