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
  logIn: () => void;
  logOut: () => void;
  logOutAndEnterPin: () => void;
  goToWithdraw: () => void;
  goToDeposit: () => void;
  goToBalance: () => void;
  goToCustomInput: () => void;
  goToVerify: () => void;
  goToSuccess: () => void;
  goToLoginError: () => void;
  goToBalanceError: () => void;
  goToDepositError: () => void;
  goToWithdrawError: () => void;
}

export default GlobalStore;
