import ButtonActions from "../enums/buttonActions";
import ButtonActionsWithPayload from "../enums/buttonActionsWithPayload";
import Position from "../enums/position";

interface ButtonProps {
  position: Position;
  action: ButtonActions | ButtonActionsWithPayload | undefined;
  payload?: { [key: string]: never };
}

export default ButtonProps;
