import React, { useCallback } from "react";
import ButtonProps from "../../common/interfaces/ButtonProps.interface";
import useGlobalStore from "../../store/globalStore";

const Button: React.FC<ButtonProps> = ({ position, action }) => {
    const onClickButton = useCallback(() => {
        if (action)
            useGlobalStore.getState()[action]();
    }, [action]);

    return (
        <div className={`w-full h-auto flex flex-row items-center button-container ${position} ${action}`}>
            <button type="button" className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" onClick={onClickButton} />
            <div className="w-2/12 h-[5px] bg-philippine-gray" />
        </div>
    );
};

export default Button;