import CardType from "../enums/cardType";
import User from "../interfaces/Users.interface";

const Users: User[] = [
  {
    id: 1,
    name: "John Doe",
    pin: "1234",
    balance: 1000,
    cardType: CardType.Maestro,
  },
  {
    id: 2,
    name: "Jane Smith",
    pin: "5678",
    balance: 1500,
    cardType: CardType.Visa,
  },
  {
    id: 3,
    name: "Alice Johnson",
    pin: "9101",
    balance: 2000,
    cardType: CardType.Mastercard,
  },
  {
    id: 4,
    name: "Bob Brown",
    pin: "1121",
    balance: 2500,
    cardType: CardType.Pulse,
  },
  {
    id: 5,
    name: "Charlie Davis",
    pin: "3141",
    balance: 3000,
    cardType: CardType.Star,
  },
  {
    id: 6,
    name: "Diana Evans",
    pin: "5161",
    balance: 3500,
    cardType: CardType.Maestro,
  },
  {
    id: 7,
    name: "Ethan Foster",
    pin: "7181",
    balance: 4000,
    cardType: CardType.Visa,
  },
  {
    id: 8,
    name: "Fiona Green",
    pin: "9202",
    balance: 4500,
    cardType: CardType.Mastercard,
  },
  {
    id: 9,
    name: "George Harris",
    pin: "1222",
    balance: 5000,
    cardType: CardType.Visa,
  },
  {
    id: 10,
    name: "Hannah White",
    pin: "3242",
    balance: 5500,
    cardType: CardType.Pulse,
  },
];

export default Users;
