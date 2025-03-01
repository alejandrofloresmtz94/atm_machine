import React from 'react';
import credit_cards from '@common/assets/images/creditcard_sprite.png';

const CardSelector: React.FC = () => {
    return (
        <div className="flex flex-row justify-between h-auto w-[70%] self-center py-2">
            <div className={`h-10 w-12 bg-[auto_70px]`} style={{ backgroundImage: `url(${credit_cards})`, backgroundPositionX: '0', backgroundPositionY: '40px' }}></div>
            <div className={`h-10 w-16 bg-[auto_70px]`} style={{ backgroundImage: `url(${credit_cards})`, backgroundPositionX: '330px', backgroundPositionY: '40px' }}></div>
            <div className={`h-10 w-12 bg-[auto_70px]`} style={{ backgroundImage: `url(${credit_cards})`, backgroundPositionX: '240px', backgroundPositionY: '38px' }}></div>
            <div className={`h-10 w-12 bg-[auto_70px]`} style={{ backgroundImage: `url(${credit_cards})`, backgroundPositionX: '175px', backgroundPositionY: '38px' }}></div>
            <div className={`h-10 w-14 bg-[auto_70px]`} style={{ backgroundImage: `url(${credit_cards})`, backgroundPositionX: '110px', backgroundPositionY: '35px' }}></div>
            <div className={`h-10 w-12 bg-[auto_70px]`} style={{ backgroundImage: `url(${credit_cards})`, backgroundPositionX: '48px', backgroundPositionY: '35px' }}></div>
        </div>
    );
};

export default CardSelector;