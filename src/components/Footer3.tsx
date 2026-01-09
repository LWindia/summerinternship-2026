import React from "react";
import Image from "next/image";

const Footer3 = ()=>{

    return (
        <>
        <div className="w-full h-auto mx-auto relative">
                <Image 
                    className="w-full h-auto object-cover" 
                    src="/assets/footerImage.jpg" 
                    alt="Footer"
                    width={1920}
                    height={400}
                    sizes="100vw"
                    loading="lazy"
                    priority={false}
                />
        </div>
        
        </>
    )

}

export default Footer3;