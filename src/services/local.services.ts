import ResponseStatus from "../common/enums/responseStatus";
import ServiceResponse from "../common/interfaces/ServiceResponse.interface";
import ServicesInterface from "../common/interfaces/Services.interface";
import User from "../common/interfaces/Users.interface";
import Users from "../common/constants/users";
import useGlobalStore from "../store/globalStore";

class Services implements ServicesInterface {
  userLogin(pin: string) {
    const user = Users.find((user: User) => user.pin === pin);
    return user;
  }
  userLogout() {
    return true;
  }

  withdraw(userId: number, amount: number): ServiceResponse {
    const usersList = useGlobalStore.getState().usersList;
    const user = usersList.find((user: User) => user.id === userId);
    if (!user) {
      return {
        status: ResponseStatus.Error,
        errorMessage: "User Not Found",
      };
    }
    const userAmount = user.balance - amount;
    if (userAmount < 0) {
      return {
        status: ResponseStatus.Error,
        errorMessage: "Your Withdraw exceeds your actual balance",
      };
    }
    const returnedUser = { ...user, balance: userAmount } as User;
    return {
      status: ResponseStatus.Ok,
      data: { returnedUser },
    };
  }

  deposit(userId: number, amount: number): ServiceResponse {
    const usersList = useGlobalStore.getState().usersList;
    const user = usersList.find((user: User) => user.id === userId);
    if (!user) {
      return {
        status: ResponseStatus.Error,
        errorMessage: "User Not Found",
      };
    }
    const userAmount = user.balance + amount;
    const returnedUser = { ...user, balance: userAmount } as User;
    return {
      status: ResponseStatus.Ok,
      data: { returnedUser },
    };
  }
}

const instance = new Services();

export default instance;
