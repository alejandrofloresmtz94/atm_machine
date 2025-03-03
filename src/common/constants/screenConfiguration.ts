import ScreenConfigurationInterface from "../interfaces/ScreenConfiguration.interface";
import ButtonActions from "../enums/buttonActions";

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
    title: "Hi, {name}! please make a choice...",
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
    title: "Your balance is {balance}",
    buttons: {
      left: [],
      right: [],
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
    title: "Please select the amount you want to withdraw",
    buttons: {
      left: [],
      right: [],
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
      right: [],
    },
  },
  loginError: {
    title: "An error occurred, please try again",
    buttons: {
      left: [],
      right: [],
    },
  },
  balanceError: {
    title: "An error occurred, please try again",
    buttons: {
      left: [],
      right: [],
    },
  },
  depositError: {
    title: "An error occurred, please try again",
    buttons: {
      left: [],
      right: [],
    },
  },
  withdrawError: {
    title: "An error occurred, please try again",
    buttons: {
      left: [],
      right: [],
    },
  },
};

export default ScreenConfiguration;
