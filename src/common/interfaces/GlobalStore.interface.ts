import ScreenType from "../enums/screenType";
import User from "./Users.interface";

interface GlobalStore {
  selectedScreen: ScreenType;
  setSelectedScreen: (selectedScreen: ScreenType) => void;
  userInput: string;
  setUserInput: (userInput: string) => void;
  usersList: User[];
  resetUserList: () => void;
  currentUser: User | null;
  currentError: string | null;
  logIn: () => void;
  logOut: () => void;
  goToMain: () => void;
  logOutAndEnterPin: () => void;
  goToWithdraw: () => void;
  goToDeposit: () => void;
  goToBalance: () => void;
  goToCustomInput: () => void;
  goToVerify: () => void;
  goToSuccess: () => void;
  goToLoginError: () => void;
  goToError: () => void;
  withdraw: (payload: { [key: string]: never }) => void;
}

export default GlobalStore;
