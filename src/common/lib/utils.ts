import ScreenType from "../enums/screenType";

export const maskString = (string: string, screenType: ScreenType) => {
  if (screenType === ScreenType.Login) {
    return string.replace(/./g, "*");
  } else {
    const number = parseFloat(string);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);
  }
};
