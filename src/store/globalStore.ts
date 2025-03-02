import { create } from "zustand";
import GlobalStore from "../common/interfaces/GlobalStore.interface";
import ScreenType from "../common/enums/screenType";
import Users from "../common/constants/users";
import User from "../common/interfaces/Users.interface";

const useGlobalStore = create<GlobalStore>((set) => ({
  selectedScreen: ScreenType.Welcome,
  setSelectedScreen: (selectedScreen: ScreenType) => set({ selectedScreen }),
  userInput: "",
  setUserInput: (userInput: string) => set({ userInput }),
  usersList: Users,
  currentUser: null,
  logIn: () => {
    set((state) => {
      const user = Users.find((user: User) => user.pin === state.userInput);
      if (user) {
        return {
          currentUser: user,
          userInput: "",
          selectedScreen: ScreenType.Main,
        };
      } else {
        return {
          currentUser: null,
          userInput: "",
          selectedScreen: ScreenType.LoginError,
        };
      }
    });
  },
  logOut: () =>
    set({
      userInput: "",
      currentUser: null,
      selectedScreen: ScreenType.Welcome,
    }),
  logOutAndEnterPin: () =>
    set({
      userInput: "",
      currentUser: null,
      selectedScreen: ScreenType.Login,
    }),
  goToWithdraw: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.Withdraw,
    }),
  goToDeposit: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.Deposit,
    }),
  goToBalance: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.Balance,
    }),
  goToCustomInput: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.CustomInput,
    }),
  goToVerify: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.Verify,
    }),
  goToSuccess: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.Success,
    }),
  goToLoginError: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.LoginError,
    }),
  goToBalanceError: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.BalanceError,
    }),
  goToDepositError: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.DepositError,
    }),
  goToWithdrawError: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.WithdrawError,
    }),
}));

export default useGlobalStore;
