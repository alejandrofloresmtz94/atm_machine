import React from "react";
import ScreenTextProps from "../../common/interfaces/ScreenText.interface";

const ScreenText: React.FC<ScreenTextProps> = ({ label, position }) => {
    return (
        <div className={`flex flex-row h-[50px] items-center justify-end gap-5 text-button ${position}`}>
            <span className="text-sm">{label}</span>
            <div className="w-2/12 h-[5px] bg-white" />
        </div>
    );
};

export default ScreenText;