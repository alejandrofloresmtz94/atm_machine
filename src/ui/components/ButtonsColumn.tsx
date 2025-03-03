import React, { useMemo } from 'react';
import Button from './Button';
import ButtonsColumnProps from '../../common/interfaces/ButtonsColumn.interface';
import useGlobalStore from '../../store/globalStore';
import ScreenConfiguration from "../../common/constants/screenConfiguration";

const ButtonsColumn: React.FC<ButtonsColumnProps> = ({ position }) => {
    const selectedScreen = useGlobalStore((state) => state.selectedScreen);

    const columnButtons = useMemo(() => {
        return ScreenConfiguration[selectedScreen].buttons[position];
    }, [selectedScreen, position]);

    return (
        <div className="flex flex-col-reverse justify-start gap-10 grow buttons-column w-2/12 pb-10">
            {[...Array(4)].map((_, index) => {
                const btnData = columnButtons.at(index);
                return (
                    <Button key={`${position}-${index}`} position={position} action={btnData?.action} payload={btnData?.payload} />
                )
            })}
        </div>
    )
};

export default ButtonsColumn;