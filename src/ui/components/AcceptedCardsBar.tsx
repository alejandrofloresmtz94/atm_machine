import React from 'react';
import useGlobalStore from '../../store/globalStore';
import CardType from '../../common/enums/cardType';

const AcceptedCardsBar: React.FC = () => {
    const currentUser = useGlobalStore((state) => state.currentUser);
    const cardTypes = Object.values(CardType);

    return (
        <div className="flex flex-row justify-between h-auto w-[70%] self-center py-2" id='acceptedCards'>
            {cardTypes.map((cardType) => (
                <div key={cardType} className={`h-10 w-12 bg-[auto_70px] card ${cardType} ${currentUser?.cardType === cardType ? "selected" : "unselected"}`} />
            ))}
        </div>
    );
};

export default AcceptedCardsBar;