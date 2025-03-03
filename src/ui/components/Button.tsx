import React, { useCallback } from "react";
import ButtonProps from "../../common/interfaces/Button.interface";
import useGlobalStore from "../../store/globalStore";
import ButtonActionsWithPayload from "../../common/enums/buttonActionsWithPayload";

const Button: React.FC<ButtonProps> = ({ position, action, payload }) => {
    const onClickButton = useCallback(() => {
        if (!action) return;

        if (action in ButtonActionsWithPayload && payload) {
            useGlobalStore.getState()[action](payload);
        } else {
            useGlobalStore.getState()[action]({});
        }
    }, [action, payload]);

    return (
        <div className={`w-full h-auto flex flex-row items-center button-container ${position} ${action}`}>
            <button type="button" className="w-8/12 h-[50px] border-y-4 border-t-light-gray border-b-philippine-gray rounded-xl bg-custom-gray" id={action} title="atm-button" onClick={onClickButton} />
            <div className="w-2/12 h-[5px] bg-philippine-gray" />
        </div>
    );
};

export default Button;