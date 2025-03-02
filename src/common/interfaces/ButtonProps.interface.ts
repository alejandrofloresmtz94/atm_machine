import ButtonActions from "../enums/buttonActions";
import Position from "../enums/position";

interface ButtonProps {
  position: Position;
  action: ButtonActions | undefined;
}

export default ButtonProps;
