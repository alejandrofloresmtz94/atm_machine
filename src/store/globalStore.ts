import { create } from "zustand";
import GlobalStore from "../common/interfaces/GlobalStore.interface";
import ScreenType from "../common/enums/screenType";
import Users from "../common/constants/users";
import Services from "../services/local.services";
import ResponseStatus from "../common/enums/responseStatus";
import User from "../common/interfaces/Users.interface";

const useGlobalStore = create<GlobalStore>((set) => ({
  selectedScreen: ScreenType.Welcome,
  setSelectedScreen: (selectedScreen: ScreenType) =>
    set({ selectedScreen, userInput: "" }),
  userInput: "",
  setUserInput: (userInput: string) => set({ userInput }),
  usersList: Users,
  resetUserList: () => set({ usersList: Users }),
  currentUser: null,
  currentError: null,
  logIn: () => {
    set((state) => {
      const user = Services.userLogin(state.userInput);
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
          currentError: "",
        };
      }
    });
  },
  logOut: () => {
    set((state) => {
      const logoutStatus = Services.userLogout();
      if (logoutStatus) {
        return {
          currentUser: null,
          userInput: "",
          selectedScreen: ScreenType.Welcome,
        };
      }
      return state;
    });
  },
  logOutAndEnterPin: () => {
    set((state) => {
      const logoutStatus = Services.userLogout();
      if (logoutStatus) {
        return {
          currentUser: null,
          userInput: "",
          selectedScreen: ScreenType.Login,
        };
      }
      return state;
    });
  },
  goToMain: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.Main,
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
  goToError: () =>
    set({
      userInput: "",
      selectedScreen: ScreenType.GeneralError,
    }),
  withdraw: (payload: { [key: string]: never }) => {
    set((state) => {
      if (!state.currentUser) return state;
      const response = Services.withdraw(state.currentUser.id, payload.amount);
      if (response.status === ResponseStatus.Ok && response.data) {
        const returnedUser = response.data.returnedUser as User;
        const newUsersList = state.usersList.map((user: User) => {
          return returnedUser.id === user.id ? returnedUser : user;
        });
        return {
          ...state,
          usersList: newUsersList,
          currentError: "",
          selectedScreen: ScreenType.Success,
          currentUser: returnedUser,
        };
      } else {
        return {
          ...state,
          currentError: response.errorMessage,
          selectedScreen: ScreenType.GeneralError,
        };
      }
    });
  },
}));

export default useGlobalStore;
