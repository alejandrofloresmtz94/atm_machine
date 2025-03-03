import React, { useEffect, useMemo } from 'react';
import useGlobalStore from '../../store/globalStore';
import useNumberInput from '../../hooks/useNumberInput';
import ScreenInputProps from '../../common/interfaces/ScreenInput.interface';
import { maskString } from '../../common/lib/utils';

const ScreenInput: React.FC<ScreenInputProps> = ({ selectedScreen }) => {
    const setUserInput = useGlobalStore((state) => state.setUserInput);

    const number = useNumberInput();

    const maskedNumber = useMemo(() => {
        return maskString(number, selectedScreen);
    }, [number, selectedScreen]);

    useEffect(() => {
        setUserInput(number);
    }, [number, setUserInput]);

    return (
        <span className="text-center text-sm w-full">
            {maskedNumber}
        </span>
    )
};

export default ScreenInput;