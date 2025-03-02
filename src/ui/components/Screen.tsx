import React, { useMemo } from "react";
import useGlobalStore from "../../store/globalStore";
import ScreenConfiguration from "../../common/constants/screenConfiguration";

const Screen: React.FC = () => {

    const selectedScreen = useGlobalStore((state) => state.selectedScreen);

    const screenCopys = useMemo(() => {
        return ScreenConfiguration[selectedScreen];
    }, [selectedScreen]);

    return (
        <div className="h-[500px] w-full bg-iceberg border-8 border-timberwolf text-white font-main grow-0 flex flex-col justify-between">
            <span className="text-center text-2xl w-full">{screenCopys.title}</span>
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
    )
}

export default Screen;