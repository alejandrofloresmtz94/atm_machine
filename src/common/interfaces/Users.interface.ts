import CardType from "../enums/cardType";

interface User {
  id: number;
  name: string;
  pin: string;
  balance: number;
  cardType: CardType;
}

export default User;
