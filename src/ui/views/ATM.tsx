import React from "react";
import Header from "../components/Header";
import systems from '@common/assets/images/systems.png';
import sticker_graf from '@common/assets/images/sticker_graf.png';
import CardSelector from "../components/CardSelector";
import Screen from "../components/Screen";

const ATM: React.FC = () => {
    return (
        <>
            <Header />
            <div className="bg-alabaster w-[26%] h-8/12 flex flex-col relative">
                <div className="h-3 w-full bg-philippine-silver" />
                <CardSelector />
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col justify-end gap-10 grow pb-5">
                        <div className="w-full h-auto flex flex-row items-center justify-end">
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                        </div>
                        <div className="w-full h-auto flex flex-row items-center justify-end">
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                        </div>
                        <div className="w-full h-auto flex flex-row items-center justify-end">
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                        </div>
                        <div className="w-full h-auto flex flex-row items-center justify-end">
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Screen />
                        <img src={systems} alt="" className="h-[6px] w-[54px] aspect-auto self-end mt-2" />
                    </div>
                    <div className="flex flex-col justify-end gap-10 grow pb-5">
                        <div className="w-full h-auto flex flex-row items-center justify-start">
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                        </div>
                        <div className="w-full h-auto flex flex-row items-center justify-start">
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                        </div>
                        <div className="w-full h-auto flex flex-row items-center justify-start">
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                        </div>
                        <div className="w-full h-auto flex flex-row items-center justify-start">
                            <div className="w-2/12 h-[5px] bg-philippine-gray" />
                            <div className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" />
                        </div>
                    </div>
                </div>
                <img src={sticker_graf} alt="sticker_graf" className="absolute bottom-1/4 left-1/12" />
            </div>
        </>
    );
};

export default ATM;