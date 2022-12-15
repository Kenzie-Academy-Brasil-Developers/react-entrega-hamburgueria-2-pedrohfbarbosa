import { FiShoppingBag } from "react-icons/fi";
import { Text } from "../../../styles/Typography";
import { ToastStyled } from "./ToastStyled";

export const ToastMainPage = () => {
  return (
    <ToastStyled>
      <figure>
        <FiShoppingBag />
      </figure>

      <Text fontSize="size5" fontWeight="500" color="gray50">
        A vida é como um sanduíche, é preciso recheá-la com os melhores
        ingredientes.
      </Text>
    </ToastStyled>
  );
};
