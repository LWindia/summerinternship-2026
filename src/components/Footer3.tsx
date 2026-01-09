import React from "react";
import Image from "next/image";

const Footer3 = ()=>{

    return (
        <>
        <div className="w-full mx-auto relative">
                <div className="relative w-full" style={{ aspectRatio: '1920/400', minHeight: '200px' }}>
                    <Image 
                        src="/assets/footerImage.jpg" 
                        alt="Footer"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        loading="lazy"
                        priority={false}
                    />
                </div>
        </div>
        
        </>
    )

}

export default Footer3;