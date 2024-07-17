import React from "react";

interface AuthGraphicProps{
    graphicUrl: string;
}
const AuthGraphic: React.FC <AuthGraphicProps>= ({graphicUrl}) => {
    return(
        <div className="flex justify-center items-center w-full h-full">
            <img src={graphicUrl} alt="" className="w-[80%] h-[80%]"/>
        </div>
    )
}

export default AuthGraphic