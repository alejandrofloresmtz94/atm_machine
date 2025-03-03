import ServiceResponse from "./ServiceResponse.interface";
import User from "./Users.interface";

interface ServicesInterface {
  userLogin: (pin: string) => User | undefined;
  userLogout: () => boolean;
  withdraw: (userId: number, amount: number) => ServiceResponse;
}

export default ServicesInterface;
