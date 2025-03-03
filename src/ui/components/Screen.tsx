import React, { useMemo } from "react";
import useGlobalStore from "../../store/globalStore";
import ScreenConfiguration from "../../common/constants/screenConfiguration";
import ScreenType from "../../common/enums/screenType";
import ScreenText from "./ScreenText";
import Position from "../../common/enums/position";
import ScreenInput from "./ScreenInput";

const Screen: React.FC = () => {

    const selectedScreen = useGlobalStore((state) => state.selectedScreen);

    const validInputScreens = useMemo(() => {
        return [ScreenType.Login, ScreenType.Deposit, ScreenType.Withdraw, ScreenType.CustomInput];
    }, []);

    const screenCopys = useMemo(() => {
        return ScreenConfiguration[selectedScreen];
    }, [selectedScreen]);

    return (
        <div className="h-[500px] w-full bg-iceberg border-8 border-timberwolf text-white font-main flex flex-col justify-between py-5">
            <span className="self-center text-center text-3xl w-10/12 h-fit">{screenCopys.title}</span>
            {validInputScreens.includes(selectedScreen) &&
                <ScreenInput selectedScreen={selectedScreen} />
            }
            <div className="flex flex-row justify-between">
                <div className="flex flex-col-reverse gap-10 w-4/12">
                    {
                        screenCopys.buttons.left.map((button) => <ScreenText key={button.label} label={button.label} position={Position.Left} />)
                    }
                </div>
                <div className="flex flex-col-reverse gap-10 w-4/12">
                    {
                        screenCopys.buttons.right.map((button) => <ScreenText key={button.label} label={button.label} position={Position.Right} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Screen;