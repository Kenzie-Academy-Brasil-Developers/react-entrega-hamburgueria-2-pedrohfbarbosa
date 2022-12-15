import { CgSpinner } from "react-icons/cg";
import { IStyledPropsSpinner, SpinnerStyled } from "./SpinnerStyled";

export const Spinner = ({ small, medium, big }: IStyledPropsSpinner) => {
  return (
    <SpinnerStyled
      small={small || false}
      medium={medium || false}
      big={big || false}
    >
      <CgSpinner />
    </SpinnerStyled>
  );
};
