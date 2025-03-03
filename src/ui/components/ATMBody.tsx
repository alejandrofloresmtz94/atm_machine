import React from "react";
import systems from '@common/assets/images/systems.png';
import sticker_graf from '@common/assets/images/sticker_graf.png';
import AcceptedCardsBar from "./AcceptedCardsBar";
import Screen from "./Screen";
import ButtonsColumn from "./ButtonsColumn";
import Position from "../../common/enums/position";

const ATMBody: React.FC = () => {
    return (
        <div className="bg-alabaster w-10/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 h-8/12 flex flex-col relative">
            <div className="h-3 w-full bg-philippine-silver" />
            <AcceptedCardsBar />
            <div className="flex flex-row justify-center">
                <ButtonsColumn position={Position.Left} />
                <div className="flex flex-col w-8/12">
                    <Screen />
                    <img src={systems} alt="systems" className="h-[6px] w-[54px] aspect-auto self-end mt-2" />
                </div>
                <ButtonsColumn position={Position.Right} />
            </div>
            <img src={sticker_graf} alt="sticker and graffiti" className="w-4/12 absolute bottom-2/12 left-1/12" />
        </div>
    );
};

export default ATMBody;