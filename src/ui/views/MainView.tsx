import React from "react";
import atm_sign from '@common/assets/atm_sign.png';
import graffiti from '@common/assets/graffiti.png';

const MainView: React.FC = () => {

    return (
        <div className="w-screen h-screen bg-purple-mountain-majesty flex flex-col justify-end items-center">
            <div className="w-[28%] h-[20%] rounded-xl bg-green-blue relative">
                <img src={atm_sign} alt="" className="h-[80%] aspect-auto absolute left-2/12 top-1/12" />
                <img src={graffiti} alt="" className="h-[40%] aspect-auto absolute top-2/12 right-1/12" />
            </div>
            <div className="bg-alabaster w-1/4 h-8/12 flex flex-col">
                <div className="h-3 w-full bg-philippine-silver"></div>
            </div>
        </div>
    );
};

export default MainView;