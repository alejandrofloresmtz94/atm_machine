import React from "react";
import Header from "../components/Header";
import credit_cards from '@common/assets/images/creditcard_sprite.png';
import systems from '@common/assets/images/systems.png';

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
                        <div className="h-[500px] w-full bg-iceberg border-8 border-timberwolf text-white font-main grow-0 flex flex-col justify-between">
                            <span className="text-center text-2xl">Welcome to the ATM!</span>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                </div>
                                <div className="flex flex-col">
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>

                                </div>
                            </div>
                        </div>
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
                <div className="flex flex-row justify-end">
                </div>
            </div>
        </>
    );
};

export default ATM;