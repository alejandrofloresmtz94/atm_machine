import React from "react";
import atm_sign from '@common/assets/images/atm_sign.png';
import graffiti from '@common/assets/images/graffiti.png';

const ATMHeader: React.FC = () => {
    return (
        <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 h-fit py-10 rounded-2xl bg-green-blue relative flex flex-row justify-center items-center">
            <img src={atm_sign} alt="ATM Sign" className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-8/12 aspect-auto self-center" />
            <img src={graffiti} alt="Graffiti" className="w-5/12 sm:w-5/12 md:w-5/12 lg:w-6/12 xl:w-6/12 aspect-auto absolute top-2/12 lg:top-3/12 xl:top-2/12 right-1/12" />
        </div>
    )
};

export default ATMHeader;