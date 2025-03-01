import React from "react";
import atm_sign from '@common/assets/images/atm_sign.png';
import graffiti from '@common/assets/images/graffiti.png';

const Header: React.FC = () => {
    return (
        <div className="w-[30%] h-[20%] rounded-2xl bg-green-blue relative">
            <img src={atm_sign} alt="" className="h-[80%] aspect-auto absolute left-2/12 top-1/12" />
            <img src={graffiti} alt="" className="h-[40%] aspect-auto absolute top-2/12 right-1/12" />
        </div>
    )
};

export default Header;