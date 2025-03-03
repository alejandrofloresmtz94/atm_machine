import { create } from "zustand";
import GlobalStore from "../common/interfaces/GlobalStore.interface";
import ScreenType from "../common/enums/screenType";
import Users from "../common/constants/users";
import Services from "../services/local.services";
import ResponseStatus from "../common/enums/responseStatus";
import User from "../common/interfaces/Users.interface";
import ButtonActionsWithPayload from "../common/enums/buttonActionsWithPayload";

const useGlobalStore = create<GlobalStore>((set, get) => ({
  selectedScreen: ScreenType.Welcome,
  setSelectedScreen: (selectedScreen: ScreenType) =>
    set({ selectedScreen, userInput: "" }),
  userInput: "",
  setUserInput: (userInput: string) => set({ userInput }),
  usersList: Users,
  resetUserList: () => set({ usersList: Users }),
  currentUser: null,
  currentError: null,
  currentAction: null,
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
  goToCustomInput: (payload: { [key: string]: unknown }) => {
    const currAction = payload.action as ButtonActionsWithPayload;
    set({
      userInput: "",
      selectedScreen: ScreenType.CustomInput,
      currentAction: currAction,
    });
  },
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
  withdraw: (payload: { [key: string]: unknown }) => {
    set((state) => {
      if (!state.currentUser) return state;
      const response = Services.withdraw(
        state.currentUser.id,
        payload.amount as number
      );
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
  deposit: (payload: { [key: string]: unknown }) => {
    set((state) => {
      if (!state.currentUser) return state;
      const response = Services.deposit(
        state.currentUser.id,
        payload.amount as number
      );
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
  runActualAction: () => {
    console.log(get().currentAction, get().userInput);
    const amountNumber = Number.parseFloat(get().userInput);
    if (get().currentAction === ButtonActionsWithPayload.deposit) {
      get().deposit({ amount: amountNumber });
    } else if (get().currentAction === ButtonActionsWithPayload.withdraw) {
      get().withdraw({ amount: amountNumber });
    }
  },
}));

export default useGlobalStore;
