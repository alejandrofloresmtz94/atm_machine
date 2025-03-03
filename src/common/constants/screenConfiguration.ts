import ScreenConfigurationInterface from "../interfaces/ScreenConfiguration.interface";
import ButtonActions from "../enums/buttonActions";
import ButtonActionsWithPayload from "../enums/buttonActionsWithPayload";

const ScreenConfiguration: ScreenConfigurationInterface = {
  welcome: {
    title: "Welcome to the ATM",
    buttons: {
      left: [],
      right: [
        {
          label: "Enter PIN",
          action: ButtonActions.logOutAndEnterPin,
        },
      ],
    },
  },
  login: {
    title: "Please enter your PIN",
    buttons: {
      left: [],
      right: [
        { label: "Enter", action: ButtonActions.logIn },
        {
          label: "Cancel",
          action: ButtonActions.logOut,
        },
      ],
    },
  },
  main: {
    title: "Hi {name}!\nplease make a choice...",
    buttons: {
      left: [
        {
          label: "Withdraw",
          action: ButtonActions.goToWithdraw,
        },
        {
          label: "Deposit",
          action: ButtonActions.goToDeposit,
        },
      ],
      right: [
        {
          label: "Exit",
          action: ButtonActions.logOut,
        },
        {
          label: "Balance",
          action: ButtonActions.goToBalance,
        },
        {
          label: "Re-enter PIN",
          action: ButtonActions.logOutAndEnterPin,
        },
      ],
    },
  },
  balance: {
    title: "Your balance is:\n{balance}",
    buttons: {
      left: [],
      right: [
        {
          label: "Return to main menu",
          action: ButtonActions.goToMain,
        },
      ],
    },
  },
  deposit: {
    title: "Please select the amount you want to deposit",
    buttons: {
      left: [],
      right: [],
    },
  },
  withdraw: {
    title: "Please select the amount",
    buttons: {
      left: [
        {
          label: "$20",
          action: ButtonActionsWithPayload.withdraw,
          payload: { amount: 20 },
        },
        {
          label: "$10",
          action: ButtonActionsWithPayload.withdraw,
          payload: { amount: 10 },
        },
        {
          label: "$5",
          action: ButtonActionsWithPayload.withdraw,
          payload: { amount: 5 },
        },
        {
          label: "$2",
          action: ButtonActionsWithPayload.withdraw,
          payload: { amount: 2 },
        },
      ],
      right: [
        {
          label: "Custom",
          action: ButtonActions.goToCustomInput,
          payload: { action: ButtonActionsWithPayload.withdraw },
        },
        { label: "Cancel", action: ButtonActions.goToMain },
        {
          label: "$100",
          action: ButtonActionsWithPayload.withdraw,
          payload: { amount: 100 },
        },
        {
          label: "$50",
          action: ButtonActionsWithPayload.withdraw,
          payload: { amount: 50 },
        },
      ],
    },
  },
  customInput: {
    title: "Please enter the amount",
    buttons: {
      left: [],
      right: [],
    },
  },
  verify: {
    title: "Please verify the amount",
    buttons: {
      left: [],
      right: [],
    },
  },
  success: {
    title: "Your transaction was successful!",
    buttons: {
      left: [],
      right: [
        {
          label: "Return to main menu",
          action: ButtonActions.goToMain,
        },
      ],
    },
  },
  loginError: {
    title: "User not found, please try again",
    buttons: {
      left: [],
      right: [
        { label: "Re-Enter PIN", action: ButtonActions.logOutAndEnterPin },
        {
          label: "Cancel",
          action: ButtonActions.logOut,
        },
      ],
    },
  },
  generalError: {
    title: "{errorMsg}",
    buttons: {
      left: [],
      right: [
        {
          label: "Return to main menu",
          action: ButtonActions.goToMain,
        },
      ],
    },
  },
};

export default ScreenConfiguration;
