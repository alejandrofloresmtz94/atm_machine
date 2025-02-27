import React from "react";
import credit_cards from '@common/assets/images/creditcard_sprite.png';
import Header from "../components/Header";

const ATM: React.FC = () => {
    console.log(credit_cards);
    return (
        <>
            <Header />
            <div className="bg-alabaster w-1/4 h-8/12 flex flex-col">
                <div className="h-3 w-full bg-philippine-silver" />
                <div className="flex flex-row justify-center h-auto">
                    <div className={`h-5 w-5 bg-[url('${credit_cards}')]`}></div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col justify-end gap-10">
                        <div>
                            <div className="bg-custom-gray" />
                        </div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div className="flex flex-col justify-between h-[500px] w-2/3 py-10 bg-iceberg border-8 border-timberwolf text-white font-main">
                        <span className="w-100 text-center text-2xl">Welcome to the ATM!</span>
                    </div>
                    <div className="flex flex-col justify-end">1</div>
                </div>
            </div>
        </>
    );
};

export default ATM;