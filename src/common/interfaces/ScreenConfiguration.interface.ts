import ButtonActions from "../enums/buttonActions";

interface Button {
  label: string;
  action: ButtonActions;
}

interface ScreenConfigurationButtons {
  left: Button[];
  right: Button[];
}

interface ScreenConfiguration {
  welcome: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  login: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  main: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  balance: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  deposit: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  withdraw: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  customInput: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  verify: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  success: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  loginError: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  balanceError: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  depositError: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
  withdrawError: {
    title: string;
    buttons: ScreenConfigurationButtons;
  };
}

export default ScreenConfiguration;
