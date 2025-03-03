import React, { useMemo } from "react";
import useGlobalStore from "../../store/globalStore";
import ScreenConfiguration from "../../common/constants/screenConfiguration";
import ScreenType from "../../common/enums/screenType";
import ScreenText from "./ScreenText";
import Position from "../../common/enums/position";
import ScreenInput from "./ScreenInput";
import { maskString } from "../../common/lib/utils";

const Screen: React.FC = () => {

    const selectedScreen = useGlobalStore((state) => state.selectedScreen);
    const currentUser = useGlobalStore((state) => state.currentUser);
    const currentAction = useGlobalStore((state) => state.currentAction)
    const currentError = useGlobalStore((state) => state.currentError);

    const validInputScreens = useMemo(() => {
        return [ScreenType.Login, ScreenType.CustomInput];
    }, []);

    const screenCopys = useMemo(() => {
        return ScreenConfiguration[selectedScreen];
    }, [selectedScreen]);

    const screenTitle = useMemo(() => {
        const originalTitle = screenCopys.title;
        switch (selectedScreen) {
            case ScreenType.Main:
                return originalTitle.replace("{name}", currentUser?.name || "");
            case ScreenType.Balance: {
                const currentBalance = currentUser?.balance;
                if (currentBalance === undefined) return originalTitle;
                const maskedBalance = maskString(currentBalance.toString(), ScreenType.Balance);
                return originalTitle.replace("{balance}", maskedBalance || "");
            }
            case ScreenType.GeneralError: {
                if (currentError) {
                    return originalTitle.replace("{errorMsg}", currentError);
                } else {
                    return originalTitle;
                }
            }
            case ScreenType.CustomInput: {
                if (!currentAction) return originalTitle
                return originalTitle.replace("{action}", currentAction)
            }
            default:
                return originalTitle
        }
    }, [selectedScreen, screenCopys, currentUser, currentError, currentAction]);

    return (
        <div className="h-[500px] w-full bg-iceberg border-8 border-timberwolf text-white font-main flex flex-col justify-between py-5">
            <span className="self-center text-center text-3xl w-10/12 h-fit">{screenTitle}</span>
            {validInputScreens.includes(selectedScreen) &&
                <ScreenInput selectedScreen={selectedScreen} />
            }
            <div className="flex flex-row justify-between">
                <div className="flex flex-col-reverse gap-10 w-5/12">
                    {
                        screenCopys.buttons.left.map((button) => <ScreenText key={button.label} label={button.label} position={Position.Left} />)
                    }
                </div>
                <div className="flex flex-col-reverse gap-10 w-5/12">
                    {
                        screenCopys.buttons.right.map((button) => <ScreenText key={button.label} label={button.label} position={Position.Right} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Screen;